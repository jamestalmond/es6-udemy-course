{
    let call = () => {
        let secret = 'es6 rocks';
        let reveal = () => {
            console.log(secret);
        };
        return reveal;
    };

    let unveil = call();
    unveil();
}

{
    // function factories

    const addSuffix = (x) => {
        const concat = (y) => {
            return y + x;
        };
        return concat;
    };

    let add_ness = addSuffix('ness');
    console.log(add_ness);
    let h = add_ness('happi');
    console.log(h);
}

{

    const product = x => y => y * x;

    let mult5 = product(5);
    console.log(mult5(3));
    let double = product(2);
    console.log(double(9));
}

{
    // challenge

    // TODO
    // return an inner function with one parameter, y;
    // the inner function returns x + y;

    // const addFactory = (x) => {
    //     return (y) => {
    //         return x + y;
    //     };
    // };

    const addFactory = x => y => x + y;

    const add50 = addFactory(50);
    const add30 = addFactory(30);
}

{
    // private methods

    const budget = () => {
        let balance = 0;
        let changeBal = (val) => {
            return balance += val;
        };

        const deposit = (deposit) => changeBal(deposit);
        const withdraw = (deposit) => changeBal(-deposit)
        const check = () => balance;

        return {
            deposit,
            withdraw,
            check
        };
    };

    let wallet = budget();

    wallet.deposit(30);
    wallet.withdraw(20);

    console.log(wallet);
    console.log(wallet.check());
    console.log(wallet.balance);

    // module pattern
}