console.log("Request data...")
/*

setTimeout(() => {
  console.log("Preparing data")

  const backEndData = {
    server: 'aws',
    port: 2000,
    status: 'working'
  }
  setTimeout(() => {
    backEndData.modified = true
    console.log("Data received", backEndData)
  },2000)
}, 2000)*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {

    console.log("Preparing data")

    const backEndData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    }
    resolve(backEndData)
  }, 2000)
})

promise.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)
    }, 2000)
  })
}).then((clientData) => {
  console.log("Data received", clientData)
})