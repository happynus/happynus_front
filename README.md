# 💙 Happynus : 간호듀티자동배치 프로그램 
> ##### Front-end Server 입니다.

![간호듀티](https://user-images.githubusercontent.com/52521457/179215823-5b7b8a33-b5a1-4709-b621-b7f34c1ef834.jpg)

### 🗒️ 프로젝트 한 줄 소개  

수기로 작성되는 간호사들의 스케줄 표를 일정한 규칙에 따라 자동으로 배치 될 수 있도록 돕는다.

---
### 🛠️ Skills

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=black"> <img src="https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=Express&logoColor=black"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black"> <img src="https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=Microsoft Azure&logoColor=black"> 

---

### ⚙️ Coding Convention

- 폴더명 : 모두 소문자 ex) artistelement
- 파일명 : 파스칼 케이스 ex) ProfileContent.js
- 클래스명 : 파스칼 케이스 ex) class ProfileContent
- 컴포넌트명 :  파스칼 케이스 ex) <ScrollView> </ScrollView>
- 함수 + 변수명 : 카멜 케이스 ex) fontSizeRules
    - 함수는 동사 형으로 작성하기 ex) checkLoginStatus = () ⇒
    - 변수는 명사 형으로 작성하기 ex) nameSet
- 주석 : import 모듈 바로 아래 class 및 function 시작 바로 위에 작성

<pre>
<code>
import React from 'react';
import {View, Text} from 'react-native';
import statCardStyle from '../../css/statcard/statCardStyle';

/**
 * 컴포넌트 명 : StatCard
 * @author : (코드작성자 명)
 * @date : (작성 날짜)
 * @description : (부가 설명, 전달 사항)
 */

export default function StatCard({cost, percent}) {
</code>
</pre>
---

