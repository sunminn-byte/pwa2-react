import { createSlice } from "@reduxjs/toolkit";
import { getList, getTest } from "../thunks/listThunk";

// `list` 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list', // slice 명 = 파일명 = 변수명
  initialState: { // 상태 관리할 state를 정의하는 영역
    cnt: 0, // state명: 초기값,
    list: null,
    loading: false,
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
    },
    clearList(state) {
      state.list = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getList.pending, (state) => {
      // // state : `initialState`의 정보를 담고 있는 파라미터
      // // `getList` Thunk의 처리가 대기중일때의 처리를 작성
      //   state.loading = true;
      // })
      .addCase(getList.fulfilled, (state, action) => {
        // `getList` Thunk의 처리가 성공 일때의 처리를 작성
        state.list = action.payload;
        state.loading = false;
      })
      // .addCase(getList.rejected, (state) => {
        //   // `getList` Thunk의 처리가 실패 일때의 처리를 작성
        //   state.loading = false;
        // })
        // .addCase(getTest.pending, (state) => {
        // // state : `initialState`의 정보를 담고 있는 파라미터
        // // `getList` Thunk의 처리가 대기중일때의 처리를 작성
        //   state.loading = true;
        // })
      .addCase(getTest.fulfilled, (state, action) => {
        // `getList` Thunk의 처리가 성공 일때의 처리를 작성
        state.test = action.payload;
        state.loading = false;
      })
      // .addCase(getTest.rejected, (state) => {
      //   // `getList` Thunk의 처리가 실패 일때의 처리를 작성
      //   state.loading = false;
      // })
      .addMatcher( // 조건식 (addCase가 겹칠 때 addMatcher로 묶어서 사용)
        action => action.type.endsWith('/pending'), // 여기가 true일 때, 아래 실행
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state) => {
          state.loading = false;
        }
      )
      ;
  }
});

// 정의한 Actions 내보내기
// component에서 호출
export const {
  addCnt,
  changeCnt,
  minusCnt,
  clearList
} = list.actions;

// Reducer 내보내기
// store에서 호출
export default list.reducer;