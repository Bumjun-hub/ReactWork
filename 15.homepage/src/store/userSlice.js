import {createSlice } from '@reduxjs/toolkit';

// user상태 정의 (이름, 나이 포함)
// store.js 에 위치한 

let user = createSlice({
    name : 'user',
    initialState : {name:'kim', age: 23,}, // 초기값 설정
    reducers : {
        changeName(state) {
            state.name = 'park' 
        },
        ageUpdate(state,num) {
            state.age += num.payload   // payload: num을 배달시킨다는 의미
            // Cart.js 에서 dispatch(ageUpdate()) 부분에 ageUpdate에 숫자를 넣으면 그 값만큼 올라감
        },
        changeCount(state){
            state.count += 1 // 수량 +
        }

    }
})
export let {changeCount, ageUpdate} = user.actions
export default user;
// 액션 내보내기 (Cart.js에서 사용하기 위해)