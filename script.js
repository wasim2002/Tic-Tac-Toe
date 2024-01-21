const Allbox = document.querySelectorAll(".box")
const PlayerXScore = document.querySelector(".pX .score")
const tieScore = document.querySelector(".tie .score")
const PlayerOScore = document.querySelector(".pO .score")
const resetBtn = document.querySelector(".reset")
const newgameBtn = document.querySelector(".newGame")

let turn = "X";
let arr = Array(9).fill(null);

Allbox.forEach(box => {
    box.addEventListener("click", function () {
        const id = box.id;
        if (arr[id] === null) {
            arr[id] = turn;
            box.innerHTML = turn;
            checkWinner();
            turn = turn === "X" ? "O" : "X";
        }
    })
})

const checkWinner = () => {
    let condition1 = arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2];
    let condition2 = arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5];
    let consition3 = arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8];
    let consition4 = arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6];
    let consition5 = arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7];
    let consition6 = arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8];
    let consition7 = arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8];
    let consition8 = arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6];
    if (condition1 || condition2 || consition3 || consition4 || consition5 || consition6 || consition7 || consition8) {
        arr.fill("")
        showWinner(turn)
    }
    if (!arr.some((e) => e == null) && !arr.some((e) => e == "")) {
        tieScore.innerHTML++
    }
}
const showWinner = (player) => {
    if (player == "X") {
        PlayerXScore.innerHTML++
    }
    if (player == "O") {
        PlayerOScore.innerHTML++
    }
}

const reset = () => {
    arr.fill(null)
    Allbox.forEach(box => {
        box.innerHTML = ""
    })
}
const newGame = () => {
    arr.fill(null)
    turn = "O"
    Allbox.forEach(box => {
        box.innerHTML = ""
    })
    PlayerXScore.innerHTML="0"
    PlayerOScore.innerHTML="0"
    tieScore.innerHTML="0"
}

newgameBtn.addEventListener("click", newGame)
resetBtn.addEventListener("click", reset)
