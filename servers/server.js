var http              =   require("http");
var express           =   require("express");
var bodyParser        =   require("body-parser");
var methodOverride    =   require("method-override");

var app               =   express();
    app.use(bodyParser());
    app.use(methodOverride());
    app.listen(3000, function () {
        console.log("Server started on " + 3000 +" port");
    });

    {
        app.use("/" + "apidoc", express.static("apidoc"));      
    }

    {
        app.use("/api/test", require(__base + "/rest/test.js"));
    }

module.exports = {
    startServer : function(){
        http.createServer(app);
    }
};