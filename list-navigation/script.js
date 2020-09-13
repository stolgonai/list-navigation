const mainNode = document.querySelector(".main");
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const allBtns = document.querySelector(".listBtns")

let activePage;
let prevBtn = null;

drawAllListBtns()
changeActivePage({ nextPage: 1, btnIndex: 0 });

function drawAllListBtns(){
    for(let i = 1; i <= 10; i++){
        let oneBtn = document.createElement("button");
        oneBtn.className = "oneListBtn"
        oneBtn.innerText = i;
        oneBtn.onclick = function () {
            changeActivePage({nextPage: i, btnIndex: i - 1});      
               
        };
        allBtns.appendChild(oneBtn)
    }
}

leftBtn.addEventListener("click", function(){
    changeActivePage({nextPage: --activePage, btnIndex: activePage - 1})
    // console.log(activeIndex)
})

rightBtn.addEventListener("click", function(){
    changeActivePage({nextPage: ++activePage, btnIndex: activePage - 1})
    // console.log(activeIndex)
})
console.log(activePage)
function changeActivePage({nextPage, btnIndex}){
    activePage = nextPage;
    leftBtn.disabled = nextPage <= 1;
    rightBtn.disabled = nextPage >=10;  
    
    if(prevBtn){
        prevBtn.classList.remove("active")
    } 
    let currentBtn = allBtns.children[btnIndex];
    currentBtn.classList.add("active");
    prevBtn = currentBtn;
    console.log(activePage)
    console.log(prevBtn, "prevBtn")
    // drawCurrentPage(currentPage)
}

function drawCurrentPage(page) {
    document.querySelector("div").textContent = page;
  }