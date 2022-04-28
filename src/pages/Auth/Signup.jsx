import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect} from "react";
import { useAuth } from '../../context/AuthContext';
import { Header } from '../../components/Header/Header';

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
    <div className="loginGrids-wrapper rows3-grid">
        <Header/>
        <main className="tab-fullWrapper flex-hCenter ">
            <div className="tab-wrapper">
                <ul className="tab-list flex-center sp2-pd-t">
                    <li className="sp1-pd-b">Sign Up</li>
                </ul>
                <div className="tabContent">
                    <form className="login form flex-col sp4-mg-t" onSubmit={authSubmit}>
                        <div className="input-wrapper flex-col ">
                            <label htmlFor="username" className="text-label sp4-mg-lr">
                                UserName<span className="req-feild">*</span>
                            </label>
                            <input name="userName" id="username" type="text" className="text-input sp4-mg-lr" />

                            <label htmlFor="email" className="text-label sp4-mg-lr">
                                Email<span className="req-feild">*</span>
                            </label>
                            <input name="email" id="email" type="email" className="text-input sp4-mg-lr"/>

                            <label htmlFor="password" className="text-label sp4-mg-lr">
                                Password<span className="req-feild">*</span>
                            </label>
                            <input name="password" id="password" type="password" className="text-input sp4-mg-lr"/>
                            <span className="eye-icon1 material-icons material-icons-outlined">
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
                        <button className="btn-slide button sp-t">Sign Up</button>
                        {/* <button>submit</button> */}
                    </form>
                </div>
                <div className="sign-link"><Link to="/Login">Already have an account</Link></div>
            </div>
        </main>
    </div>
  )
}

export {Signup};