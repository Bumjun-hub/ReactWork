import { useEffect, useState } from 'react';
import { Button, Nav, Container, Row, Col, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { addItem } from '../store/store';
import { useDispatch } from 'react-redux';
import './Detail.css';
import axios from 'axios';

function Detail(props) {

    useEffect(() => {
        let p = localStorage.getItem('recentProduct')
        p = JSON.parse(p)
        if (!p.includes(findId.id)) {
            p.push(findId.id)
            localStorage.setItem('recentProduct', JSON.stringify(p))
        }
    }, [])
    let dispatch = useDispatch()
    const nav = useNavigate()

    let { pid } = useParams();
    let findId = props.clothes.find((v) => v.id == pid)

    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, [])

    let [detailFade, setDetailFade] = useState('start');

    useEffect(() => {
        setDetailFade('end')
    }, [])

    return (
        <div className={detailFade}>
            {
                alert ? <div>3초이내에 구매시 30%할인</div> : null
            }
            <Container className='InfoContainer'>
                <Row>
                    <Col sm={6} className='img-col'>

                        <img src={`${process.env.PUBLIC_URL}/images/img0${findId.id + 1}.jpg`} width="60%" />

                    </Col>
                    <Col sm={6} className='itemInfo'>
                        <form className='purchase-form'>
                            <h4>{findId.title}</h4>
                            <p>{findId.content}</p>
                            <p>{findId.price}원</p>
                            <Button variant="outline-info" className='buy-button' onClick={() => {
                                axios.post('http://localhost:8080/react/addCart',{
                                    title: findId.title,
                                    count:1
                                })
                                    .then(result => {
                                        console.log(result.data);
                                        nav('/cart')

                                    })
                                    .catch(error => {
                                        console.log("실패", error)

                                    })

                            }}

                            >주문하기</Button>
                        </form>
                    </Col>
                </Row>
            </Container>

            <Nav fill variant="tabs" defaultActiveKey="link-0" className='deNav'>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(0) }} eventKey="link-0">패션에 대하여</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(1) }} eventKey="link-1">옷의 정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(2) }} eventKey="link-2">기타</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} />
            <RecentViewed clothes={props.clothes} />
        </div>
    )
}

function RecentViewed({ clothes }) {
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        let viewed = JSON.parse(localStorage.getItem('recentProduct')) || []

        let products = viewed.map(id => clothes.find(c => c.id == id))

        setRecent(products);
    }, [clothes])

    return (
        <div>
            <h4>👀 최근 본 상품</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>제품설명</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recent.map((item) =>
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.price}원</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )

}


function TabContent({ tab }) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => { setFade('end') }, 100);
        return () => {
            setFade('start ');
        }
    }, [tab])

    return (
        <div className={fade}>
            {[<div>패션은 예술이다</div>, <div>퀄리티 좋은 재료</div>, <div>내용들</div>][tab]}
        </div>
    )
}

export default Detail;