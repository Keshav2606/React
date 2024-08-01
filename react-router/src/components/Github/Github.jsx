import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch(`https://api.github.com/user/keshav2606`)
    //     .then((response) => response.json())
    //     .then((response) => setData(response))
    // })

    const data = useLoaderData()
    return(
        <>
        <div id="github-container flex flex-wrap flex-col gap-3">
            <div>
                <img src={data.avatar_url} alt="user-image" />
            </div>
            <div id="details">
                <h1 className= "text-blue text-3xl text-center">
                    Name: {data.name}
                </h1>
                <h1 className= "text-black text-2xl text-center">
                    Followers: {data.followers}
                </h1>
            </div>
        </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/user/keshav2606`)

    return response.json()
}