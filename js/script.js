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
  var ele = document.getElementById("work")
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
  var ele = document.getElementById("edu")
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

//   .then((json) => console.log(json))
