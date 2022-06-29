import { Link,useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { Header } from '../../components/Header/Header';
import AuthStyles from './Auth.module.css';
import { createNewUser } from "../../services/authServices";

const Signup = () => {
    const navigate=useNavigate();
    const {user,setUser,seteToken}=useAuth();
    const {name,email,password,password2}=user??{};
    const authSubmit=(e)=>{
       e.preventDefault();
        if(email!==undefined&&password!==undefined&&name!==undefined && password===password2){
            // setUser(()=>({name,email,password}));
            (createNewUser(seteToken,navigate))(user);
        }   
    };
    const onChange=(e)=>{
        e.preventDefault();
        setUser(()=>({
            ...user,
            [e.target.name]:e.target.value,
        }));
    }
    // useEffect(()=>{
    //     (createNewUser(seteToken,navigate))(user);
    //     // eslint-disable-next-line
    // },[user])
    
  return (
    <div>
        <Header/>
        <main className={`${AuthStyles["authForm-fullWrapper"]} flex-hCenter `}>
        <div className={`${AuthStyles["authForm-wrapper"]}`}>
          <p className={`${AuthStyles["auth-heading"]}`}>Signup</p>
          <form className={`flex-col`} onSubmit={authSubmit}>
            <div className={`${AuthStyles["input-wrapper"]} flex-col`}>
              <label
                htmlFor="name"
                className={`${AuthStyles["text-label"]}`} 
              >
                UserName<span className={`${AuthStyles["req-feild"]}`}>*</span>
              </label>
              <input
                name="name"
                id="name"
                type="name"
                className={`${AuthStyles["text-input"]}`}
                onChange={onChange}
              />

              <label htmlFor="email" className={`${AuthStyles["text-label"]}`}>
                Email<span className={`${AuthStyles["req-feild"]}`}>*</span>
              </label>
              <input
                name="email"
                id="email"
                type="email"
                className={`${AuthStyles["text-input"]}`}
                onChange={onChange}
              />

              <label
                htmlFor="password"
                className={`${AuthStyles["text-label"]}`}
              >
                Password<span className={`${AuthStyles["req-feild"]}`}>*</span>
              </label>
              <input
                name="password"
                id="password"
                type="password"
                className={`${AuthStyles["text-input"]}`}
                onChange={onChange}
              />

              <label
                htmlFor="password2"
                className={`${AuthStyles["text-label"]}`}
              >
                Confirm Password
                <span className={`${AuthStyles["req-feild"]}`}>*</span>
              </label>
              <input
                name="password2"
                id="password2"
                type="password"
                className={`${AuthStyles["text-input"]}`}
                onChange={onChange}
              />
            </div>
            <button
              className={`${AuthStyles["btn-primary"]} ${AuthStyles["login-btn"]} button flex-center`}
            >
              Sign Up
            </button>
          </form>
          <div className={`${AuthStyles["sign-link"]}`}>
            <Link to="/Login">Already have an account</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export {Signup};