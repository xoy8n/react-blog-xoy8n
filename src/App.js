import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //자료를 잠깐 보관하고 싶을 때는 변수에다 저장하면 된다.
  // 리액트에서는 자료를 잠깐 저장할 때 state를 써도 된다. 

  let post = ['상수삼겹살맛집', '홍대삼겹살맛집', '합정삼겹살맛집'];
  useState();

  return (
    <div className="App">
      <div className="navbar">
        <h4>xoy8n이의 블로그😎</h4>
      </div>
      <div className='listCon'>
        <ul>
          <li>
            <h3>{post[0]}</h3>
            <p>6월 1일 발행</p>
          </li>
          <li>
            <h3>{post[1]}</h3>
            <p>6월 1일 발행</p>
          </li>
          <li>
            <h3>{post[2]}</h3>
            <p>6월 1일 발행</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
