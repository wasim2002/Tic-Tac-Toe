const boxes = document.querySelectorAll(".box")

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
let now = true
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (now == true) {
            box.innerHTML = "X"
            now = false
        } else {
            box.innerHTML = "O"
            now = true
        }
        box.disabled = true;
    })
})