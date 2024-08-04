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
    console.log("data:", data);
    return(
        <>
        <div id="github-container" className="flex flex-wrap text-center justify-center flex-col gap-2">
            <div className="h-80 mt-4 mx-auto">
                <img 
                className="h-full"
                src={data.avatar_url}
                alt="user-image" />
            </div>
            <div id="details">
                <h1 className= "text-blue text-3xl text-center">
                   <a href={data.html_url} target="_blank" className="cursor-pointer">{data.name}</a>
                </h1>
                <h1 className= "text-black text-2xl text-center">
                    Github Followers: {data.followers}
                    <a href={data.followers_url} className="text-blue-800 underline"> (See)</a>
                </h1>
                <a href={data.repos_url} target="_blank"
                className="hover:text-blue-800 underline">Github Repositories</a>
            </div>
        </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/keshav2606")
    return response.json()
}