const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');

const index = require('./routes/index');

app.use(json());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));


app.use(index.routes(), index.allowedMethods());

module.exports = app;
