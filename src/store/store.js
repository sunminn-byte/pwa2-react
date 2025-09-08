import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slices/list.js';
// 관습적으로 slice명 + Reducer -> listReducer
import detailReducer from './slices/detail.js';

// Redux Store 생성 및 설정
export default configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer // slice명(키): 
  }
});