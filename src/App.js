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
    // 일반 변수
    let [name, age] = ["가나다", 20];
    let mainTitle = "개발 blog??";

    // let [a, b] = useState("ㅁㄴㅇㄴ");
    // a는 'ㅁㄴㅇㄹ' 같은 데이터가, b에는 state 변경을 도와주는 함수가 들어간다.
    // state를 쓰는 이유는 변수에 변경이 생기면 재렌더링해주기 때문.
    // 일반 변수라면 직접 스크립트로 변경해주어야 함.
    // 변경 자주 되는 건 state, 변경 자주 안 되는 건 일반 변수에 저장 OK

    // title[0] 과 같이 사용 가능 (array 넣었으니까)
    let [title, setTitle] = useState(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
    let [good, setGood] = useState([0, 2, 3]);
    let [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <div>{mainTitle}</div>
            </div>

            <button
                type="button"
                onClick={() => {
                    // 원본 보존이 필요할 수 있으니 copy 만들어서 state 변경

                    // state가 기존과 같으면 변경하지 않음

                    // array/object
                    // let arr = [1,2,3] 이면 1,2,3을 저장하는 게 아니라 RAM에 저장된 위치 화살표만 저장(포인터?)

                    // title[0] = "어쩌고" 하고 직접 넣어봤자 array를 수정한 것이고 변수의 화살표가 변경되지 않아서 state 갱신 X
                    // let copy = title 하면 변수에 저장된 화살표만 저장되기 때문에... (같은가 하면 true 뜸)
                    // 참고) reference data type
                    // 화살표가 같아서 copy를 아무리 수정해도 state 안 변함

                    // ... <- 기존 거 괄호를 벗겨주세요
                    // [...title] <- 기존 title 괄호 벗겨서 다시 괄호에 넣음 <- 화살표 달라짐

                    let copy = [...title];
                    // 전문용어로 shallow copy라고 한다함
                    // array/object일 경우 카피해서 수정
                    copy[0] = "정렬을 위한 어쩌고";
                    changeTitle(copy);
                }}
            >
                타이틀 변경
            </button>

            <button type="button" onClick={sortTitleList}>
                정렬
            </button>

            {/* <div className="list">
                <h4>
                    {title[0]} <span>👍</span>
                    {good}
                </h4>
                <p>2월 17일 발행</p>
                <button
                    type="button"
                    onClick={() => {
                        setGood(good + 1);
                    }}
                >
                    굿 추가
                </button>
            </div>

            <div className="list">
                <h4>{title[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4 onClick={() => setModal(!modal)}>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div> */}

            {/* 반복문 map 이용, a는 해당 내용, i는 인덱스 */}
            {title.map(function (a, i) {
                return (
                    // 유니크 키가 들어가야함. key={html마다 다른 숫자}
                    <div className="list" key={i}>
                        <h4>
                            {i} : {title[i]}
                            <span>👍</span> {good[i]}
                        </h4>
                        <button
                            type="button"
                            onClick={() => {
                                let copy = [...good];
                                copy[i]++;
                                setGood(copy);
                            }}
                        >
                            굿 추가
                        </button>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}

            {/* 데이터 바인딩 */}
            {/* <div className={classRed}>여기 변수는 {post}</div> */}
            {/* 스타일은 중괄호 안에 묶어서 자료형 가능...
                - 는 사용 불가하므로 대문자로 치환 (ex. font-size => fontSize ) */}
            {/* <div style={{color: 'blue', fontSize: '3rem' }}>스타일 글씨</div> */}

            {/* if문 사용할 수 없으므로 대신 삼항으로 사용 */}
            {modal == true ? <Modal /> : null}
        </div>
    );

    // 컴포넌트
    // 1. 반복적인 html 축약
    // 2. 큰 페이지들
    // 3. 자주 변경되는 UI
    function Modal() {
        return (
            // 하나의 태그로 시작해서 하나의 태그로 끝나야함
            // 병렬해서 쓰려면 하나로 감싸기
            // fragment <></>
            <>
                <div className="modal">
                    <h4>title</h4>
                    <p>날짜</p>
                    <p>상세내용</p>
                </div>
                <div>내용2</div>
            </>
        );
    }

    // 이런식으로 만들 수도 있지만... (const 수정 못하는 걸 활용해서) 다만 선언이 위로 가야할듯.
    // const Modal2 = () => {
    //     return (
    //         <div className="modal2">
    //             <h4>title</h4>
    //             <p>날짜</p>
    //             <p>상세내용</p>
    //         </div>
    //     );
    // };

    function changeTitle(title) {
        setTitle(title);
    }

    function sortTitleList() {
        let tList = [...title];
        tList.sort();
        setTitle(tList);
    }
}

export default App;
