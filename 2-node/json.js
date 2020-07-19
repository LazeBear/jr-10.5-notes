// serialization, de-serialization
// <> <>
// { key: value  } -> <>key:value<>

// GET, POST, PUT, DELETE -> http methods
//

// 1. versioning
// api.domain.com/v1/
// domain.com/api/v2/

// 2. resource是复数
// GET /users

// 3. 保证METHOD的使用
// GET 取 (读）， POST 添加（写）， PUT 修改（更新）， DELETE 删除（删除）

// 4. 适当进行分页

// 5. 用适当的status code来表示请求的结果

// 6. 返回明确易懂的信息（包含错误信息）
// { error: "unauthorized user"}
