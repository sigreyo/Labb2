window.onmouseover = function () {
  document.getElementById("flipCol").addEventListener("click", flipCol)
  document.getElementById("flipBack").addEventListener("click", flipBack)
}

function flipCol() {
  const head = document.querySelector(".sidebar")
  head.style.filter = "invert(100%)"
}
function flipBack() {
  const head = document.querySelector(".sidebar")
  head.style.removeProperty("filter")
}

document.addEventListener("keydown", (event) => {
  var ele = document.getElementById("easter")
  const over = document.getElementById("overlay")
  var arr = ["r", "i", "c", "k"]

  if (arr.includes(event.key)) {
    over.style.display = "block"
    if (event.key === "r" && ele.innerText === "") {
      ele.innerText += event.key
    }
    if (event.key === "i" && ele.innerText === "R") {
      ele.innerText += event.key
    }
    if (event.key === "c" && ele.innerText === "RI") {
      ele.innerText += event.key
    }
    if (event.key === "k" && ele.innerText === "RIC") {
      ele.innerText += event.key
      over.style.transition = "opacity 3s"
      over.style.opacity = 1
      setTimeout(() => {
        window.open(
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
          "_blank"
        )
      }, 3000)
    }
  } else {
    reset()
  }

  function reset() {
    ele.innerText = ""
    over.style.display = "none"
  }
})
