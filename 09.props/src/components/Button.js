import './Button.css'
import './Compo';
//1. 문자 혹은 변수로 값 받기

/*
const Button = () =>{
   
    return(
        <>
        <button style={{color:'black'}} className='btn'>1번버튼</button>
        </>

    );
}
    */



// 2. 객체로 넘겨준 값 받기

/*
const Button = (props) => {
    return (
        <>
        <button className ="btn" style={{color:props.btnValue.color}}>{props.btnValue.text}</button>
        <p>색깔 :{props.btnValue.color}</p>
        </>

    )
}
*/ 


    // 3. 객체를 스프레드 연산자로 풀어서 넘겨준 값 받기
    
    const Button =({text,color})=>{
        return(
            <>
            <button className='btn' style={{color:color}}>{text}</button>
            </>
        )
    }
        

export default Button;