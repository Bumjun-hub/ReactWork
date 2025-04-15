import { useNavigate } from "react-router-dom";
import { getEmotionImg } from "../util/emotion-img";
import Button from "./Button";
import './DiaryItem.css';



const DiaryItem = (({id,emotionId,createDate,content}) => {
    const navigate = useNavigate();
    return (
        <div className="DiaryItem">
            <div className="img_section">
                <div><img src={getEmotionImg(emotionId)} onClick={()=>(navigate(`/detail/${id}`))} /></div>
            </div>
            <div className="info_section">
                <div>{new Date(createDate).toLocaleDateString()}</div>
                <div>{content}</div>
            </div>

            <div className="button_section">
                <Button text={"수정하기"} type={"grey"} onClick={()=>{navigate(`/update/${id}`)}} />
            </div>
        </div>
    )
})
export default DiaryItem;