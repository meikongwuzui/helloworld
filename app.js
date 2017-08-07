var express=require('express');
var app=express();
var indexrouter=require('src/index');

var options={
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}

app.use(express.static('src',options));

app.use('/',indexrouter);

app.listen(80,function(){
    console.log("app is listen on 80");
});