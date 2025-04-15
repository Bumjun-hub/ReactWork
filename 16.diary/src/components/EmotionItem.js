import { getEmotionImg } from "../util/emotion-img";
import './EmotionItem.css';
const EmotionItem = ({ emotionId, emotionName, isSelected,onClick }) => {
    return (
        <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
        onClick={onClick}
        >
            <div className="emotionImg">
            <img src={getEmotionImg(emotionId)} />
            <div className="emotionName">{emotionName}</div>
            </div>
        </div>
    )
}
export default EmotionItem;