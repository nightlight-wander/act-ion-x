import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect} from "react";
import { useAuth } from '../../context/AuthContext';
import { Header } from '../../components/Header/Header';
import AuthStyles from './Auth.module.css';

const Signup = () => {
    // const userInputRef=useRef();
    const {user,setUser}=useAuth();
    const authSubmit=(e)=>{
        e.preventDefault();
        const newUserFormData=new FormData(e.target);
        const newUser=Object.fromEntries(newUserFormData.entries());
        if(newUser.email&&newUser.password&&newUser.userName!==""){
            setUser(()=>newUser);
        }else{
            setUser(()=>"");
        }
        
    };
    useEffect(()=>{
        createNewUser(user);
    },[user])
    const createNewUser=async(userObj)=>{
        try{
            const response=await axios.post (`/api/auth/signup`,{
                userName:userObj.userName,
                email:userObj.email,
                password:userObj.password,
            });
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div>
        <Header/>
        <main className={`${AuthStyles["tab-fullWrapper"]} flex-hCenter `}>
            <div className={`${AuthStyles["tab-wrapper"]}`}>
            <p className={`${AuthStyles["tab-head"]}`}>Signup</p>
                    <form className={`flex-col`} onSubmit={authSubmit}>
                        <div className={`${AuthStyles["input-wrapper"]} flex-col`}>
                            <label htmlFor="username" className={`${AuthStyles["text-label"]}`}>
                                UserName<span className={`${AuthStyles["req-feild"]}`}>*</span>
                            </label>
                            <input name="userName" id="username" type="text" className={`${AuthStyles["text-input"]}`} />

                            <label htmlFor="email" className={`${AuthStyles["text-label"]}`}>
                                Email<span className={`${AuthStyles["req-feild"]}`}>*</span>
                            </label>
                            <input name="email" id="email" type="email" className={`${AuthStyles["text-input"]}`}/>

                            <label htmlFor="password" className={`${AuthStyles["text-label"]}`}>
                                Password<span className={`${AuthStyles["req-feild"]}`}>*</span>
                            </label>
                            <input name="password" id="password" type="password" className={`${AuthStyles["text-input"]}`}/>
                            <span className={`${AuthStyles["eye-icon1"]} material-icons material-icons-outlined`}>
                                    visibility
                                </span>

                            {/* <label htmlFor="password1" className="text-label sp4-mg-lr">
                                Confirm Password<span className="req-feild">*</span>
                            </label>
                            <input id="password1" type="email" className="text-input sp4-mg-lr"/> */}
                            {/* <span className="eye-icon2 material-icons material-icons-outlined">
                                    visibility
                                </span> */}
                        </div>
                        <button className={`${AuthStyles["btn-slide"]} ${AuthStyles["login-btn"]} button flex-center`}>Sign Up</button>
                        {/* <button>submit</button> */}
                    </form>
                <div className={`${AuthStyles["sign-link"]}`}><Link to="/Login">Already have an account</Link></div>
            </div>
        </main>
    </div>
  )
}

export {Signup};