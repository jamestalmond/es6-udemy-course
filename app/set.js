{
    let a = new Set();

    a.add(5);
    a.add(43);
    a.add('Poo');
    a.add({
        x: 50,
        y: 200
    });

    console.log(a.has(5));
}

{
    let numbers = [5, 7, 8, 13, 17];
    let numSet = new Set(numbers);

    for (let element of numSet.values()) {
        console.log(element);
    }
}

{
    let chars = 'tyuatroiurmoiruotnerwyuityrionceiowtnweryncituow';
    let chars_arr = chars.split('');
    let chars_set = new Set(chars_arr);

    console.log(chars_set);
}

{
    // challenge

    const contains = (word, letter) => {
        let letters = word.split(''); // converts string into an array

        // TODO create a set with the above 'letters' array
        let letters_set = new Set(letters); // converts array into a Set

        // TODO return whether the set has the 'letter'
        if (letters_set.has(letter)) {
            return true;
        } else {
            return false;
        }
    };

    let true_check = contains('west', 'e');
    let false_check = contains('north', 'e');
}