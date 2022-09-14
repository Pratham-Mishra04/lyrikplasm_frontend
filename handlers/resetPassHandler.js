import postHandler from "../reqHandlers/postHandler.js"
import Toaster from "../utils/toaster.js"

const forgotPassHandler = async(formData)=>{
    const URL = `http://127.0.0.1:8000/resetPassword`;
    const loader =Toaster.startLoad()
    const res= await postHandler(URL, formData);
    Toaster.stopLoad(loader, res.data.message, res.status)
    //login and redirect
}

export default forgotPassHandler;