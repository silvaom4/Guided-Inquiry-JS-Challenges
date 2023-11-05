
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise() {
        console.log(`${this.name} does exercise`)
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }

}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name,job, age)
        this.languages = languages
        this.busy = true;
    }

    completeTask() {
        return this.busy = false
    }

    acceptNewTask() {
        return this.busy = true 
    }
    offerNewTask(busy) {
        if (busy === true) {
            console.log (`${this.name} can't accept any new tasks right`);
        }
        else {
            console.log(`${this.name} would love to take on a new responsibility `)
        }
     }
     learnLanguage(newLanguage) {
        this.languages.push(newLanguage)

     }
     listLanguages() {
        return this.languages

     }
}

// ---- CHECK CONSOLE FOR OUTPUT ----



// for person
let person1 = new Person('Brad', 'Back-End Developer', 99, ['W3','JS','Script'])

person1.exercise()
person1.fetchJob()


// for programmer
let person2 = new Programmer('Chad', 'Java expert', 98, ['CSS','HTML','C++'])
person2.exercise()
person2.fetchJob()
console.log(person2.busy)
console.log(person2.completeTask())
console.log(person2.acceptNewTask())
person2.offerNewTask(true)
person2.offerNewTask(false)

console.log(person2)
person2.learnLanguage('python')
person2.learnLanguage('React')
console.log(person2.listLanguages())

let person3 = new Programmer('Vlad','CSS God', 97, ['LUA', 'SASS','HTML'] )

person3.exercise()
person3.fetchJob()
console.log(person3.busy)
console.log(person3.completeTask())
console.log(person3.acceptNewTask())
person3.offerNewTask(true)
person3.offerNewTask(false)

console.log(person3)

person3.learnLanguage('JSON')
person3.learnLanguage('SQL')
console.log(person3.listLanguages())