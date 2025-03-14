import React from 'react';
import MyHeader from './components/Header.jsx';
import MyFooter from './components/Footer.jsx';
//=> export default 한 경우에는 단독 객체를 의미하므로,
//   단독 import 가능.
import {Main as MyMain} from './components01/Main.jsx';
//=> export 한 경우에는 정확하게 전달 객체(Main)를 표기함.
//   Main 을 import 해서 현재파일에서는 MyMain 으로 사용

// ** React.Fragment(조각)
// => 리액트는 둘 이상의 형제 엘리먼트를 랜더링 하지않으므로 
//    ( 최상위 Tag 규칙, 프래그먼트 사용을 권장하는 오류 발생 ) 
//    이들을 <div> 와 같은 Tag로 감싸 주어야 하는데,
//    이때 <React.Fragment> Tag 로 감싸면 불필요한  <div> 사용을 줄여줌
// => <React.Fragment> 는 렌더링 되지않음
// => 사용시 react import 필요함.
const bestDress= { // 헤더 로
  color: 'Red',
  style: 'Short',
  price: 10,
  size:['', '', '', '', '']
} //bestDress

function App() {
  return (
    <React.Fragment>
      {/* ** 동일 효과
        1) <> .... </>
        2) <div className="App"> </div> */}
      <MyHeader {...bestDress}/>
      <MyMain />
      <MyFooter />
    </React.Fragment>
  );
}

export default App;
