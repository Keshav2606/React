import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile(){
    const {user} = useContext(UserContext)
    return (
        <>
        <h1>{user ? `Username: ${user.username} Password: ${user.password}`: "User doesn't exist"}</h1>
        </>
    )
}

export default Profile