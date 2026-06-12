const promise = new Promise((resolve, reject) => {
    let a = true;

    if (a) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });