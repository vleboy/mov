const Koa = require('koa');
const app = new Koa();
const { normal } = require('./tpl') 

const server = async (ctx,next)=>{
    ctx.type = 'text/html;charset="utf-8"'
    ctx.body = normal
}
app.use(server);
app.listen(3388);