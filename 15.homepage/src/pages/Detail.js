import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './Detail.css';
import plist from './../data/productList';
import { useEffect, useState } from "react";

function Detail(props) {
    const { pid } = useParams();   // URL에서 id를 꺼냄
    const item = props.clothes[pid]; // 배열에서 해당 상품의 정보를 찾음

    let findId = props.clothes.find((v) => {
        return v.id == pid;
    })

    let [alert, setAlert] = useState(true);
    useEffect(() => {
        setTimeout(() => { setAlert(false) }, 5000)
    })


    return (
        <>

            <div className='detail'>
                {
                    alert ? <div>5초 이내에 구매시 30%할인</div> : null
                }
            </div>
            <Container className="InfoContainer">
                <Row>
                    <Col sm={6} className="img-col">
                        <img src={`${process.env.PUBLIC_URL}/images/img0${item.id + 1}.jpg`}></img>
                    </Col>
                    <Col sm={6} className="itemInfo">
                        <form className="purchase-form">
                            <h2>👕 {item.title}</h2>
                            <p>📝 {item.content}</p>
                            <p>💰 {item.price}원</p>

                            <button type="button" className="buy-button">구매하기</button>
                        </form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Detail;