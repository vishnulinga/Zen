var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pet = /** @class */ (function () {
    function Pet(name, type, color, age, breed, history, location) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.age = age;
        this.breed = breed;
        this.history = history;
        this.location = location;
    }
    return Pet;
}());
var Availability = /** @class */ (function () {
    function Availability(pets) {
        if (pets === void 0) { pets = []; }
        this.pets = pets;
    }
    Availability.prototype.insertPet = function (pet) {
        this.pets.push(pet);
    };
    Availability.prototype.availablePets = function () {
        return this.pets;
    };
    Availability.prototype.removePet = function (name) {
        for (var i = 0; i < this.pets.length; i++) {
            if (this.pets[i].name == name) {
                this.pets.splice(i, 1);
            }
        }
    };
    Availability.prototype.count = function () {
        var dog = 0, cat = 0, fish = 0;
        for (var i = 0; i < this.pets.length; i++) {
            if (this.pets[i].type == "dog") {
                dog++;
            }
            else if (this.pets[i].type == "cat") {
                cat++;
            }
            else {
                fish++;
            }
        }
        return { Dog: dog, Cat: cat, fish: fish };
    };
    return Availability;
}());
var requestPet = /** @class */ (function (_super) {
    __extends(requestPet, _super);
    function requestPet() {
        return _super.call(this) || this;
    }
    ;
    requestPet.prototype.storeEnquires = function (query) {
        this.queries.push(query);
    };
    return requestPet;
}(Availability));
var myPet1 = new Pet("tommy", "dog", "brown", 4, "labrador", "adopted", "Mumbai");
var myPet2 = new Pet("hero", "dog", "black", 5, "indian", "adopted", "KGF");
var myPet3 = new Pet("pussy", "cat", "black", 5, "indian", "adopted", "KGF");
var myPet4 = new Pet("blacky", "cat", "black", 5, "indian", "adopted", "KGF");
var myPet5 = new Pet("golden", "fish", "blue", 5, "indian", "adopted", "KGF");
var myPet6 = new Pet("nimmo", "fish", "golden", 5, "indian", "adopted", "KGF");
var petshop = new Availability();
petshop.insertPet(myPet1);
petshop.insertPet(myPet2);
petshop.insertPet(myPet3);
petshop.insertPet(myPet4);
petshop.insertPet(myPet5);
petshop.insertPet(myPet6);
console.log(petshop.availablePets());
console.log(petshop.count());
