class ApiResponse {
    Constructor(statusCode,data,message ="Sucess"){
           this.statusCode = statusCode
           this.data = data
           this.message = message
           this.success = statusCode<400
    }
}