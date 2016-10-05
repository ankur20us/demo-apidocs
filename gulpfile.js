var gulp        =   require("gulp");
var exec        =   require("child_process").exec;
var pathWhereRestLies = "<FOLDER WHERE YOU CLONED THE REPO>/demo-apidocs/rest/";


gulp
    .task("start", function () {
        exec("./node_modules/.bin/apidoc -i " + pathWhereRestLies + " -o apidoc/");
        return exec("forever -a start app.js");
    })
    .task("restart", function(){
        return exec("forever stopall", function(){
            exec("./node_modules/.bin/apidoc -i " + pathWhereRestLies + " -o apidoc/");
            return exec("forever -a start app.js");
        });
    })
    .task("stop", function(){
        return exec("forever stopall");
    });

