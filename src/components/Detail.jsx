import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './Detail.css';
import { addCnt, changeCnt, minusCnt } from '../store/slices/detail.js';

function Detail() {
  const dispatch  = useDispatch(); // 최상단에 미리 선언해두고 쓴다.

  const cnt = useSelector(state => state.detail.cnt);

  const [inputNum, setInputNum] = useState(0);

  const convertAndSetNumber = (e) => {
    if(!isNaN(e.target.value)) {
      setInputNum(parseInt(e.target.value));
      // parseInt : 내가 받은 값을 number형으로 바꿔줌(Number객체보다 parseInt 사용하기)
    } else {
      console.error('숫자 아니다.');
    }
  }

  return (
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      <input type="number" onChange={convertAndSetNumber}/>
      <button type="button" onClick={() => { dispatch(changeCnt(inputNum)) }}>입력</button>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default Detail;