// es8

{
    // keys

    let obj = {
        a: 'one',
        b: 'two',
        c: 'three'
    };
    let keys = Object.keys(obj);

    console.log(keys);
}

{
    // values

    let obj = {
        a: 'one',
        b: 'two',
        c: 'three'
    };
    let values = Object.values(obj);

    console.log(values);
}

{
    // entries => array with keys and values

    let obj = {
        a: 'one',
        b: 'two',
        c: 'three'
    };
    let entries = Object.entries(obj);

    console.log(entries);
}

{
    // entires enhanced for loop

    let obj = {
        a: 'one',
        b: 'two',
        c: 'three'
    };
    let entries = Object.entries(obj);

    for (let entry of entries) {
        console.log(`key: ${entry[0]}, value: ${entry[1]}`);
    }
}

{
    // async + await

    async function async_one() {
        return 'one';
    }

    async function async_two() {
        return 'two';
    }

    async function async_three() {
        const one = await async_one();
        console.log(one);
        const two = await async_two();
        console.log(two);
    }

    async function async_four() {
        const [res_one, res_two] = await Promise.all(
            [async_one(), async_two()]
        );
        console.log(res_one, res_two);
    }

    async_four();
}