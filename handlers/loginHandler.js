import postHandler from "../reqHandlers/postHandler.js"
import Toaster from "../utils/toaster.js"

const loginHandler = async(formData) =>{
    const URL = `http://127.0.0.1:8000/users/login`;
    const res= await postHandler(URL, formData);
    if(res.status==1) Toaster.success("Logged In!");
    else Toaster.error(res.data.message)
}

export default loginHandler