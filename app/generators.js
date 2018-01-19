{
    // generators
    // generators can interupt the control flow of functions

    function* letterMaker() {
        yield 'a';
        yield 'b';
        yield 'c';
    }

    let letterGen = letterMaker();
    console.log(letterGen.next());
    console.log(letterGen.next());
    console.log(letterGen.next());
    console.log(letterGen.next());
}

{
    // can be used to create IDs for users one at a time, ensuring that they're unique

    function* countMaker() {
        let count = 0;
        while (count < 4) {
            yield count += 1;
        }
    }

    let countGen = countMaker();
    console.log(countGen.next().value);
    console.log(countGen.next().value);
    console.log(countGen.next().value);
    console.log(countGen.next().value);
}

{
    // challenge

    function* letterMaker() {
        // TODO add yields
        yield 'x';
        yield 'y';
        yield 'z';
    }

    let letterGen = letterMaker();

    // console.log(letterGen.next().value);
    // console.log(letterGen.next().value);
    // console.log(letterGen.next().value);
    // console.log(letterGen.next().value);
}

{
    // controlled flow

    function* evens() {
        let count = 0;
        while (true) {
            count += 2;
            let reset = yield count;
            if (reset) {
                count = 0;
            }
        }
    }

    let sequence = evens();
    console.log(sequence.next().value);
    console.log(sequence.next().value);
    console.log(sequence.next().value);
    console.log(sequence.next(true).value);
    console.log(sequence.next().value);
}

{
    // generators vs iterators

    const arrayIterator = (array) => {
        let index = 0;
        return {
            next: () => {
                if (index < array.length) {
                    let next = array[index];
                    index += 1;
                    return next;
                }
            }
        };
    };

    let it = arrayIterator([1, 2, 3]);
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
}

{
    // generators vs iterators

    function* arrayIterator() {
        yield* arguments;
    }

    let it = arrayIterator(1, 2, 3);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
}