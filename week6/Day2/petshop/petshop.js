var available = {};
var enquiries;
var pets = /** @class */ (function () {
    function pets(animal, name, age, vaccinated) {
        this.animal = animal;
        this.name = name;
        this.age = age;
        this.vaccinated = vaccinated;
        if (this.animal in available)
            available[this.animal] = available[this.animal] + 1;
        else
            available[this.animal] = 1;
    }
    return pets;
}());
var request = /** @class */ (function () {
    function request(arr) {
        enquiries.push(arr);
    }
    request.prototype.insert = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] in available === false)
                return "not available";
        }
        return "available";
    };
    request.prototype.find = function () {
        var str = "";
        for (var key in available)
            str += key + "-" + available[key] + " ";
        return str;
    };
    return request;
}());
var dog1 = new pets('dog', 'snoopy', 1, true);
var dog2 = new pets('dog', 'scooby', 2, true);
var cat = new pets('cat', 'whisky', 2, true);
var parrot = new pets('parrot', 'chirpy', 1, false);
var enquiry1 = new request(['dog', 'cat', 'parrot']);
// console.log(enquiry1.insert(['dog','cat','parrot']))
console.log(enquiry1.find());
