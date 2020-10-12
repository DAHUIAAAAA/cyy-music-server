const
    fs = require('fs'),
    path = require('path'),
    Koa = require('koa'),
    app = new Koa(),
    static = require('koa-static'),
    router = require('./routes'),
    koaBody = require('koa-body'),
    cors = require('koa2-cors');

app.use(koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 2 * 1024 * 1024
    },
}));

app.use(cors());

app.use(static(
    path.join(__dirname)
));

app.use(async (ctx, next) => {
    if (ctx.url.startsWith('/api') || ctx.url.startsWith('./static')) {
        await next();
        return;
    }
    try {
        const file = fs.readFileSync('index.html', 'utf-8');
        ctx.header['content-type'] = 'text/html;chartset=utf-8';
        ctx.body = file;
    } catch (e) {
        console.log(e)
    }
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Server is runing...');
})