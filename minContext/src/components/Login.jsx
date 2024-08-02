import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState(null)

    const {setUser} = useContext(UserContext)
    return (
            <form onSubmit={(e) => {
                e.preventDefault()
                setUser({username, password})
            }}>
                <div id="name">
                    <label htmlFor="username">Username: </label>
                    <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"/>
                </div>
                <br />
                <div id="passwd">
                    <label htmlFor="password">Password: </label>
                    <input type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    name="password"/>
                </div>
                <button type="submit" style={{margin: "16px"}}>Submit</button>
            </form>
    )
}

export default Login;