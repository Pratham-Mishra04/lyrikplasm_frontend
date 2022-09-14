import postHandler from "../reqHandlers/postHandler.js"
import Toaster from "../utils/toaster.js"

const forgotPassHandler = async(formData)=>{
    const URL = `http://127.0.0.1:8000/users/forgotPassword`;
    const loader =Toaster.startLoad()
    const res= await postHandler(URL, formData);
    Toaster.stopLoad(loader, res.data.message, res.status)
}

export default forgotPassHandler;