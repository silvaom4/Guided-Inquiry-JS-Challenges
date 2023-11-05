// --- Version 1 ---

// --- CHECK CONSOLE FOR OUTPUT ---

function myInfo() {

    let PII = {
        name: 'Oscar',
        ssn: 123456789,
        car: 'audi',
        age: 99
    }

    function getName() {
        return PII.name
    }
    function getSsn() {
        return PII.ssn
    }
    function getCar() {
        return PII.car
    }
    function getAge() {
        return PII.age
    }



    return {
        getName,
        getSsn,
        getCar,
        getAge
    }
    

}


let savedInfo = myInfo()

console.log(savedInfo.name) // output: Undefined
console.log(savedInfo.ssn)
console.log(savedInfo.car)
console.log(savedInfo.age)


console.log(savedInfo.getName())//output: Oscar
console.log(savedInfo.getSsn())
console.log(savedInfo.getCar())
console.log(savedInfo.getAge())



// ---- Version 2 ---


console.log('Version 2 starts here')

class PersonalInfo {
    #name;
    #car
    #ssn;
    #age


    constructor(name, car, ssn, age)  {

        this.#name = name;
        this.#car = car;
        this.#ssn = ssn
        this.#age = age
    }


    getName() {
       return console.log(this.#name);
    }
    getCar() {
        return console.log(this.#car);
     }
     getSsn() {
        return console.log(this.#ssn);
     }
     getAge() {
        return console.log(this.#age);
     }



}

let myInfo2 = new PersonalInfo('oscar', 'fiat', 336124445, 99)

console.log(myInfo2.name, myInfo2.car, myInfo2.ssn, myInfo2.age)


myInfo2.getName()
myInfo2.getCar()
myInfo2.getSsn()
myInfo2.getAge()


