import axios from "axios";

const postHandler = async (URL) =>{        
  const headers = {
      'Content-Type': 'application/json'
  };
  let response;
  await axios.get(URL, headers)
            .then((res)=>{
                            console.log(res)
                            response = {
                              status:1,
                              data:res.data
                            }
                          })
            .catch((err)=>{
                            response= {
                              status :0,
                              data :err.response.data
                            }
                            console.log(response)
                          });
  return response                        
}

export default postHandler