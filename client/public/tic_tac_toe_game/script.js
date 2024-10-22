let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let msg=document.querySelector(".msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner()
        
    });
});

const checkWinner=()=>{
    let winner=null;
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                return;
            }
        }
    }noWin();
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msg.classList.remove("hide");
    disabledboxes();
};

const noWin=() => {
    let allFilled = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });
    if (allFilled) {
        msg.innerText = "It's a Draw!";
        msg.classList.remove("hide");
        disabledboxes();
    }
};

const disabledboxes=()=>{
 boxes.forEach(box=>box.disabled=true);}

const enableboxes=()=>{
    boxes.forEach(box=>{
        box.disabled=false;
        box.innerText="";
    }
    );
};

const resetGame=()=>{
    turn0=true;
    enableboxes();
    msg.classList.add("hide");
    msg.innerText="";
};

resetBtn.addEventListener("click",resetGame);