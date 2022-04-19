export const authSubmit=(e)=>{
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