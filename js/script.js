fetch("./work.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    appendDataWork(data)
  })

fetch("./edu.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (edu) {
    appendDataEdu(edu)
  })

function appendDataWork(data) {
  var ele = document.querySelector(".work")
  for (var i = 0; i < data.length; i++) {
    var h4 = document.createElement("h4")
    var h5 = document.createElement("h5")
    var p = document.createElement("p")
    h4.innerHTML = data[i].employer + " - " + data[i].workplace
    h5.innerHTML = data[i].startdate + " - " + data[i].enddate
    p.innerHTML = data[i].description
    ele.appendChild(h4)
    ele.appendChild(h5)
    ele.appendChild(p)
  }
}
function appendDataEdu(data) {
  var ele = document.querySelector(".edu")
  for (var i = 0; i < data.length; i++) {
    var h4 = document.createElement("h4")
    var h5 = document.createElement("h5")
    var p = document.createElement("p")
    h4.innerHTML = data[i].school + " - " + data[i].course
    h5.innerHTML = data[i].startdate + " - " + data[i].enddate
    p.innerHTML = data[i].description
    ele.appendChild(h4)
    ele.appendChild(h5)
    ele.appendChild(p)
  }
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
    if (event.key == "r" && ele.innerText == "") {
      ele.innerText += event.key
    }
    if (event.key == "i" && ele.innerText == "R") {
      ele.innerText += event.key
    }
    if (event.key == "c" && ele.innerText == "RI") {
      ele.innerText += event.key
    }
    if (event.key == "k" && ele.innerText == "RIC") {
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
  }
})
