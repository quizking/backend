const asyncHandler =  (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler).catch((err) => next(err))
    }

}

export { asyncHandler }


//const asyncHandler =  () => {}
//const asyncHandler =  (func) => () => {}
//const asyncHandler =  (func) => async() => {}


// const asyncHandler = (fn) =>async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     }catch (error){
//         res.status(err.code || 500).json({
//             sucess:false,
//             message:err.message
//         })
//     }
// }