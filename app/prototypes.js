{
    function Wizard(name, house, pet) {
        this.name = name;
        this.house = house;
        this.pet = pet;

        this.greet = () => `I'm ${this.name} from ${this.house}`;
    }

    Wizard.prototype.pet_name;
    Wizard.prototype.info = function () {
        return `I have a ${this.pet} named ${this.pet_name}`;
    };

    let harry = new Wizard('Harry Potter', 'Gryffindor', 'Owl');

    harry.pet_name = 'Hedwig';

    console.log(harry.info());
}

// TODO
// * add a 'color' field to the prototype
// * add a 'bio' method that *returns*:
// A ${this.color} ${this.make} made in ${this.year}.

function Vehicle(make, year) {
    this.make = make;
    this.year = year;
}

Vehicle.prototype.color;
Vehicle.prototype.bio = function () {
    return `A ${this.color} ${this.make} made in ${this.year}.`;
};

let s = new Vehicle('Tesla', 2017);

s.color = 'black';