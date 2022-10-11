console.log('Start')
console.log('Start-2')

function fn() {
  console.log("fn")
}

window.setTimeout(() => {
  console.log("Start-3")
}, 2000)

setTimeout(fn,2300)


console.log('End')