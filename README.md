# demo-apidocs
The demo code to understand the ApiDoc functionality


The code is a demo to understand how ApiDoc works.

Some of the important points:

    1. After that, in order to use this here are the commands:
        a. git clone https://github.com/ankur20us/demo-apidocs.git
        b. npm install
            i. Change the path where you cloned the directory, i.e where the rest folder lies, in gulpfile.js at line 3.
        c. gulp start 
    2. I have been using gulp to automate the process of the build.
        a. In that I uses commands 
            ...$ gulp start
            or
            ...$ gulp restart
        b. All the above commands create the documentation for the files under "rest" directory by searching  in the comments section, you can see the command easily in gulpfile.js
    3. After the command gets executed perfectly, the server is started at port 3000
    4. The documentation is served at  http://localhost:3000/apidoc
    5. The server serves 2 apis, namely:
        a. http://localhost:3000/api/test/gets
            GET call
        b. http://localhost:3000/api/test/post
            POST call but takes any json as body and returns the same 