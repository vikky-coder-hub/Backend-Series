// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }catch(error){
//         res.send(error.code ||404).json({
//             sucess:false,
//             msg:error.message
//         })
//     }
// }



const asyncHandler = (requestHandler)=>{
    (req, res,  next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}





export {asyncHandler}