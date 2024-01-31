import React, { useEffect, useState } from 'react';
import userContext from './userContext';

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name:'sofen'
    })
    useEffect(()=>{
        setUser({
            name:'rabby'
        })
    },[]);
  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider