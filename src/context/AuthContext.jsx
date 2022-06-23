import {useContext,createContext,useState} from "react";

const AuthContext=createContext();
const useAuth=()=>useContext(AuthContext);

const AuthProvider=({children})=>{
    const readToken=()=>{
        let val;
        if (val!==""){
            return localStorage.getItem("eToken")
        }else{
            return ""
        }
    }
    const readUser=()=>{
        let val;
        if (val!=={}){
            return JSON.parse(localStorage.getItem("user"))
        }else{
            return {}
        }
    }
    const [user,setUser]=useState(readUser);
    const [eToken,seteToken]=useState(readToken);
    // const [error,setError]=useState("");
    return(
        <AuthContext.Provider value={{user,setUser,eToken,seteToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuth,AuthProvider};