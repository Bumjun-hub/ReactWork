import { getEmotionImg } from './../util/emotion-img';
import './ReadOnly.css';


const getStringDate = (date) => {

    let year = date.getFullYear();
    let month = String(date.getMonth() + 1)
    let day = String(date.getDate())

    if (month < 10) {
        month = `0${month}`;
    } if (date < 10) {
        date = `0${day}`;
    }
    return `${year}-${month}-${day}`;
}

const ReadOnly = ({ data }) => {
    if (!data) return <div>데이터가 없습니다</div>


    return (
        <div className="Edit">
            <section>
                <h4>날짜</h4>
                <input className='inputdate' type="date" value={getStringDate(new Date(data.createDate))}
                readOnly/>
            </section>
            <section>
                <h4>감정</h4>
                <img src={getEmotionImg(data.emotionId)} />
            </section>
            <section>
                <h4>내용</h4>
                <textarea rows="10" cols="60" value={data.content}
                readOnly/>
            </section>
        </div>
    )
}
export default ReadOnly;