'use strict';

const AV = require('leanengine');
const Router = require('koa-router');

const router = new Router({prefix: '/users'});

const WechatUser = AV.Object.extend('WechatUser');

// 查询 user 列表
router.get('/', async function (ctx) {
  const query = new AV.Query(WechatUser);
  ctx.body = await query.find();
});

// 查询 user
router.get('/:id', async function (ctx) {
  try {
    const id = ctx.params.id
    const query = new AV.Query(WechatUser)
    ctx.body = await query.get(id)
  } catch (error) {
    ctx.body = error
  }
});

// 创建 user
router.post('/', async function (ctx) {
  try {
    const params = ctx.request.body
    const user = new WechatUser()

    user.set('nickname', params.nickname)
    user.set('gender', params.gender)
    user.set('avatar', params.avatar)
    user.set('phone', params.phone)
    user.set('openId', params.openId)

    ctx.body = await user.save()
  } catch (error) {
    ctx.body = error
  }
});

// 更新 user
router.put('/:id', async function (ctx) {
  try {
    const id = ctx.params.id
    const params = ctx.request.body
    const user = AV.Object.createWithoutData('WechatUser', id)

    user.set('nickname', params.nickname)
    user.set('gender', params.gender)
    user.set('avatar', params.avatar)
    user.set('phone', params.phone)
    user.set('openId', params.openId)

    ctx.body = await user.save()
  } catch (error) {
    ctx.body = error
  }
})

// 删除 user
router.delete('/:id', async function (ctx) {
  try {
    const id = ctx.params.id
    const user = AV.Object.createWithoutData('User', id)

    ctx.body = await user.destroy()
  } catch (error) {
    ctx.body = error
  }
})

module.exports = router;
