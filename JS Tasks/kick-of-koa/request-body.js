const koa = require('koa');
const parse = require('co-body');
const app = new koa();

app.use(function* (next) {
    if (this.method !== 'POST') {
        return yield next
    };
  
    var body = yield parse(this, { limit: '1kb' });
  
    this.body = body.name.toUpperCase();
});
  
app.listen(process.argv[2]);