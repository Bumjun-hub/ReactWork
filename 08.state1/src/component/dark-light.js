import { useState } from "react";
import './darklight.css';

const DarkLight = () => {
    const [darkLight, setDarkLight] = useState(false);


    return (

        <div className={darkLight ? "dark" : "light"}>

            <button onClick={() => { setDarkLight(!darkLight) }}>
                {darkLight == true ? "라이트모드" : "다크모드"}

            </button>

        </div>
    )
}
export default DarkLight;