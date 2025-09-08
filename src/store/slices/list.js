import { createSlice } from "@reduxjs/toolkit";

// `list` 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list', // slice 명 = 파일명 = 변수명
  initialState: { // 상태 관리할 state를 정의하는 영역
    cnt: 0, // state명: 초기값,
  },
  reducers: { // state의 상태를 변화시키는 actions를 정의하는 영역
    addCnt(state) { // (state)에는 initialState영역이 담긴다.
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      // state 파라미터 : `initialState`의 정보를 담고 있는 파라미터
      // action 파라미터 : 외부에서 전달된 값을 담는 파라미터
      //    > action.payload : 전달된 값에 접근할 수 있는 프로퍼티
        // const action = {
        //   payload: 0, // payload에 값이 들어오면 type이 알아서 변경됨.
        //   type: 'number'
        // }
      state.cnt = action.payload;
    }
  }
});

// 정의한 Actions 내보내기
// component에서 호출
export const {
  addCnt,
  changeCnt,
  minusCnt
} = list.actions;

// Reducer 내보내기
// store에서 호출
export default list.reducer;