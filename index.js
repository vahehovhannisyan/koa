const KoaRouter = require ("koa-router");
const router = new KoaRouter();


const loginRouter = require('./routes/login');
loginRouter.use(router.routes());



