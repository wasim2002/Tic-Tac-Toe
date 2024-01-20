const boxes = document.querySelectorAll(".box")
const PlayerXScore = document.querySelector(".pX .score")
// const tieScore = document.querySelector(".tie .score")
const PlayerOScore = document.querySelector(".pO .score")
const resetBtn = document.querySelector(".reset")
const newgameBtn = document.querySelector(".newGame")

const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let turn = "x"
boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turn == "x") {
            box.innerHTML = "X"
            turn = "o"
        } else {
            box.innerHTML = "O"
            turn = "x"
        }
        box.disabled = true
        checkWinner()
    })
})
const checkWinner = () => {
    winPattern.forEach((Pattern) => {
        let val1 = boxes[Pattern[0]].innerHTML
        let val2 = boxes[Pattern[1]].innerHTML
        let val3 = boxes[Pattern[2]].innerHTML

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                winner(val1)
            }
        }

    })

}
const winner = (winner) => {
    boxes.forEach(box => {
        box.disabled = true
    })
    if (winner == "X") {
        PlayerXScore.innerHTML++
    } else {
        PlayerOScore.innerHTML++
    }
}
const reset = () => {
    boxes.forEach(box => {
        box.innerHTML = ""
        box.disabled = false
    })
}
const newGame=()=>{
    boxes.forEach(box => {
        box.innerHTML = ""
        box.disabled = false
    })
    PlayerXScore.innerHTML="0"
    PlayerOScore.innerHTML="0"
    turn = "x"
}
newgameBtn.addEventListener("click",newGame)
resetBtn.addEventListener("click", reset)
