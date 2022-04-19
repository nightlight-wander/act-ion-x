import {useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import { Header } from '../../components/Header/Header';
import { useAuth } from '../../context/AuthContext';
import {authSubmit} from '../../utilities/authSubmit';
import "../../styles/spaces.css";
import "../../styles/common.css";
import "./Auth.css";

const Login = () => {
    const {user,setUser}=useAuth();
    // console.log(user)
    const navigate=useNavigate(); //useNavigate hook that returns navigate function
    
    const getUserData=async(userObj)=>{
        try{
            const response=await axios.post (`/api/auth/login`,{
                email:userObj.email,
                password:userObj.password,
            });
            console.log(response)
            if(response.status===200){
                localStorage.setItem("user",JSON.stringify(response.data.foundUser));
            }
            else{
                navigate("/");
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getUserData(user);
    },[user])
    const guestLogin=()=>{
        setUser(()=>({email: 'flyflow@gmail.com', password: 'paperplanes12'}));
    }
    return (
        <div>
            <Header />
            <main className="tab-fullWrapper flex-hCenter ">
                <div className="tab-wrapper">
                    <ul className="tab-list flex-center sp2-pd-t">
                        <li className="sp1-pd-b">Login</li>
                    </ul>
                    <div className="tabContent">
                        <form className="login form flex-col sp4-mg-t" onSubmit={authSubmit}>
                            <div className="input-wrapper flex-col ">
                                <label for="email" className="text-label sp4-mg-lr">
                                    Email<span className="req-feild">*</span>
                                </label>
                                <input name="email" value={user.email} id="email" type="email" className="text-input sp4-mg-lr" />

                                <label for="password" className="text-label sp4-mg-lr ">
                                    Password<span className="req-feild">*</span>
                                </label>
                                <input name="password" value={user.password} id="password" type="password" className="text-input sp4-mg-lr" />
                                <span className="eye-icon material-icons material-icons-outlined">
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
                            
                            <button className="btn-slide button sp-t">Sign In</button>
                        </form>
                        <button className="btn-slide button sp-t test-btn" onClick={guestLogin}>Guest Login</button>
                    </div>
                    <div className="sign-link"><Link to="/Signup">Create New Account</Link></div>
                </div>
            </main>
            </div> 
    )
}

export { Login };