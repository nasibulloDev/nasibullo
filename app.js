const openBtn = document.querySelector("#bars");
const closeBtn = document.querySelector("#close");
const sidebar = document.querySelector(".sidebar");

console.log(openBtn);
console.log(closeBtn);


openBtn.addEventListener('click', openFun);
closeBtn.addEventListener("click", closeFun)


function openFun(){
  closeBtn.style.display ="flex";
  openBtn.style.display = "none"
   sidebar.style.display ="flex";
}
function closeFun(){
  closeBtn.style.display ="none";
  openBtn.style.display ="flex";
  sidebar.style.display =  "none";
}









