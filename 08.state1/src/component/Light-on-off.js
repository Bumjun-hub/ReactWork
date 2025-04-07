import { useState } from "react";

const LightOnOff = () => {
    const [light, setLight] = useState(false);

    return (
        <>

            {light ? <h1>전구ON</h1> : <h1>전구 OFF</h1>}

            <button onClick={() => { setLight(!light) }}>
                {light == true ? "불 끄기" : "불 켜기"}
            </button>
        </>

    )
}
export default LightOnOff;

