const koa = require('koa');
const app = new koa();

app.use(function* () {
    this.body = this.request.is('json') ? { message: 'hi!' }  : 'ok';
});
  
app.listen(process.argv[2]);