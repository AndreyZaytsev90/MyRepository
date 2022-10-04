function myClick() {
  //console.log("Hello")
  let text = document.querySelector(".i-1").value
  console.log(text)
  document.querySelector(".out").innerHTML += text
}

//document.getElementById("1").onclick = myClick
document.querySelector("button").addEventListener("click", myClick)

