let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let newGame=document.querySelector("#newgame");
let message=document.querySelector("#msg");

let turnO= true;//payer X,playerY


let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});


const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
    
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


checkWinner=()=>{
    for(pattern of winPatterns){
       // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],
        //     boxes[pattern[1]],
        //     boxes[pattern[2]]);

        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!=""  && val2!="" && val3!=""){
            if(val1===val2  && val2===val3){
                //console.log(`Winner ${val1}`);
                finalMessage(val1);

            }
        }

    }
}


let finalMessage=(winner)=>{
    message.innerText=`Congratulation the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();   // after this  game will not continue
}

const resetGame=()=>{
    turnO=true;
    
    msgContainer.classList.add("hide");
    //message.innerText = "";
    enableBoxes();


}

newGame.addEventListener("click", resetGame);
resetButton.addEventListener("click",resetGame);

//hi