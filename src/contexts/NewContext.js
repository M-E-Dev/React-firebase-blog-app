import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const NewContext = createContext();

const initialValues = {
  title: " ",
  imageUrl: " ",
  content: " ",
  date: "",
  email:" "
};
const NewContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  const date = new Date().toLocaleDateString();
  // console.log(currentUser)
  const [info, setInfo] = useState(initialValues);

  

  
      
          
      
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value, date ,email:currentUser.email});

    // console.log(name, value);
    // console.log(info)
  };

 

  return (
    <NewContext.Provider
      value={{ info, date, setInfo,handleChange }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default NewContextProvider;
