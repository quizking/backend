import { asyncHandler } from "../utils/asyncHandler.js";
//creation of methods

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

//export a user controller
export {
    registerUser
}
