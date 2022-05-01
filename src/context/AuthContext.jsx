import {useContext,createContext,useState} from "react";

const AuthContext=createContext();
const useAuth=()=>useContext(AuthContext);

const AuthProvider=({children})=>{
    const [user,setUser]=useState({});
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuth,AuthProvider};