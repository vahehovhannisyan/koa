const KoaRouter = require ("koa-router");
const router = new KoaRouter();

router.get("/", loginPage);


 async function loginPage(ctx) {
    await ctx.render("./views/login");
};

module.export = router;






