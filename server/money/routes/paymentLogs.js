'use strict';

const AV = require('leanengine');
const Router = require('koa-router');

const router = new Router({prefix: '/paymentLogs'});

const PaymentLog = AV.Object.extend('PaymentLog');

// 查询列表
router.get('/', async function(ctx) {
  const query = new AV.Query(PaymentLog)
  ctx.body = await query.find()
});

// 查询一条记录
router.get('/:id', async function (ctx) {
  try {
    const id = ctx.params.id
    const query = new AV.Query(PaymentLog)
    ctx.body = await query.get(id)
  } catch (error) {
    ctx.body = error
  }
})

// 创建记账记录
router.post('/', async function (ctx) {
  try {
    const params = ctx.request.body
    const paymentLog = new PaymentLog()

    paymentLog.set('type', params.type)
    paymentLog.set('category', params.category)
    paymentLog.set('money', params.money)

    ctx.body = await paymentLog.save()
  } catch (error) {
    ctx.body = error
  }
})

// 修改记账记录
router.put('/:id', async function (ctx) {
  try {
    const id = ctx.params.id
    const params = ctx.request.body
    const paymentLog = AV.Object.createWithoutData('PaymentLog', id)

    paymentLog.set('type', params.type)
    paymentLog.set('category', params.category)
    paymentLog.set('money', params.money)

    ctx.body = await paymentLog.save()
  } catch (error) {
    ctx.body = error
  }
})

// 删除记账记录
router.delete('/:id', async function (ctx) {
  try {
    const id = ctx.params.id
    const paymentLog = AV.Object.createWithoutData('PaymentLog', id)

    ctx.body = await paymentLog.destroy()
  } catch (error) {
    ctx.body = error
  }
})

module.exports = router;
