var S=Object.defineProperty;var b=t=>{throw TypeError(t)};var L=(t,e,o)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var v=(t,e,o)=>L(t,typeof e!="symbol"?e+"":e,o),x=(t,e,o)=>e.has(t)||b("Cannot "+o);var a=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),g=(t,e,o)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),m=(t,e,o,n)=>(x(t,e,"write to private field"),n?n.call(t,o):e.set(t,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const E="/front_5th_chapter1-1",A=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="${E}/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,_=()=>`
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
`,w=`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,O=[{id:1,name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:2,name:"박용호",createdAt:"15분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:3,name:"김용호",createdAt:"25분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:4,name:"이용호",createdAt:"1시간 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:5,name:"이용호",createdAt:"1시간 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"}],P={home:{id:"",content:"홈",path:"/"},profile:{id:"profile",content:"프로필",path:"/profile"},login:{id:"login",content:"로그인",path:"/login"},logout:{id:"logout",content:"로그아웃",path:"/logout"}};var r,c;class B{constructor(){g(this,r,null);g(this,c,"user");v(this,"state",{loggedIn:!1,posts:O});m(this,r,JSON.parse(localStorage.getItem(a(this,c))||"null")),this.state.loggedIn=a(this,r)!==null}setUserInfo(e){console.log(e),m(this,r,e),localStorage.setItem(a(this,c),JSON.stringify(e)),this.state.loggedIn=!0}removeUserInfo(){m(this,r,null),localStorage.removeItem(a(this,c)),this.state.loggedIn=!1}get userInfo(){return a(this,r)}get isAuthenticated(){return a(this,r)!==null}getState(){return this.state}}r=new WeakMap,c=new WeakMap;const d=new B,y="/front_5th_chapter1-1",$=()=>{const t=d.getState().loggedIn,e=P;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${(t?[e.home,e.profile,e.logout]:[e.home,e.login]).map(s=>s.id==="logout"?`
          <li>
            <a href="${y}/login" id="logout" class="text-gray-600">로그아웃</a>
          </li>`:`
        <li>
          <a href="${y}${s.path}" class="${location.pathname===s.path?"text-blue-600 font-bold":"text-gray-600"}">${s.content}</a>
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
    `,U=()=>{const{posts:t}=d.getState();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${$()}
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">
            ${t.map(({id:e,name:o,createdAt:n,content:s})=>`
                <div class="bg-white rounded-lg shadow p-4" data-id="${e}">
                    ${N({name:o,createdAt:n,content:s})}
                </div>
              `).join("")}
          </div>
        </main>
        ${w}
      </div>
    </div>
  `},j=()=>{const t=d.userInfo||{},{username:e="",bio:o="",email:n=""}=t;return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${$()}
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
                  value="${n}"
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
       ${w}
      </div>
    </div>
  </div>
`},f="/front_5th_chapter1-1",u=()=>{document.getElementById("root").innerHTML=D()},h=window.location.href.includes("index.hash.html"),q=t=>{if(t.preventDefault(),t.target&&t.target.id==="login-form"){const e=t.target.querySelector("#username").value;d.setUserInfo({username:e,email:"",bio:""}),h?location.hash=`${f}#/profile`:history.pushState(null,"",`${f}/profile`),u()}if(t.target&&t.target.id==="profile-form"){const e=t.target.querySelector("#username").value,o=t.target.querySelector("#email").value,n=t.target.querySelector("#bio").value;d.setUserInfo({username:e,email:o,bio:n}),alert("프로필이 업데이트되었습니다."),u()}},R=t=>{t.target&&t.target.id==="logout"&&(t.preventDefault(),d.removeUserInfo(),h?location.hash="#/login":history.pushState(null,"",`${f}/login`),u())},k=t=>{t.target&&t.target.nodeName==="A"&&(t.preventDefault(),h?location.hash=t.target.href.replace(location.origin,""):history.pushState(null,"",t.target.href.replace(location.origin,"")),u())},I=()=>{u(),document.getElementById("root").addEventListener("submit",q),document.getElementById("root").addEventListener("click",R),document.getElementById("root").addEventListener("click",k)},i="/front_5th_chapter1-1",D=()=>{const t=d.getState().loggedIn;switch(location.pathname===`${i}/profile`&&!t&&history.pushState({},"",`${i}/login`),location.pathname===`${i}/login`&&t&&history.pushState({},"",`${i}/`),location.pathname){case`${i}/login`:return`${_()}`;case`${i}/profile`:return`${j()}`;case`${i}/`:return`${U()}`;default:return`${A()}`}};window.addEventListener("popstate",()=>{I()});I();
