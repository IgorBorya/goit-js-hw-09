import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),l=t.querySelector('input[name="email"]'),m=t.querySelector('textarea[name="message"]'),r="feedback-form-state";let e={email:"",message:""};const s=localStorage.getItem(r);s&&(e=JSON.parse(s),l.value=e.email,m.value=e.message),t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(r,JSON.stringify(e))}),t.addEventListener("submit",a=>{if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),t.reset(),localStorage.removeItem(r),e={email:"",message:""}})});
//# sourceMappingURL=commonHelpers2.js.map
