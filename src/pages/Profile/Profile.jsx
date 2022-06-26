import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Tabs } from "../../components/Tabs/Tabs";
import { useAuth } from "../../context/AuthContext";
import TabStyles from '../../components/Tabs/Tabs.module.css';


const Profile = () => {
    const {user,seteToken,setUser}=useAuth();
    const navigate=useNavigate();
   
    const logOutHandler = () => {
        localStorage.removeItem("eToken");
        localStorage.removeItem("user");
        seteToken(()=>"");
        setUser(()=>null);
        navigate("/");
    }
    return (
        <div>
            <Header />
            <Tabs>
                <div label="Profile">
                    <p>UserEmail: {user.email}</p>
                    {/* <p>UserName: {user?.userName}</p> */}
                </div>
                <div label="LogOut"><button className={`${TabStyles.tabBtn}`} onClick={() => logOutHandler()}>Log Out</button></div>
            </Tabs>
            
        </div>
    )
}

export { Profile };