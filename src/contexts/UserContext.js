import { createContext, useState } from "react";

export const UserContext = createContext();

const initialValues = {
    username: "",
    email:""
}
const UserContextProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState(initialValues);

    const handleChance = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value})
        console.log(name,value)
   }
    

    return (
        <UserContext.Provider value={{userInfo,setUserInfo,handleChance}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;