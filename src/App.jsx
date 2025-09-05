import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  // 컴포넌트 '내부에서' 자바스크립트 방식으로 페이지 이동을 구현할 때
  // useNavigate함수를 이용한다.
  const navigate = useNavigate();

  const ok = () => {
    navigate('/ok');
  }

  return(
    <>
      <header>
        <h1>앱</h1>
        <div className="nav">
          <Link to={'/list'} className='test'>리스트 페이지</Link>
          <Link to={'/detail'}>상세 페이지</Link>
          <br />
          {/* Link와 다르게 NavLink는 현재 활성화된 링크에
           .active 클래스로 스타일을 주기 편하다 */}
          <NavLink to={'/list'}>리스트 페이지</NavLink>
          <NavLink to={'/detail'}>상세 페이지</NavLink>
          <br />
          <button type="button" onClick={ok}>확인</button>
        </div>
      </header>

      <main>
        {/* Outlet : 라우터의 자식 컴포넌트를 출력 */}
        <Outlet></Outlet>
      </main>

      <footer>
        <p>카피라이트</p>
      </footer>
    </>
  )
}

export default App;