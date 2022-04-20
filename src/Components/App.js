import React, { useState } from "react"
import "../style.scss"
import style1 from "../style.module.css"
import style2 from "../style2.module.css"

export default function App() {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>webpack test {count} <button onClick={function () {
                console.log(count + 1)
                setCount(pre => pre + 1)

            }}>add</button></h1>
            <div >eee</div>
            <div className={style1.aaa}>aaddss</div>

            {/* <img src="https://wx1.sinaimg.cn/mw1024/67307cc8gy1h1cnmwlmbrj22113401ky.jpg" referrerPolicy="no-referrer"/> */}
        </>

    )

}