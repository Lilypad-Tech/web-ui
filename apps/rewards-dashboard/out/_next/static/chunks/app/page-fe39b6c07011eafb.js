(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6797:function(e,t,r){Promise.resolve().then(r.bind(r,2701))},2701:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var s=r(1211),n=r(190);let a=[{href:"https://twitter.com/lilypad_tech",iconUrl:"/x.svg"},{href:"https://discord.gg/lilypad-network",iconUrl:"/discord.svg"},{href:"https://t.me/lilypadnetwork",iconUrl:"/telegram.svg"},{href:"https://github.com/Lilypad-Tech",iconUrl:"/github.svg"},{href:"https://www.linkedin.com/company/lilypad-network/",iconUrl:"/linkedin.svg"},{href:"https://www.youtube.com/@LilypadNetwork/featured",iconUrl:"/youtube.svg"}];function l(e){let{currentView:t}=e;return(0,s.jsxs)("div",{className:"md:flex md:justify-between container w-full py-12 md:py-4",children:[(0,s.jsxs)("div",{className:"cta md:order-2 text-center md:text-left mb-8 md:mb-0",children:[(0,s.jsxs)("div",{className:"cta-text mb-4",children:[(0,s.jsx)("h3",{className:"cta-title text-xl font-bold",children:"Get involved!"}),"openSource"===t?(0,s.jsx)("p",{className:"cta-subtitle text-md",children:"Join the Lilypad open source initiative now."}):(0,s.jsx)("p",{className:"cta-subtitle text-md",children:"Explore the Lilypad ambassador program now."})]}),(0,s.jsx)("a",{href:"openSource"===t?"https://blog.lilypadnetwork.org/lilypad-launches-open-source-initiative-as-part-of-incentivenet":"https://lilypadnetwork.notion.site/Lilypad-Ambassadors-f11f73e91f684fa192fc2fab7985fe0d",target:"_blank",rel:"noopener noreferrer",className:"cta-button bg-[#095856] text-[#E0FFF9] px-4 py-2 rounded-md hover:bg-[#0c7472]",children:"Find out more!"})]}),(0,s.jsx)("div",{className:"flex order-1 md:order-1 gap-4 justify-center md:justify-start items-center",children:a.map((e,t)=>(0,s.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("img",{src:e.iconUrl,alt:"social icon"})},t))})]})}let o=()=>(0,s.jsx)("div",{className:"mx-auto border border-gray-600 rounded-lg shadow-md ring-0 ring-offset-0 bg-[#181c21] w-12 h-12 flex items-center justify-center",children:(0,s.jsx)("img",{src:"/loading-icon.svg",className:"animate-spin w-6 h-6 filter invert",alt:"Loading Icon"})}),i=(e,t)=>{t([...e].sort((e,t)=>parseInt(t.rewards,10)-parseInt(e.rewards,10)))},c=(e,t)=>{t([...e].sort((e,t)=>{let r=e.contributions.split(";").filter(Boolean).length;return t.contributions.split(";").filter(Boolean).length-r}))};function d(){let[e,t]=(0,n.useState)([]),[r,a]=(0,n.useState)("openSource"),[d,x]=(0,n.useState)(""),[m,u]=(0,n.useState)(!0),p=async e=>{t([]),u(!0);try{let r=await fetch("/api/".concat(e)),s=await r.json();setTimeout(()=>{t(s),u(!1)},250)}catch(e){console.error("Error fetching data:",e),u(!1)}};return(0,n.useEffect)(()=>{p(r)},[r]),(0,s.jsxs)("div",{className:"px-4 md:px-0 text-[#e0fff9] py-3",children:[(0,s.jsxs)("main",{className:"container mx-auto rounded-xl border-secondary mt-4",children:[(0,s.jsxs)("nav",{className:"navbar md:w-full mb-6 md:mb-12 flex flex-col md:flex-row justify-between items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2 text-center md:text-left",children:[(0,s.jsx)("img",{src:"/lilypad-logo.svg",alt:"Lilypad Logo",className:"mx-auto md:mx-0"}),(0,s.jsx)("h1",{className:"text-xl font-bold text-[#b8f4f3]",children:"openSource"===r?"Open Sourcerors":"Ambassadors"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 md:gap-4",children:[(0,s.jsx)("button",{className:"rounded p-1 md:px-4 md:py-2 text-sm md:text-lg text-center cursor-pointer hover:bg-[#272d35] ".concat("openSource"===r?"bg-[#272D35] text-[#e0fff9] border":"bg-[#181c21] text-text-color"),onClick:()=>a("openSource"),children:"Open Source Rewards"}),(0,s.jsx)("button",{className:"rounded p-1 md:px-4 md:py-2 text-sm md:text-lg text-center cursor-pointer hover:bg-[#272d35] ".concat("ambassador"===r?"bg-[#272D35] text-[#e0fff9] border":"bg-[#181c21] text-text-color"),onClick:()=>a("ambassador"),children:"Ambassador Rewards"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)("div",{className:"text-center text-sm md:text-md leading-7 text-[#E0FFF9] font-semibold antialiased",style:{minWidth:"200px"},children:m?(0,s.jsx)("span",{"aria-live":"polite",children:"Loading..."}):"openSource"===r?(0,s.jsx)("span",{children:"Total Contributions: ".concat(e.reduce((e,t)=>{var r;return e+((null==t?void 0:null===(r=t.contributions)||void 0===r?void 0:r.split(";").filter(Boolean).length)||0)},0))}):(0,s.jsx)("span",{children:"Total Contributors: ".concat((null==e?void 0:e.length)||0)})}),"openSource"===r&&(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("span",{className:"sr-only",children:"Sort contributions"}),(0,s.jsxs)("select",{className:"font-inter bg-[#181c21] text-text-color border border-[#0c7471] p-1 text-sm rounded cursor-pointer",value:d,onChange:r=>{let s=r.target.value;x(s),"rewards"===s?i(e,t):"contributions"===s&&c(e,t)},"aria-label":"Sort contributors by",children:[(0,s.jsx)("option",{value:"rewards",children:"Sort by rewards"}),(0,s.jsx)("option",{value:"contributions",children:"Sort by contributions"})]})]})]})]}),(0,s.jsx)("section",{className:"bg-[#181c21] md:min-h-[60vh] w-full flex flex-col my-auto overflow-x-auto transition-opacity duration-300",children:m?(0,s.jsxs)("span",{className:"text-center flex flex-col my-auto items-center",children:[(0,s.jsx)(o,{}),(0,s.jsx)("p",{className:"text-lg font-semibold",children:"Loading entries"}),(0,s.jsx)("p",{className:"text-sm text-[#0f9491]",children:"This might take a moment!"})]}):(0,s.jsx)("div",{className:"table-container w-full overflow-x-auto",children:(0,s.jsxs)("table",{className:"contributors-table w-full text-sm",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-gray-600",children:[(0,s.jsx)("th",{className:"text-left px-4 py-2",children:"Contributor"}),(0,s.jsx)("th",{className:"text-center px-4 py-2",children:"Lilybit Rewards"}),"openSource"===r&&(0,s.jsx)("th",{className:"text-center px-4 py-2",children:"Contributions"}),(0,s.jsx)("th",{className:"text-center px-4 py-2",children:"Wallet ID"})]})}),(0,s.jsx)("tbody",{children:e.map(e=>{var t;let n=!(null==e?void 0:e.contributions);return(0,s.jsxs)("tr",{className:"border-b border-gray-700",children:[(0,s.jsx)("td",{className:"px-4 py-2",title:e.id&&"User ID: #".concat(e.id),children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("img",{className:"contributor-avatar w-8 h-8 rounded-full",src:n?e.avatar||"/default-avatar.png":"https://github.com/".concat(e.username,".png"),alt:"Avatar of ".concat(e.username),loading:"lazy"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"contributor-name text-sm font-semibold",children:e.username}),"openSource"===r&&(0,s.jsx)("a",{href:"https://github.com/".concat(null==e?void 0:e.username),target:"_blank",rel:"noreferrer",className:"text-xs text-blue-500 underline","aria-label":"Visit ".concat(null==e?void 0:e.username,"'s GitHub profile"),children:"GitHub Profile"})]})]})}),(0,s.jsx)("td",{className:"text-center px-4 py-2",children:e.rewards||"0"}),"openSource"===r&&(0,s.jsx)("td",{className:"text-center px-4 py-2",children:(null===(t=e.contributions)||void 0===t?void 0:t.split(";").filter(e=>e).length)||"0"}),(0,s.jsx)("td",{className:"text-center px-4 py-2",children:e.wallet_address||"N/A"})]},(null==e?void 0:e.id)||(null==e?void 0:e.username))})})]})})})]}),(0,s.jsx)(l,{currentView:r})]})}}},function(e){e.O(0,[431,247,744],function(){return e(e.s=6797)}),_N_E=e.O()}]);