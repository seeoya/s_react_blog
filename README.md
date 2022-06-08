
## 2022.06. 리액트 기초 스터디 build 테스트

- github IO : https://seeoya.github.io/s_react_blog
- 코딩애플(https://codingapple.com/) 강의 들으며 스터디한 내용은 `App.js` 파일에 주석으로 작성

- npm, build, gh-page 테스트 용으로 작성했으며, 작동 확인 외 코드는 정리하지 않음


***


## 메모

### npm

- npm 이용해 react node module 구성 (npx create-react-app)

- npm start를 통해 react 실행시켜 작업

- git에는 node_module을 제외하고 push되기 때문에 (.gitignore에 /node_modules 가 포함되어있음) git clone 받았을 경우 npm install을 통해 node module을 업데이트 해줘야 함

- npm module 관련 오류 발생 시 npm audit fix로 해결 가능. 해결되지 않을 경우 반복 실행하지 말고 package-lock.json 파일과 node_modules 폴더를 삭제했다가 npm install을 다시 실행하는 쪽이 깔끔함.

- 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. 에러 발생 시 npm upate, npm install -g react-scripts 등으로 해결 가능.

### build

- npm build를 통해 작업 결과물을 html, css, js 파일로 변환.build 완료된 폴더(/build)를 서버에 업로드하면 화면상으로 확인할 수 있음.

- build path는 기본 /build 지만, package.json에 아래와 같이 추가하여 변경 가능( https://stackoverflow.com/questions/41495658/use-custom-build-output-folder-when-using-create-react-app )
```
"scripts" : {
  "build": "set BUILD_PATH='/path' && react-scripts build"
}
```

### gh-page

- build 완료된 파일을 다른 repo에 올리고 github io(page)를 통해 확인하다가, gh-page를 이용하면 다른 repo에 수동으로 올리지 않아도 된다는 정보 확인

- gh-page( npm deploy)를 설정해 github page로 확인 가능이 경우, package.json에 아래 코드 추가 필요
```
"homepage": "주소" (ex. "https://깃허브ID.github.io/REPO명"),
"scripts": {
    "deploy": "npm run build&&gh-pages -d build"
}
```
- “homepage”의 경우, root ( / ) 외 하위 폴더인 경우 작성 필요 (소스 url 문제 발생)

- 정상적으로 gh-page가 실행될 경우, 같은 repo에 gh-pages 브랜치로 build된 내용이 업로드됨. (별도로 build된 코드 공유할 repo 만들지 않아도 돼서 편함)
