'use strict';

const AV = require('leanengine');
const Router = require('koa-router');

const router = new Router({prefix: '/users'});

// 查询 Todo 列表
router.get('/', async function(ctx) {
  ctx.body = { name: 'judithwww' };
});

module.exports = router;
