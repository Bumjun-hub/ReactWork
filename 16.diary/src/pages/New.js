import Button from "../components/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";
import {DiaryDispathContext} from "../App";
import { useContext } from "react";
import Update from "./update";

const New = (() => {
    const navigate = useNavigate();
    const {onCreate} = useContext(DiaryDispathContext);
    const onSubmit = (input)=>{
        onCreate(
            input.createDate.getTime(),
            input.emotionId,
            input.content
        )
        navigate("/",{replace : true})
    }
    return (
        <div><Header
            title={"새 일기쓰기"}
            leftChild={<Button text="뒤로가기" onClick={() => navigate(-1)} />}

        />
            <Edit onSubmit={onSubmit}/>
            
        </div>
    )
})
export default New;