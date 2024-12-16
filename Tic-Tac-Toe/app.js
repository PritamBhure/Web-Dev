let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelectorAll("#reset-btn")

let newGamebtn=document.querySelector("#new-btn")
let msgcontainer =document.querySelector(".msg-conatainer")
let msg =document.querySelector("#msg")


let turnO = true //player X and player O

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetgame=

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked")
    if (turnO){
         box.innerText ="O"
         turnO = false
    }
    else{
        box.innerText ="X"
        turnO = true
    }
    box.disabled= true
    checkwinner();

    });
})


const annableboxes =()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText= "";
    }

}

const disiableboxes =()=>{
    for(let box of boxes){
        box.disabled = true
    }

}

const showWinner =(winner)=>{
    msg.innerText= `Congratulation,Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disiableboxes();

}


let checkwinner =() =>{
    for(pattern of winPatterns){
       let pos1val = boxes[pattern[0]].innerText
       
       let pos2val = boxes[pattern[1]].innerText
       
       let pos3val = boxes[pattern[2]].innerText

       if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val=== pos3val){
            console.log("Winner",pos1val)
          showWinner(pos1val);
        }
       }
    }
}