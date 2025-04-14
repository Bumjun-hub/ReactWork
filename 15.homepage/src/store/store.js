
import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './userSlice';

/*
// 1. createSlice를 만든다
let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state) {
            return 'jiwon ' + state
        }
    }
})
export let {changeName} = user.actions
*/

/*
// 객체일 때(array일 때)
let user = createSlice({
    name : 'user',
    initialState : {name:'kim', age: 23},
    reducers : {
        changeName(state) {
            return {name:'park', age: 25}
        }
    }
})
export let {changeName} = user.actions
*/

// 직접 변경 가능




let stock = createSlice({
    name: 'stock',
    initialState: [7, 15, 8] // ex ) 상품별 재고 수량
})

let cart = createSlice({
    name: 'cart',
    initialState: [],  // reducers가 없으면 읽기전용 상태로 사용됨
    reducers: {
        changeCount(state, action) {
            let i = state.findIndex(a => a.id == action.payload)
            state[i].count++
        },
        addItem(state, action) {
            let p = state.find(item => item.id == action.payload.id)
            if (p) {
                p.count++;
            } else {
                state.push(action.payload)
            }
        }
    }
})
export let { changeCount, addItem } = cart.actions;

export default configureStore({
    reducer: {
        // 2. 1번에 만든 createSlice를 등록
        //     내맘대로 : user.reducer
        user: user.reducer, // state.user로 접근이 가능
        stock: stock.reducer,
        cart: cart.reducer
    }
})
