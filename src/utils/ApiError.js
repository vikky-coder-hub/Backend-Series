class ApiError extends Error {
    Constructor(
        statusCode,
        message = "Something ent wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.Constructor)
        }
    }
}
export {ApiError}