let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player x , player o




const winPatterns = [
    [0, 1, 2],
    [0, 3, 6,],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};


boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("box was clicked");

        if (turnO) { // turn of player O
            btn.innerText = "O"
            turnO = false;
        } else { // turn of player X
            btn.innerText = "X"
            turnO = true;
        }

        btn.disabled = true;

        checkWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations  winner is ${winner} !`;
    msgContainer.classList.remove("hide");
    disableBoxes();


};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                console.log("winner", pos1value);
                showWinner(pos1value);
            }
        }

    }

};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);