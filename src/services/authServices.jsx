import axios from "axios";

export const getTokenOnLogin=(navigate)=>async(user,seteToken,location)=>{

    try{
        const response=await axios.post (`/api/auth/login`,{
            email:user.email,
            password:user.password,
        });
        if(response.status===200){
            localStorage.setItem("user",JSON.stringify(response.data.foundUser));
            localStorage.setItem("eToken",response.data.encodedToken);
            seteToken(()=>response.data.encodedToken);
            navigate(location?.state?.from?.pathname||"/",{replace:true})
        }
        else{
            navigate("/login");
        }
    }catch(error){
        console.log(error); 
    }
}

export const createNewUser=(seteToken,navigate)=>async(userObj)=>{
    try{
        const response=await axios.post (`/api/auth/signup`,{
            userName:userObj.userName,
            email:userObj.email,
            password:userObj.password,
        });
        if(response.status===201){
            localStorage.setItem("user",JSON.stringify(response.data.createdUser));
            localStorage.setItem("eToken",response.data.encodedToken);
            seteToken(()=>response.data.encodedToken)
            navigate("/")
        }
        else{
            navigate("/signup");
        }
        console.log(response);
    }catch(error){
        console.log(error);
    }
}