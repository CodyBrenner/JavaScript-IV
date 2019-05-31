// CODE here for your Lambda Classes
// PERSON CLASS
class Person {
    constructor(personObj) {
        this.name = personObj.name;
        this.location = personObj.location;
        this.age = personObj.age;

    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


// INSTRUCTOR CLASS
class Instructor extends Person {
    constructor(instrctorObj) {
        super(instrctorObj);
        this.specialty = instrctorObj.specialty;
        this.favLanguage = instrctorObj.favLanguage;
        this.catchPhrase = instrctorObj.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject.name} `);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject.name}`);
    }
    gradeCheck(student, subject){
        console.log(`${student.name} graduated with an ${student.grade} in ${subject.name}`)
    }
}
// STUDENT CLASS
class Students extends Person {
    constructor(studentObj) {
        super(studentObj);
        this.previousBackground = studentObj.previousBackground;
        this.className = studentObj.className;
        this.favSubjects = studentObj.favSubjects;
    }
    listsSubjects(favSubjects) {
        this.favSubjects.forEach((subjectListed) => {
            console.log(subjectListed);
        });
    }


    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject.name}`);
    }
    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun spring challenge on ${subject.name}`);
    }
}

// PROJECT MANAGER CLASS 
class ProjectManager extends Instructor {
    constructor(managerObj) {
        super(managerObj);
        this.gradClassName = managerObj.gradClassName;
        this.favInstructor = managerObj.favInstructor;
    }
    standUp(student, slack) {
        console.log(`${this.name} announces to ${slack.name}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject.name}`);
    }
}

const person = new Person({
    'name': 'Person Name',
    'location': 'New York',
    'favInstructor': 'Instructor Name'
})

const instructor = new Instructor({
    'name': 'instructor name',
    'location': 'New York',
    
 
});

const student = new Students({
    'name': 'Students Name',
    'favSubjects': ['JS', 'REACT', 'HTML'],
    'location': 'New York',
    'favInstructor': 'Instructor Name',
    'grade': '80'
})
const projectManager = new ProjectManager({
    'name': 'Manager Name',
    'location': 'New York',
    'favInstructor': 'Instructor Name',
  

})
const functionsClass = {
    'name': 'Functions',

}
const slack = {
    'name': "WebPt7",
   
}

// WORKS TEST <----
console.log(person.speak(student, location));
console.log(instructor.demo(functionsClass));
console.log(instructor.grade(student, functionsClass));
console.log(projectManager.debugsCode(student, functionsClass));
console.log(student.PRAssignment(student, functionsClass));
student.listsSubjects();
console.log(projectManager.standUp(projectManager, slack));
console.log(instructor.gradeCheck(student, functionsClass));
