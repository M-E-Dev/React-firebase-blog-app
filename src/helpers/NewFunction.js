//bilgi ekleme, alma,silme,degistirme
// import firebase from "./firebase";

import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import {Toastify} from "./toastNotify";


// *bilgi ekleme
export const AddNewBlog = (info) => {
  const db = getDatabase();

  const userRef = ref(db, "NewBlog");
  const newUserRef = push(userRef);
  set(newUserRef, info);

  // !hata aliyorum
  // set((newUserRef), {
  //     title: info.title,
  //     imageUrl: info.imgeUrl,
  //     content: info.content,

  // });
};

// *bilgi cagirma-alma

export const useFetch = () => {
  const [isloading, setIsloading] = useState();
  const [blogCard, setBlogCard] = useState();

  useEffect(() => {
    setIsloading(true);
    const db = getDatabase();
    const userRef = ref(db, "NewBlog");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const NewBlogArr = [];
      for (let id in data) {
        NewBlogArr.push({ id, ...data[id] });
      }
      setBlogCard(NewBlogArr);
      setIsloading(false);
    });
  }, []);
  return { isloading, blogCard };
};




// *bilgi silme

export const DeleteCard = (id,navigate) => {
  const db = getDatabase();

  remove(ref(db, "NewBlog/" + id));
  navigate("/")
  Toastify("deletion succeeded");
  
};

// *blgi--duzeltme

export const UpdateCard = (info) => {
  const db = getDatabase();
  const updates = {};

  updates["NewBlog/" + info.id] = info;
  return update(ref(db),updates)
  
}


