import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, ageUpdate } from '../store/userSlice';
import './Cart.css';
import { changeCount } from '../store/store';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Cart() {

    let user = useSelector((state) => state.user)
    console.log(user);

    // stock 상태 가져와서 stock 변수에 저장 
    let stock = useSelector((state) => state.stock)
    console.log(stock)
``
    // cart 상태 가져와서 cart 변수에 저장
    let cart = useSelector((state) => state.cart)

    let dispatch = useDispatch()

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/react/getCart')
            .then(result => {
                setList(result.data);
            })
            .catch(() => {
                console.log("실패")
            })

    }, [cart])

    return (
        <div>
            <h2>CART LIST</h2>
            <Table className="table" striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {/*                     
                    <tr>
                        <td>{cart[0].id}</td>
                        <td>{cart[0].name}</td>
                        <td>{cart[0].count}</td>
                        <td>변경</td>
                    </tr>
                    <tr>
                        <td>{cart[1].id}</td>
                        <td>{cart[1].name}</td>
                        <td>{cart[1].count}</td>
                        <td>변경</td>
                    </tr>
                     */}
                    {
                        list.map(v =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;
