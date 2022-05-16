// 경고 잠시 끄기
/* eslint-disable */

import { useState } from "react";
import "./App.css";

// react (웹 앱 프레임워크)
// 장) 앱 발행이 쉬움
// 뛰어난 UX (빠른 느낌)
// 단) 문법이 어려움
//

function App() {
    let [name, age] = ["가나다", 20];

    // let [a, b] = useState("ㅁㄴㅇㄴ");
    // a는 'ㅁㄴㅇㄹ' 같은 데이터가, b에는 state 변경을 도와주는 함수가 들어간다.
    // state를 쓰는 이유는 변수에 변경이 생기면 재렌더링해주기 때문.
    // 일반 변수라면 직접 스크립트로 변경해주어야 함.
    // 변경 자주 되는 건 state, 변경 자주 안 되는 건 일반 변수에 저장 OK

    // title[0] 과 같이 사용 가능 (array 넣었으니까)
    let [title, titleState] = useState(["여자 코트 추천", '강남 우동 맛집', '파이썬 독학']);

    let [good, goodState] = useState(0);
    let mainTitle = "개발 blog??";

    return (
        <div className="App">
            <div className="black-nav">
                <div>{mainTitle}</div>
            </div>

            <div className="list">
                <h4>{title[0]} <span>👍</span>{good}</h4>
                <p>2월 17일 발행</p>
                <button type="button" onClick={() => {goodState(good + 1)}}>굿 추가</button>
            </div>


            <div className="list">
                <h4>{title[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div>

            {/* 데이터 바인딩 */}
            {/* <div className={classRed}>여기 변수는 {post}</div> */}
            {/* 스타일은 중괄호 안에 묶어서 자료형 가능...
                - 는 사용 불가하므로 대문자로 치환 (ex. font-size => fontSize ) */}
            {/* <div style={{color: 'blue', fontSize: '3rem' }}>스타일 글씨</div> */}
        </div>
    );
}

export default App;
