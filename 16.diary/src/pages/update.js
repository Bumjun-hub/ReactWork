import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { DiaryDispathContext, DiaryStateContext } from "../App";
import { useContext, useEffect, useState } from "react";
import Edit from "./Edit";

const Update = (() => {

    const params = useParams();
    const navigate = useNavigate();
    const { onDelete,onUpdate} = useContext(DiaryDispathContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    const onClickDelete = () => {
        if (window.confirm("일기를 삭제하시겠습니까?")) {
            onDelete(params.id);
            navigate("/", { replace: true })
        }
    }

    useEffect(() => {
        const CurrentDiaryItem = data.find((item) => item.id == params.id)
        if (!CurrentDiaryItem) {
            window.alert("존재하지 않는 일기 입니다")
            navigate("/", { replace: true })
        }
        setCurDiaryItem(CurrentDiaryItem);
    }, [params.id, data])
    return (
        <div>
            <Header
                title={"일기 수정"}
                leftChild={<Button text="뒤로가기" onClick={() => navigate(-1)} />}
                rightChild={<Button text="삭제하기" type="red"
                    onClick={onClickDelete} />}
            
            />
            
            <Edit onSubmit={(input)=>{
                onUpdate(
                    params.id,
                    input.createDate.getTime(),
                    input.emotionId,
                    input.content
                )
                navigate("/",{replace:true});
            }}
            initData={curDiaryItem}
            />
            
        </div>
    )
})
export default Update;