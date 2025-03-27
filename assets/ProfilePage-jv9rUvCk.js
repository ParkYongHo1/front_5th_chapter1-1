var v=Object.defineProperty;var b=t=>{throw TypeError(t)};var y=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>y(t,typeof e!="symbol"?e+"":e,s),g=(t,e,s)=>e.has(t)||b("Cannot "+s);var n=(t,e,s)=>(g(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s,a)=>(g(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const c="/front_5th_chapter1-1/",O=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="${c}/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,A=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" name="username" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded" required>
        </div>
        <div class="mb-6">
          <input type="password" name="password" id="password" placeholder="비밀번호" class="w-full p-2 border rounded" required>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold" id="registerButton">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,h=`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,w=[{id:1,name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:2,name:"박용호",createdAt:"15분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:3,name:"김용호",createdAt:"25분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:4,name:"이용호",createdAt:"1시간 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:5,name:"이용호",createdAt:"1시간 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"}],$={home:{id:"",content:"홈",path:"/"},profile:{id:"profile",content:"프로필",path:"/profile"},login:{id:"login",content:"로그인",path:"/login"},logout:{id:"logout",content:"로그아웃",path:"/logout"}};var r,i;class I{constructor(){m(this,r,null);m(this,i,"user");f(this,"state",{loggedIn:!1,posts:w});d(this,r,JSON.parse(localStorage.getItem(n(this,i))||"null")),this.state.loggedIn=n(this,r)!==null}setUserInfo(e){d(this,r,e),localStorage.setItem(n(this,i),JSON.stringify(e)),this.state.loggedIn=!0}removeUserInfo(){d(this,r,null),localStorage.removeItem(n(this,i)),this.state.loggedIn=!1}get userInfo(){return n(this,r)}getState(){return this.state}}r=new WeakMap,i=new WeakMap;const p=new I,x=()=>{const t=p.getState().loggedIn,e=$;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${(t?[e.home,e.profile,e.logout]:[e.home,e.login]).map(o=>o.id==="logout"?`
          <li>
            <a href="${c}/login" id="logout" class="text-gray-600">로그아웃</a>
          </li>`:`
        <li>
          <a href="${c}${o.path}" class="${location.pathname===`${c}${o.path}`?"text-blue-600 font-bold":"text-gray-600"}">${o.content}</a>
        </li>`).join("")}
      </ul>
    </nav>
  `},S=({name:t,createdAt:e,content:s})=>`
        <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                    <p class="font-bold">${t}</p>
                    <p class="text-sm text-gray-500">${e}</p>
                </div>
        </div>
        <p>${s}</p>
        <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
        </div>
    `,N=()=>{const{posts:t}=p.getState();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${x()}
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">
            ${t.map(({id:e,name:s,createdAt:a,content:o})=>`
                <div class="bg-white rounded-lg shadow p-4" data-id="${e}">
                    ${S({name:s,createdAt:a,content:o})}
                </div>
              `).join("")}
          </div>
        </main>
        ${h}
      </div>
    </div>
  `},j=()=>{const t=p.userInfo||{},{username:e="",bio:s="",email:a=""}=t;return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${x()}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${e}"
                  placeholder="사용자 이름을 입력해주세요"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${a}"
                  placeholder="이메일을 입력해주세요"
                  class="w-full p-2 border rounded"
                /> 
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  placeholder="자기소개를 입력해주세요" 
                  class="w-full p-2 border rounded"
                >${s}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
       ${h}
      </div>
    </div>
  </div>
`};export{c as B,A as L,N as M,O as N,j as P,p as s};
