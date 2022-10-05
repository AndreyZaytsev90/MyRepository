function a1() {
  console.log('work a1');
  f2()
}

function f2() {
  console.log('work f2');
  console.trace()
}


a1()


const c = {
  one: 1,
  two: 2,
  3: "hello"
}

console.log(c);
console.table(c)

console.group('task 3')
console.log('work f2');
console.log('work a1');
console.groupEnd()

console.dir(c)