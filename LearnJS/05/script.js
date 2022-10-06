let arr = [1,2,3,4]

let sum = 0
for (let i = 0; i < arr.length ; i++) {
  sum = sum + arr[i]
}
console.log(sum)

// prev - вычисляемое значение
// prev = arr[0] !!
//

let b = arr.reduce((prev, item) => {
  return prev + item
}, 0)

console.log(b)


arr = [2, 5, 6, 23, 76, 234,543]
let max = 0
for (let i = 0; i < arr.length; i++) {
  if(arr[i] > max){
    max = arr[i]
  }
}

console.log(max)

let c = arr.reduce((prev, item) => {
  return prev > max ? prev : max
})

console.log(c)

//индекс максимального элемента
max = arr[0]
let index = 0
for (let i = 0; i < arr.length; i++) {
  if(arr[i] > max){
    max = arr[i]
    index = i
  }
}

console.log(index)


let d = arr.reduce((prev, index, item) => {
  if (item > prev[1]) {
    return [index, item]
  } else {
    return prev
  }
}, [0, arr[0]])

console.log(d)


const data = [[1, 2, 3], [3, 4, 5], [5, 6, 7]]

const flat = data.reduce((prev, item) => {
  return prev.concat(item)
}, [])

console.log(flat)