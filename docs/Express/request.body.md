---
sidebar_position: 7
---

# 在 express 解析 req.body

這邊會用到兩個 Middleware 幫我們拿到 req.body 的資料

```js
// middleware to read body, parse it and place results in req.body
app.use(express.json()); // for application/json
app.use(express.urlencoded()); // for application/x-www-form-urlencoded
```

如果資料是用 form 送出的話，資料型態會是 `application/x-www-form-urlencoded` 會需要用到 `express.urlencoded` 來解析
