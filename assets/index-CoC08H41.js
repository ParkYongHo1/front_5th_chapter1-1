var I=Object.defineProperty;var h=t=>{throw TypeError(t)};var S=(t,e,o)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var b=(t,e,o)=>S(t,typeof e!="symbol"?e+"":e,o),v=(t,e,o)=>e.has(t)||h("Cannot "+o);var a=(t,e,o)=>(v(t,e,"read from private field"),o?o.call(t):e.get(t)),p=(t,e,o)=>e.has(t)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),m=(t,e,o,l)=>(v(t,e,"write to private field"),l?l.call(t,o):e.set(t,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const L="/front_5th_chapter1-1",E=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="${L}/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
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
`,y=`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,O=[{id:1,name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:2,name:"박용호",createdAt:"15분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:3,name:"김용호",createdAt:"25분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:4,name:"이용호",createdAt:"1시간 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:5,name:"이용호",createdAt:"1시간 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"}],P={home:{id:"",content:"홈",path:"/"},profile:{id:"profile",content:"프로필",path:"/profile"},login:{id:"login",content:"로그인",path:"/login"},logout:{id:"logout",content:"로그아웃",path:"/logout"}};var r,c;class _{constructor(){p(this,r,null);p(this,c,"user");b(this,"state",{loggedIn:!1,posts:O});m(this,r,JSON.parse(localStorage.getItem(a(this,c))||"null")),this.state.loggedIn=a(this,r)!==null}setUserInfo(e){console.log(e),m(this,r,e),localStorage.setItem(a(this,c),JSON.stringify(e)),this.state.loggedIn=!0}removeUserInfo(){m(this,r,null),localStorage.removeItem(a(this,c)),this.state.loggedIn=!1}get userInfo(){return a(this,r)}get isAuthenticated(){return a(this,r)!==null}getState(){return this.state}}r=new WeakMap,c=new WeakMap;const i=new _,x="/front_5th_chapter1-1",w=()=>{const t=i.getState().loggedIn,e=P;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${(t?[e.home,e.profile,e.logout]:[e.home,e.login]).map(s=>s.id==="logout"?`
          <li>
            <a href="${x}/login" id="logout" class="text-gray-600">로그아웃</a>
          </li>`:`
        <li>
          <a href="${x}${s.path}" class="${location.pathname===s.path?"text-blue-600 font-bold":"text-gray-600"}">${s.content}</a>
        </li>`).join("")}
      </ul>
    </nav>
  `},N=({name:t,createdAt:e,content:o})=>`
        <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                    <p class="font-bold">${t}</p>
                    <p class="text-sm text-gray-500">${e}</p>
                </div>
        </div>
        <p>${o}</p>
        <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
        </div>
    `,j=()=>{const{posts:t}=i.getState();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${w()}
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">
            ${t.map(({id:e,name:o,createdAt:l,content:s})=>`
                <div class="bg-white rounded-lg shadow p-4" data-id="${e}">
                    ${N({name:o,createdAt:l,content:s})}
                </div>
              `).join("")}
          </div>
        </main>
        ${y}
      </div>
    </div>
  `},B=()=>{const t=i.userInfo||{},{username:e="",bio:o="",email:l=""}=t;return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${w()}
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
                  value="${l}"
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
                >${o}</textarea>
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
       ${y}
      </div>
    </div>
  </div>
`},u=()=>{document.getElementById("root").innerHTML=k()},f=window.location.href.includes("index.hash.html"),U=t=>{if(t.preventDefault(),t.target&&t.target.id==="login-form"){const e=t.target.querySelector("#username").value;i.setUserInfo({username:e,email:"",bio:""}),f?location.hash="#/profile":history.pushState(null,"","/profile"),u()}if(t.target&&t.target.id==="profile-form"){const e=t.target.querySelector("#username").value,o=t.target.querySelector("#email").value,l=t.target.querySelector("#bio").value;i.setUserInfo({username:e,email:o,bio:l}),alert("프로필이 업데이트되었습니다."),u()}},q=t=>{t.target&&t.target.id==="logout"&&(t.preventDefault(),i.removeUserInfo(),f?location.hash="#/login":history.pushState(null,"","/login"),u())},R=t=>{t.target&&t.target.nodeName==="A"&&(t.preventDefault(),f?location.hash=t.target.href.replace(location.origin,""):history.pushState(null,"",t.target.href.replace(location.origin,"")),u())},$=()=>{u(),document.getElementById("root").addEventListener("submit",U),document.getElementById("root").addEventListener("click",q),document.getElementById("root").addEventListener("click",R)},d="/front_5th_chapter1-1",k=()=>{const t=i.getState().loggedIn;switch(location.pathname===`${d}/profile`&&!t&&history.pushState({},"",`${d}/login`),location.pathname===`${d}/login`&&t&&history.pushState({},"","/"),location.pathname){case`${d}/login`:return`${A()}`;case`${d}/profile`:return`${B()}`;case`${d}/`:return`${j()}`;default:return`${E()}`}};window.addEventListener("popstate",()=>{$()});$();
