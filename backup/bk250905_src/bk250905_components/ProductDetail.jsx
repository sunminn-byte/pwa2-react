// import { useEffect } from 'react';
// import { useState } from 'react';
import './ProductDetail.css';

// 부모쪽(ProductList)에서 보낸 정보를 props라는 파라미터로 받아서 사용
function ProductDetail(props) {
  // props destructuring
  const { product, setModalFlg } = props;
  // const [cnt, setCnt] = useState(0);

  // Lifecycle Hooks
  // mount에서 최초 1회만 실행
  // 서버랑 통신해서 데이터 받아오는 처리를 주로 함
  // useEffect(() => {
  //   console.log('Mount!!');
  // }, []);

  // unmount 전에 실행 : Clean up Fuction 작성
  // 내가 가진 데이터를 초기화하는 처리를 주로 함
  // useEffect(() => {
  //   console.log('Mount!!');

  //   // 여기에서 return함수를 Clean up Fuction 이라고 부른다.
  //   return () => {
  //     console.log('Unmount');
  //   }
  // }, []);

  // update(잘 안씀)
  // mount후 최초 1회 실행, []의 state가 변할 때마다 실행
  // useEffect(() => {
  //   console.log('test');
  // }, [cnt]);

  return(
    <>
      <div className="detail-modal" onClick={() => { setModalFlg(false) }}>
      {/* <div className="detail-modal"> */}
        <div className="detail-box">
          <div className="detail-img" style={{backgroundImage: `url('${product.img}')`}}></div>
          <p className="detail-title">{product.title}</p>
          <p className="detail-info">{product.info}</p>
          <p className="detail-price">{product.price}</p>
          {/* <p>{cnt}</p>
          <button type="button" onClick={() => { setCnt((prev) => prev + 1) }}>+</button> */}
        </div>
      </div>
    </>
  )
}

export default ProductDetail;