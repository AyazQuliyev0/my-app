import React, {useState} from 'react'

const Person = () => {
    const [user, setUser] = useState({
        userName: "",
        userSurname: "",
        userAge: ""
    })
    const [allUser, setAllUser] = useState([])
    const takeUserData = (e) =>{
        // console.log(e.target.value);
        setUser({...user, [e.target.name] : e.target.value})
        
    }

    const showUserData = () =>{
        // console.log(user);
        setAllUser([...allUser, user]);
        setUser({
            userName: "",
            userSurname: "",
            userAge: ""
        })
        
    }
    console.log(allUser);

  return (
    <div>
        <input value={user.userName} onChange={takeUserData} type="text" placeholder='adiniz' name='userName'/>
        <input value={user.userSurname} onChange={takeUserData} type="text" placeholder='soyadiniz' name='userSurname'/>
        <input value={user.userAge} onChange={takeUserData} type="text" placeholder='yasiniz' name='userAge'/>
        <button onClick={showUserData}>Show user data</button>
    </div>
  )
}

export default Person