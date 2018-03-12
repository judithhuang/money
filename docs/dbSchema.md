# 说明

- 所有实体都将包含 `isDeleted`, `deletedAt` 和 `createdAt` 字段，故下面将不再一一列出

# user 用户

```js
{
  _id: ObjectId,
  nickname: String,
  gender: Enum,
  avatar: string,
  phone: string,
  // 微信号
  openId: string
}
```

# paymentLog 记账记录

```js
{
  _id: ObjectId,
  type: Enum,
  category: Enum,
  // 自定义的类别
  paymentCategoryId: ObjectId,
  money: Float,
}
```

# paymentCategory 记账记录类别

```js
{
  _id: ObjectId,
  name: string,
  icon: string
}
```
