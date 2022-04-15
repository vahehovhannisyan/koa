const koa = require("Koa");
const json = require("koa-json");
const KoaRouter = require ("koa-router");
const path = require("path");
const render = require("koa-ejs");
const bodyParser = require ("koa-bodyparser");


// const ind = import ("/index.js");




const app = new koa();

const router = new KoaRouter();
const things = ["My work", "My family", "My game"];

app.use(json());

app.use(bodyParser());

app.context.user = "Vahe";

// app.use(async ctx => (ctx.body = {msg :"Hello Koa"}));

app.use(router.routes()).use(router.allowedMethods());


render(app, {

    root: path.join(__dirname, 'views'),
    //layout: "layout",
    //viewExt: "html",
    cache: false,
    debug: false,

});




router.get("/", index);

router.get("/add", showAdd);

router.post("/add", add);

async function index (ctx) {

    await ctx.render('index', {
        title: "My favourite things",
        things:things,
    });

};


async function showAdd (ctx) {
    await ctx.render('add');
};

async function add (ctx) {
   const body = ctx.request.body;
   things.push(body.thing);
   ctx.redirect("/");
};

// router.get("/", async ctx => {
//     await ctx.render('index', {
//         title: "My favourite things 2",
//         things:things,
//     });
// });

router.get("/test", ctx => (ctx.body = `hello ${ctx.user}`));

router.get("/test2/:name", ctx => (ctx.body = `hello ${ctx.params.name}`));



app.listen(3000, () => console.log("Server started") );