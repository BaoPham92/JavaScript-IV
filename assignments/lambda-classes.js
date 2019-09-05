// CODE here for your Lambda Classes

class Person {
    constructor(param) {
        // New bindings
        this.name = param.name;
        this.age = param.age;
        this.location = param.location;
    }

    // Methods
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}` ;
    }
}

const onePerson = new Person({
    name: "Thai",
    age: "32",
    location: "Portland, Oregon"
});

const twoPerson = new Person({
    name: "Kuza",
    age: "26",
    location: "Germantown, Maryland"
});

class Instructor extends Person {
    constructor(param) {
        super(param)
        // New bindings
        this.specialty = param.specialty;
        this.favLanguage = param.favLanguage;
        this.catchPhrase = param.catchPhrase;
    }

    // Methods
    grad(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };

    demo(subject) {
        return `Today we are learning about ${subject}`;
    };
}

const oneInstructor = new Instructor({
    name: "Kuza",
    age: 42,
    location: "Gtown, PA",
    specialty: "Javascript",
    favLanguage: "Solidity",
    catchPhrase: "I am going to rule the world with blockchain!",
})

const twoInstructor = new Instructor({
    name: "Cuza",
    age: 22,
    location: "Gtown, PA",
    specialty: "Solidity",
    favLanguage: "Go",
    catchPhrase: "Noobs don't know about that true governance life.",
})

class Student extends Person {
    constructor(param) {
        super(param)
        // New bindings
        this.previousBackground = param.previousBackground;
        this.className = param.className;
        this.favSubjects = param.favSubjects;
    }

    // Methods
    listsSubjects() {
        for (let index of this.favSubjects) {
            console.log(`${index}`);
        }
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

const oneStudent = new Student({
    name: "Kuza",
    age: 42,
    location: "Gtown, PA",
    previousBackground: "General Assembly & Udacity",
    className: "Web Development Immersive & Front End Web Development.",
    favSubjects: ["Blockchain", "Machine Learning"]
})

const twoStudent = new Student({
  name: "Cuza",
  age: 22,
  location: "Gtown, PA",
  previousBackground: "General Assembly, Udacity & Lambda",
  className: "World Governance Development",
  favSubjects: ["Blockchain", "Computer Science"]
});

class ProjectManagers extends Instructor {
    constructor(param) {
        super(param)
        // New bindings
        this.gradClassName = param.gradClassName;
        this.favInstructor = param.favInstructor;
    }

    // Methods
    standup(channel) {
        return `${this.name} announces to ${channel}`;
    }

    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
const onePM = new ProjectManagers({
    name: "Kuza",
    age: 42,
    location: "Gtown, PA",
    specialty: "Javascript",
    favLanguage: "Solidity",
    catchPhrase: "I am going to rule the world with blockchain!",
    gradClassName: "Web22",
    favInstructor: "Bao"
})

const twoPM = new ProjectManagers({
    name: "Cuza",
    age: 22,
    location: "Gtown, PA",
    specialty: "Solidity",
    favLanguage: "Go",
    catchPhrase: "Noobs don't know about that true governance life.",
    gradClassName: "Web23",
    favInstructor: "Reed"
})

// Logging Objects
console.log(
    onePerson,
    oneStudent,
    oneInstructor,
    onePM
)

console.log(
    twoPerson,
    twoStudent,
    twoInstructor,
    twoPM
)

// Testing Methods
console.log(onePerson.speak());

console.log(oneInstructor.demo("BLOCKCHAIN"));
console.log(oneInstructor.grad(oneStudent, "BLOCKCHAIN"));

oneStudent.listsSubjects()
console.log(oneStudent.sprintChallenge())
console.log(oneStudent.PRAssignment())

console.log(onePM.standup("Blockchain"))
console.log(onePM.debugCode(twoStudent ,"Blockchain"))