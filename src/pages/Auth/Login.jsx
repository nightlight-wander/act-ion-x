import {useEffect} from 'react';
import { Link,useNavigate,useLocation } from "react-router-dom";
import { Header } from '../../components/Header/Header';
import { useAuth } from '../../context/AuthContext';
import "../../styles/spaces.css";
import "../../styles/common.css";
import AuthStyles from  "./Auth.module.css";
import { getTokenOnLogin } from '../../services/authServices';

const Login = () => {
    const {user,setUser,seteToken}=useAuth();
    const navigate=useNavigate(); //useNavigate hook that returns navigate function
    const location=useLocation();
    const authSubmit=(e)=>{
        e.preventDefault();
        const newUserFormData=new FormData(e.target);
        const newUser=Object.fromEntries(newUserFormData.entries());
        console.log(newUser);
        if(newUser.email&&newUser.password&&newUser.userName!==""){
            setUser(()=>newUser);
        }else{
            setUser(()=>"");
        }
        
    };

    useEffect(()=>{
        (getTokenOnLogin(navigate))(user,seteToken,location)
        // eslint-disable-next-line
    },[user])

    const guestLogin=()=>{
        setUser(()=>({email: 'flyflow@gmail.com', password: 'paperplanes12',userName:"Freeyay"}));
    }

    return (
        <div>
            <Header />
            <main className={`${AuthStyles["tab-fullWrapper"]} flex-hCenter `}>
                <div className={`${AuthStyles["tab-wrapper"]}`}>
                   <p className={`${AuthStyles["tab-head"]}`}>Login</p>
                        <form className={`flex-col`} onSubmit={(e)=>authSubmit(e)}>
                            <div className={`${AuthStyles["input-wrapper"]} flex-col`}>
                                <label htmlFor="email" className={`${AuthStyles["text-label"]}`}>
                                    Email<span className={`${AuthStyles["req-feild"]}`}>*</span>
                                </label>
                                <input name="email" id="email" type="email" className={`${AuthStyles["text-input"]}`} />

                                <label for="password" className={`${AuthStyles["text-label"]}`}>
                                    Password<span className={`${AuthStyles["req-feild"]}`}>*</span>
                                </label>
                                <input name="password" id="password"  type="password" className={`${AuthStyles["text-input"]}`} />
                                <span className={`${AuthStyles["eye-icon"]} material-icons material-icons-outlined`}>
                                    visibility
                                </span>
                            </div>
                            {/* <div className="password-wrapper d-flex ">
                                <div className="remeber-box">
                                    <input type="checkbox" name="remember-me" />
                                    Remember Me
                                </div>
                                <div className="forget-box">
                                    <Link to="#" className="link-btn">Forgot Password</Link>
                                </div>
                            </div> */}
                            
                            <button className={`${AuthStyles["btn-slide"]} ${AuthStyles["login-btn"]} button flex-center`}>Sign In</button>
                        </form>
                        <button className={`${AuthStyles["btn-slide"]} ${AuthStyles["test-btn"]} button`} onClick={guestLogin}>Guest Login</button>
                    <div className={`${AuthStyles["sign-link"]}`}><Link to="/Signup">Create New Account</Link></div>
                </div>
            </main>
            </div> 
    )
}

export { Login };