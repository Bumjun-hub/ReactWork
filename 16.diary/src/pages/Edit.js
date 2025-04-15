import { useEffect, useState } from "react";
import Button from "../components/Button";
import EmotionItem from "../components/EmotionItem";
import { getEmotionImg } from "../util/emotion-img";
import './Edit.css';
import { useNavigate } from "react-router-dom";


const emotionList = [
    {
        emotionId: 1,
        emotionName: '좋음'
    },
    {
        emotionId: 2,
        emotionName: '행복'
    },
    {
        emotionId: 3,
        emotionName: '우울'
    },
    {
        emotionId: 4,
        emotionName: '힘듦'
    },
    {
        emotionId: 5,
        emotionName: '슬픔'
    },
    {
        emotionId: 6,
        emotionName: '멘붕'
    },
    {
        emotionId: 7,
        emotionName: '졸림'
    }

]

const Edit = (({ onSubmit, initData }) => {
    const navigate = useNavigate();


    useEffect(() => {
        if (initData) {
            setinput({
                ...initData,
                createDate: new Date(initData.createDate)
            })
        }
    },[initData])

    const [input, setinput] = useState({
        createDate: new Date(),
        emotionId: 1,
        content: ""
    })


    const getStringDate = (targetDate) => {
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() + 1;
        let date = targetDate.getDate();

        if (month < 10) {
            month = `0${month}`;
        }
        if (date < 10) {
            date = `0${date}`;
        }

        return `${year}-${month}-${date}`;
    }

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name == "createDate") {
            value = new Date(value); // String을 Data로 바꿔줌
        }
        setinput({
            ...input, [name]: value
        })
    }

    return (
        <div className="Edit">
            <section>
                <h4>오늘 날짜</h4>
                <input type="date" value={getStringDate(input.createDate)}
                    onChange={onChangeInput} />
            </section>

            <section>
                <h4>오늘의 감정</h4>
                <div className="emotionList">{
                    emotionList.map((item) => (
                        <EmotionItem onClick={() =>
                            onChangeInput({
                                target: {
                                    name: "emotionId",
                                    value: item.emotionId
                                }
                            })
                        } {...item}
                            isSelected={item.emotionId == input.emotionId} />

                    ))
                }
                </div>
            </section>

            <section>
                <h3>오늘의 일기</h3>
                <textarea rows="10" cols="60" name="content"
                    value={input.content}
                    onChange={onChangeInput} />
            </section>

            <section className="btnsection">
                <Button text="취소하기" type={"grey"} onClick={() => { navigate("/") }} />&emsp;
                <Button text="등록하기" type={"green"} onClick={() => { onSubmit(input) }} />
            </section>
        </div>
    )
})
export default Edit;