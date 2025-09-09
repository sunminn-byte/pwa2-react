import { useDispatch, useSelector } from 'react-redux';
import './List.css';
import { addCnt, clearList, minusCnt } from '../store/slices/list';
import { useEffect } from 'react';
import { getList } from '../store/thunks/listThunk';

function List() {
  // State에 접근하는 방법
  // 'store 의 state' 안의 list 안의 cnt
  const cnt = useSelector(state => state.list.cnt);

  // action 호출 방법
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(getList());

    return () => {
      dispatch(clearList());
    }
  }, []); // 빈 배열을 넣으면 mount단계에서만 호출

  const list = useSelector(state => state.list.list);
  const loading = useSelector(state => state.list.loading);

  return (
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
      { loading && <h2>로딩중</h2> }
      <div className="card-container">
        {
          list && list.map(item => {
            return (
              <img src={item.download_url} width='100px' key={item.id} />
            )
          })
        }
      </div>
    </>
  )
}

export default List;