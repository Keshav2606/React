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
        <div id="github-container" className="flex flex-wrap justify-center flex-col gap-2">
            <div className="h-80 mt-4 mx-auto">
                <img 
                className="h-full"
                src="https://avatars.githubusercontent.com/u/115573210?v=4" 
                alt="user-image" />
            </div>
            <div id="details">
                <h1 className= "text-blue text-3xl text-center">
                    Keshav Kumar Mishra
                </h1>
                <h1 className= "text-black text-2xl text-center">
                    Github Followers: {data.followers}
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