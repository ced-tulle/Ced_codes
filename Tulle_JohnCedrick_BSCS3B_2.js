class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    makeSound() {
        return "Some animal sound";
    }

    describe() {
        return this.name + " is " + this.age + " years old.";
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    makeSound() {
        return this.name + " says: Woof!";
    }
}

class Cat extends Animal {
    constructor(name, age, indoor) {
        super(name, age);
        this.indoor = indoor;
    }

    makeSound() {
        return this.name + " says: Meow!";
    }
}

class Shelter {
    constructor(name) {
        this.name = name;
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    countAnimals() {
        return this.animals.length;
    }
}

var shelterName = "Pet House";
var totalSounds = 0;
var checkedCount = 0;

var petFood = {
    type: "kibble",
    amount: 2
};

var vetInfo = {
    name: "Dr. Tulle",
    phone: "09706883613"
};


var dog1 = new Dog("Blacky", 3, "Labrador");
var dog2 = new Dog("Whity", 7, "Beagle");
var cat1 = new Cat("Jaguar", 2, true);

var shelter = new Shelter(shelterName);


var animalList = [dog1, dog2, cat1];

var foodTypes = ["kibble", "wet food", "treats"];

var shelterTasks = ["feed", "clean", "walk"];


console.log("Today's tasks: " + shelterTasks.join(", "));


for (var i = 0; i < animalList.length; i++) {
    shelter.addAnimal(animalList[i]);
}


if (shelter.countAnimals() > 0) {
    console.log(shelterName + " has animals ready for adoption!");
} else {
    console.log(shelterName + " is empty right now.");
}


if (dog1.age > 5) {
    console.log(dog1.getName() + " is a senior dog.");
} else {
    console.log(dog1.getName() + " is still young.");
}

if (cat1.indoor) {
    console.log(cat1.getName() + " is an indoor cat.");
} else {
    console.log(cat1.getName() + " likes to go outside.");
}

for (var j = 0; j < foodTypes.length; j++) {
    console.log("Food option " + (j + 1) + ": " + foodTypes[j]);
}


var index = 0;

while (index < animalList.length) {
    console.log(animalList[index].makeSound());
    totalSounds++;
    index++;
}

console.log("--- " + shelterName + " Summary ---");
console.log("Total animals: " + shelter.countAnimals());
console.log("Total sounds made: " + totalSounds);
console.log("Vet on call: " + vetInfo.name + ", phone: " + vetInfo.phone);
console.log("Food we have: " + petFood.amount + " bags of " + petFood.type);

for (var k = 0; k < animalList.length; k++) {
    console.log(animalList[k].describe());
    checkedCount++;
}

console.log("Checked " + checkedCount + " animals in total.");