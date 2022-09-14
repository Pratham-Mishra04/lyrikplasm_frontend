import axios from "axios";

const postHandler = async (URL, formData) =>{        
      const headers = {
          'Content-Type': 'application/json'
      };
      let response;
      await axios.post(URL, formData, headers)
                .then((res)=>{
                                response = {
                                  status:1,
                                  data:res.data
                                    }
                                })
                .catch((err)=>{
                                console.log(err)
                                response= {
                                  status :0,
                                  data :err.response.data
                                    }
                                });
      return response                        
  }

export default postHandler