var   express             =   require('express'),
        router              =   express.Router();


router
     /***
     * @apiDefine ServerError
     * @apiErrorExample 500:
     * HTTP/1.1 500 Server Error
     * {
     *      "statusCode": 500,
     *      "status": false,
     *      "message": "Internal Server Error.",
     *      "data" : "{Message with the Internal server error}"
     * }
     */
     /***
     * @api {get} /test/get Get TestGet
     * @apiName TestGet
     * @apiGroup Test
     * @apiVersion 1.0.0
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * 
     * "I am get"
     * 
     * @apiUse ServerError
     */
    .get("/get", function(request, response){
        return response.status(200).send("I am get");
    })
     /***
     * @api {post} /test/post Post TestPost
     * @apiName TestPost
     * @apiGroup Test
     * @apiVersion 1.0.0
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * 
     * {
     *      'Whatever json is passed it comes back'
     * }
     * 
     * @apiUse ServerError
     */
    .post("/post", function(request, response){
        return response.status(200).send(request.body);
    });

module.exports = router;