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
  head.style.filter = "invert(0%)"
}

//   .then((json) => console.log(json))
