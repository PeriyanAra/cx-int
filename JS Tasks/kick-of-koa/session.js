const koa = require('koa');
const session = require('koa-session');
const app = new koa();

app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function *(){
  var n = ~~this.session.view + 1;
  this.session.view = n;
  this.body = n + ' views';
});

app.listen(process.argv[2]);