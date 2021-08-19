<p align="center">
<img src="https://user-images.githubusercontent.com/80495707/130037420-e582c720-0f6a-4eac-9a1e-337519a811e9.png" align="center">
</p>
<div align="center">
<h3>신희타 가점도우미</h3>
</div>

# 📑 프로젝트 소개
🏡 부동산 청약제도 중 하나인 신혼희망타운 청약 지원자들을 위한 사이트입니다.<br />
신혼희망타운 청약에서 중요하지만 복잡한 점수계산에 도움을 주기 위해 사이트를 만들게 되었습니다.

##### 프로젝트 기간: 2021.07.26 ~ 2021.08.20
##### 개발 기반 브라우저: Chrome

# ✨ 주요 기능
### 💻 메인

![신희타가점도우미-Chrome-2021-08-19-17-47-24](https://user-images.githubusercontent.com/80495707/130039003-f7e49aa1-7ca7-4423-acac-5a95595023d7.gif)

🏠 메인

[1] 우선공급 1단계(30%) 잔여공급 2단계(70%) 점수계산 기능

[2] 점수계산에 필요한 사이트 바로가기 기능

[3] 3기 신도시 사전청약 신혼희망타운 공급물량 정리표 제공

[4] 신혼희망타운 지원자격조건 정보 제공

[5] 사용자 불편사항 접수를 위한 피드백란 생성

### 💻 점수계산
![신희타가점도우미-Chrome-2021-08-19-17-57-07_1](https://user-images.githubusercontent.com/80495707/130040937-983bc6eb-6fd0-4fff-97c8-93d1f3c59880.gif)


🏠 점수계산

[1] 사용자가 정보를 입력하면 그에 맞는 점수 제공

[2] 사용자의 거주지역과 지원지역을 비교하여 배정되는 공급물량 정보 제공

[3] 항목 미입력시 입력 안내 메세지 띄움

### 💻 자주묻는 질문
![신희타가점도우미-Chrome-2021-08-19-17-58-45](https://user-images.githubusercontent.com/80495707/130041020-e45adc2f-ff70-4e8d-a027-2fbce97fecf6.gif)

🏠 자주묻는 질문 (업데이트 예정)

[1] 신혼희망타운 청약 준비자들이 자주 묻는 질문을 정리


# 🛠 사용 기술
|Front-End|Back-End|DataBase|Front-Server|Back-Server|Tool|
|:---:|:---:|:---:|:---:|:---:|:---:|
|JavaScript, React.JS, Next.JS|JavaScript, Node.js|MySQL|AWS EC2|AWS EC2|Git, Notion|

#### back package.json

```
{
  "name": "back",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mysql2": "^2.3.0",
    "sequelize": "^6.6.5",
    "sequelize-auto": "^0.8.3",
    "sequelize-cli": "^6.2.0"
  }
}

```

#### Front package.json
```
{
  "name": "front",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next dev -p 3001 -H 0.0.0.0",
    "build": "next build",
    "start": "next start -p 80",
    "lint": "next lint"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^11.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "styled-components": "^5.3.0"
  },
  "description": "",
  "devDependencies": {
    "babel-plugin-styled-components": "^1.13.2"
  }
}


```

# 🖥 Local 실행 방법
[1] Clone the Repo
git clone https://github.com/HeiniHeo/AllAboutSHT.git

[2] Install Packages
Front: cd AllAboutSHT => cd Front => npm i
back: cd AllAboutSHT => cd back => npm i

[3] Run the Project
Front => npm run dev
back => node server.js


## 👩‍💻 개발자

[허유명](https://github.com/HeiniHeo)
[강지현](https://github.com/jorny95)
[김서영](https://github.com/simbian2)

## 🔗 URL
[신희타가점도우미 바로가기](http://jebaldangcheom.com/)
