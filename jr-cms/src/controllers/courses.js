const Course = require('../models/course');
const Student = require('../models/student');
// const Joi = require('joi');
// express-async-errors
// function tryCatch(routeHandler) {
//   return (req, res, next) => {
//     try {
//       routeHandler(req, res, next);
//     } catch (e) {
//       next(e);
//     }
//   }
// }

// const asyncHandler = (fn) => (req, res, next) => {
//   return Promise.resolve(fn(req, res, next)).catch(next);
// };

async function addCourse(req, res) {
  const { name, code, description } = req.body;
  // validate user input, params
  // const schema = Joi.object({
  //   name: Joi.string().min(2).max(10).required(),
  //   // a-z A-Z 0-9
  //   code: Joi.string()
  //     .regex(/^[a-zA-Z0-9]+$/)
  //     .required(),
  //   description: Joi.string()
  // });
  // const data = await schema.validateAsync(req.body, {
  //   allowUnknown: true,
  //   stripUnknown: true
  // });
  const existingCourse = await Course.findById(code).exec();
  if (existingCourse) {
    return res.status(409).json('Duplicate course code');
  }

  // next(new CustomError('xxxxx'));
  const course = new Course({ code, name, description });
  await course.save();

  // try {
  //   await course.save();
  // } catch (e) {
  //   next(e);
  //   return;
  // }

  // course.save((error, result) => {
  //   if (error) {
  //     next(error);
  //     return res.status(400).json(error);
  //   }
  //   return res.json(result);
  // })

  // course
  //   .save()
  //   .then((result) => {
  //     return res.json(result);
  //   })
  //   .catch((error) => {
  //     next(error);
  //     return res.status(400).json(error);
  //   });

  return res.status(201).json(course);
}

async function getCourse(req, res) {
  const { id: code } = req.params;
  const course = await Course.findById(code).populate('students').exec();
  if (!course) {
    return res.status(404).json('course not found');
  }
  return res.json(course);
}

async function getAllCourses(req, res) {
  // Course.find((err, result) => {
  //   if (err) res.status(400).json(err);
  //   res.json(result);
  // });
  const courses = await Course.find().exec();
  return res.json(courses);
  // {status: 'ok', data: courses, error: error}
}
// 200, 201, 204, 400, 401, 403, 404
// 400 -> user params invalid
// 401 -> unauthorized
// 403 -> no permission
async function updateCourse(req, res) {
  const { id: code } = req.params;
  // await Course.findByIdAndUpdate(code, req.body, {new:true})
  const { name, description } = req.body;
  // validate params
  const course = await Course.findByIdAndUpdate(
    code,
    { name, description },
    { new: true }
  ).exec();

  //
  // const course = await Course.findById(code);
  if (!course) {
    return res.status(404).json('course not found');
  }
  // course.name = name;
  // course.description = description;
  await course.save();

  return res.json(course);
}
async function deleteCourse(req, res) {
  const { id: code } = req.params;
  const course = await Course.findByIdAndDelete(code).exec();

  if (!course) {
    return res.status(404).json('course not found');
  }

  // clean refs
  // db.collections.updateMany
  await Student.updateMany(
    { courses: course._id },
    {
      $pull: {
        courses: course._id
      }
    }
  ).exec();

  return res.sendStatus(204);
  // return res.status(204).json(course);
}

module.exports = {
  addCourse,
  getCourse,
  getAllCourses,
  updateCourse,
  deleteCourse
};
