import { toast } from 'react-toastify';

class Toaster{

    static toastSettings= {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        };

    static success(message){
        return toast.success(message, this.toastSettings);
    }
    
    static error(message){
            toast.error(message, this.toastSettings);
    }

    static startLoad(message="Loading..."){
        return toast.loading(message, this.toastSettings);
    }

    static stopLoad(loader, message, res){
        const settings={...this.toastSettings};
        settings.render=message;
        settings.type=(res==1)? "success":"error";
        settings.isLoading= false;
        toast.update(loader,settings);
    }
}

export default Toaster;