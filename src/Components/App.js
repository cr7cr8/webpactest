import React,{useState} from "react"


export default function App(){

    const [count,setCount]= useState(0)

    return (
        <h1>webpack test {count} <button onClick={function(){

            setCount(pre=>pre+1)

        }}>add</button></h1>
    )

}