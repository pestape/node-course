const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is my error!')
        resolve([1, 2, 3])
    }, 20000);
})

doWorkPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})