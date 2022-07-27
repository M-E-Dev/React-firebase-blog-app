import { createContext, useContext, useEffect, useState } from "react";
import { UpdateCard } from "../helpers/NewFunction";
import { userObserver } from "../helpers/userFunction";

export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    const handleFavIcon = (e, data) => {
        e.stopPropagation();
        console.log(data)
        if (!currentUser) {
        //   toastWarnNotify("please login to like")
        } else {
            if (data.likedUserIds) {
              if (data.likedUserIds.includes(currentUser.uid)) {
                UpdateCard({ ...data, likedUserIds: data.likedUserIds.filter((item) => !(item === currentUser.uid)) })
                data.likedUserIds.filter((item) => !(item === currentUser.uid))
              } else {
                data.likedUserIds.push(currentUser.uid)
                UpdateCard({ ...data, likedUserIds: data.likedUserIds })
              }
            } else {
                UpdateCard({ ...data, likedUserIds: currentUser.uid.split(" ") })
            }
        }
      }

    useEffect(() => {
        userObserver(setCurrentUser)
    }, []);
    
    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser,handleFavIcon}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = ()=>{
    return useContext(AuthContext)
  }

export default AuthContextProvider;
