import { useState } from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css';
import { useNavigate } from "react-router-dom";

const DiaryList = ({ data }) => {

    const navigate = useNavigate()
    const [sortType, setSortType] = useState('latest')
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    // Sort : 원본파일 바뀌어서 들어옴
    // toSorted(a,b) : 원본은 그대로 유지하고 sort된 data만 반환(ES2023 새로생김)

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === "oldest") {
                return a.createDate - b.createDate;
            } else {
                return b.createDate - a.createDate;
            }
        })
    }

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
            </div>
            <Button text={"새 일기 쓰기"} onClick={()=> {navigate("/new")}} />
            <div className="list_wrapper">
                {getSortedData().map((item) => (
                    <DiaryItem{...item} key={item.id} />))}
            </div>

            
        </div>
    )
}
export default DiaryList;