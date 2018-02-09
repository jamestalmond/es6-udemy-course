{
    let a = new Map();
    let key_1 = 'string key';
    let key_2 = {
        a: 'key'
    };
    let key_3 = function () {};

    a.set(key_1, 'return value for a string key');
    a.set(key_2, 'return value for an object key');
    a.set(key_3, 'return value for a function key');
    console.log(a);
}

{
    let numArr = [
        [1, 'one'],
        [2, 'two'],
        [3, 'three']
    ];
    let valMap = new Map(numArr);

    for (let [key, value] of valMap.entries()) {
        console.log(`${key} points to ${value}`);
    }
}

{
    // challenge

    let string = 'supercalifragilisticexpialidocious';

    const countLetter = (word, orig_letter) => {
        // TODO Create a map called 'lettersMap'
        let lettersMap = new Map();

        for (let i = 0; i < word.length; i++) {
            let value = word[i];

            if (!lettersMap.has(value)) {
                // TODO set the letter in the map to 1
                lettersMap.set(value, 1);
            } else {
                // TODO update the value of letter in lettersMap to its value + 1
                lettersMap.set(value, lettersMap.get(value) + 1);
            }
        }
        return lettersMap.get(orig_letter);
    };

    let a_count = countLetter(string, 'a');
    let x_count = countLetter(string, 'x');
}