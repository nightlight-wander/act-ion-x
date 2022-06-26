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

    const onChange=(e)=>{
        e.preventDefault();
        setUser(()=>({
            ...user,
            [e.target.name]:e.target.value,
        }));
    }
    const authSubmit=(e)=>{
        e.preventDefault();
        // console.log(user)
        // if(user.email!==""&&user.password!==""){
            (getTokenOnLogin(navigate))(user,seteToken,location)
        // }
        
        
    };

    // useEffect(()=>{
    //     (getTokenOnLogin(navigate))(user,seteToken,location)
    //     // eslint-disable-next-line
    // },[user])

    const guestLogin=()=>{
        setUser(()=>({email: 'flyflow@gmail.com', password: 'paperplanes12',name:"Freeyay"}));
        (getTokenOnLogin(navigate))(user,seteToken,location)
    }

    return (
        <div>
            <Header />
            <main className={`${AuthStyles["authForm-fullWrapper"]} flex-hCenter `}>
        <div className={`${AuthStyles["authForm-wrapper"]}`}>
          <p className={`${AuthStyles["auth-heading"]}`}>Login</p>
          <form className={`flex-col`} onSubmit={(e) => authSubmit(e)}>
            <div className={`${AuthStyles["input-wrapper"]} flex-col`}>
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

              <label for="password" className={`${AuthStyles["text-label"]}`}>
                Password<span className={`${AuthStyles["req-feild"]}`}>*</span>
              </label>
              <input
                name="password"
                id="password"
                type="password"
                className={`${AuthStyles["text-input"]}`}
                onChange={onChange}
              />
            </div>
            <button
              className={`${AuthStyles["btn-primary"]} ${AuthStyles["login-btn"]} button flex-center`}
            >
              Sign In
            </button>
          </form>
          <button className={`${AuthStyles["btn-primary"]} ${AuthStyles["test-btn"]} button`} onClick={guestLogin}>Guest Login</button>
          <div className={`${AuthStyles["sign-link"]}`}>
            <Link to="/Signup">Create New Account</Link>
          </div>
        </div>
      </main>
    
            </div>  
    )
}

export { Login };