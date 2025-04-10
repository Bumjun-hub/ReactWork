import './Editor.css';
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState(''); // input의 입력값 상태
    const contentRef = useRef(); // input DOM에 직접 접근하기 위한 ref

    return (
        <div className='Editor'>
            <input className='Editorinput' placeholder='할 일을 추가해보세요'
                ref={contentRef}
                value={content}
                onChange={(e) => {
                    setContent(e.target.value); // 사용자가 넣은 값으로 변경
                }} />&emsp;

            <button onClick={() => {
                if (content.trim == '') {
                    contentRef.current.focus();// 입력 안했을시 focus
                    return;
                }
                onCreate(content);
                setContent(''); // app.js에 있는 const oncreate에 값 전달
            }}>추가</button>

        </div >
    )
}
export default Editor;
