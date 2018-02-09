{
    // asynchronous programming and promises

    let p = new Promise((resolve, reject) => {
        resolve('Resolved promised data');
    });

    p.then(response => console.log(response));
}

{
    let p = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Resolved promised data'), 3000);
    });

    p.then(response => console.log(response))
        .catch(error => console.log(error));

    console.log('after promise consumption');
}