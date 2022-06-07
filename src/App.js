// 경고 잠시 끄기
/* eslint-disable */

import React, { useState } from "react";
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
    let [title, setTitle] = useState(["그림 추천", "여자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
    let [good, setGood] = useState([0, 2, 3, 45]);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);
    let [inputData, setInputData] = useState("");

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
                    <div className={"list" + " " + "list" + i} key={i}>
                        {/* onClick에 함수 여러개 쓰려면 중괄호 써야함 안 쓰면 에러*/}
                        <h4
                            className="asd{i}"
                            onClick={() => {
                                setModal(true);
                                changeModal(i);
                            }}
                        >
                            {i} : {title[i]}
                            {/* 이벤트 버블링 막기. e.stopPropagation(); */}
                            <span
                                onClick={(e) => {
                                    e.stopPropagation();
                                    let copy = [...good];
                                    copy[i]++;
                                    setGood(copy);
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                👍 {good[i]}
                            </span>
                        </h4>
                        <p>2월 17일 발행</p>
                        <button type="button" onClick={() => delItem(i)}>
                            삭제
                        </button>
                    </div>
                );
            })}

            {/* 데이터 바인딩 */}
            {/* <div className={classRed}>여기 변수는 {post}</div> */}
            {/* 스타일은 중괄호 안에 묶어서 자료형 가능...
                - 는 사용 불가하므로 대문자로 치환 (ex. font-size => fontSize ) */}
            {/* <div style={{color: 'blue', fontSize: '3rem' }}>스타일 글씨</div> */}

            {/* if문 사용할 수 없으므로 대신 삼항으로 사용 */}
            {/* props로 함수도 넣을 수 있음 setTitle 등등 */}
            {modal == true ? <Modal title={title} backgroundColor="yellow" changeTitle={changeTitle} /> : null}

            {/* input */}
            {/* 이벤트핸들러 onChange, onScroll, onMouseOver, onClick... ... */}
            {/* e (이벤트객체) => e.target, e.value ... */}
            {/* state 변경보다 console.log가 먼저 실행되기 때문에 변경사항 반영 바로 안 됨 */}
            <input
                type="text"
                id="input_data"
                onChange={(e) => {
                    setInputData(e.target.value);
                    // console.log(inputData);
                }}
            />
            <button type="button" onClick={() => addItem()}>
                등록
            </button>

            <Profile />
        </div>
    );

    // 컴포넌트
    // 1. 반복적인 html 축약
    // 2. 큰 페이지들
    // 3. 자주 변경되는 UI

    // state => props로 전달
    // props 전달은 부모 > 자식만 가능. (자식 > 부모, 자식 > 자식 props 전달은 불가)
    function Modal(props) {
        return (
            // 하나의 태그로 시작해서 하나의 태그로 끝나야함
            // 병렬해서 쓰려면 하나로 감싸기
            // fragment <></>
            <>
                <div className="modal" style={{ background: props.backgroundColor }}>
                    <h4 className="modal-title">{props.title[modalTitle]}</h4>
                    <p>날짜</p>
                    <p>상세내용</p>
                    <button type="button" onClick={() => props.changeTitle(["123", "그림추천어쩌고", "어쩌고저쩌고"])}>
                        제목변경
                    </button>
                </div>
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

    function addItem() {
        if (inputData == "") {
            inputData = "데이터데이터";
        }

        let tList = [inputData, ...title],
            gList = [0, ...good];

        setTitle(tList);
        setGood(gList);

        let inputText = document.getElementById("input_data");
        inputText.value = "";
        inputText.focus();
        setInputData("");
    }

    function delItem(num) {
        let tList = [...title],
            gList = [...good];

        tList.splice(num, 1);
        gList.splice(num, 1);

        setTitle(tList);
        setGood(gList);
    }

    function changeModal(num) {
        setModalTitle(num);
    }

    function changeTitle(title) {
        setTitle(title);
    }

    function sortTitleList() {
        let tList = [...title];
        tList.sort();
        setTitle(tList);
    }
}

// 옛날버전 class 문법
class Profile extends React.Component {
    constructor() {
        super();

        // state 위치
        this.state = { name: "Kim", age: 30 };
    }

    // arrow func에 대해서는 하단 참조
    // changeName() {
    //     this.setState({ name: "Lee" });
    // }
    changeName = () => {
        this.setState({ name: "Lee" });
    }

    render() {
        return (
            <>
                <div>프로필입니다</div>
                {/* state 꺼내오려면 this.state.name 이라고 해야함 */}
                <div>{this.state.name}입니다.</div>
                {/* this.setState( {state명 : 이름}) */}
                {/* 현재의 setName()은 대체하는 것. useState는 해당 부분만 변경 */}
                <button
                    type="button"
                    onClick={() => {
                        this.setState({ name: "Park" });
                    }}
                >
                    이름변경1
                </button>
                {/* 함수를 작성하고 싶은 경우 constructor 아래쪽에 함수로 작성 */}
                <button
                    type="button"
                    onClick={
                        // 항상 this를 붙여야 함.
                        // this.changeName() 하면 에러 안 나지만 this.changeName 하면 에러남.
                        // 이 땐 changeName.bind(this) 해주거나, (함수가 changeName() {} 일 경우)
                        // changeName을 arrow function으로 바꿔주면 this 자동으로 바인딩 되어서 해결~ (함수가 changeName = () => {} 일 경우)

                        // this.changeName.bind(this)
                        this.changeName
                    }
                >
                    이름변경2
                </button>

                {this.state.name == "Lee" ? <div>Lee입니다</div> : <div>Lee가 아닙니다</div>}
                {this.state.name == "Park" ? <div>Park입니다</div> : <div>Park가 아닙니다</div>}

                <img src="/img/spring.jpg" style={{width: "300px"}} />
            </>
        );
    }
}

export default App;




// build하고 배포하기

// 브라우저는 html, css, js만 알아들을 수 있으므로 build 해서 배포해야함
// 빌드하면 index.html  생성됨. 서버 api에서 build/index.html로 파일 전송~ 하면 끝
// npm run build <- 명령어

// http://URL/blog 처럼 하위에 작성할 경우
// package.json 파일 object에 아래와 같이 추가
// "homepage" : "어쩌고저쩌고/blog"

// build할 때 압축시키고 싶지 않은 파일은 public 폴더 안에 넣기 
// build 한 후에도 루트 경로에 파일이 남아있음. (이 경우 src에 ./가 아니라 /로 import해오면 됨)