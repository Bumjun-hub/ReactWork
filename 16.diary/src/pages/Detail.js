import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Edit from "./Edit";
import ReadOnly from "./ReadOnly";
import { useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import DiaryList from './../components/DiaryList';


const Detail = (() => {
    const navigate = useNavigate();
    const { id } = useParams();
    const diaryList = useContext(DiaryStateContext);

    const curDiaryItem = diaryList.find(
        (item) => String(item.id) === String(id)
    );

    useEffect(() => {
        if (!curDiaryItem) {
            alert("존재하지 않는 일기입니다.");
            navigate("/", { replace: true });
        }
    }, [curDiaryItem]);

    return (
        <div><Header
            title={'상세보기'}
            leftChild={<Button onClick={() => { navigate("/") }} text="뒤로가기" />}
        />
            <ReadOnly data={curDiaryItem} />
        </div>


    )
})
export default Detail;