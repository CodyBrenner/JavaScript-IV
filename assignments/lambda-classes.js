// CODE here for your Lambda Classes
// PERSON CLASS
class Person {
    constructor(personObj){
        this.name = personObj.name;
        this.location = personObj.location;
        this.age = personObj.age;
     
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


// INSTRUCTOR CLASS
class Instructor extends Person{
    constructor(instrctorObj){
        super(instrctorObj);
        this.specialty = instrctorObj.specialty;
        this.favLanguage = instrctorObj.favLanguage;
        this.catchPhrase = instrctorObj.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject} `);
    }
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}
// STUDENT CLASS
class Students extends Person{
    constructor(studentObj){
        super(studentObj);
        this.previousBackground = studentObj.previousBackground;
        this.className = studentObj.className;
        this.favSubjects = studentObj.favSubjects;
    }

        listsSubjects(favSubjects){
            this.favSubjects.forEach((subjectListed) => {
                console.log(subjectListed);
            });
        }

    
        PRAssignment(student, subject){
            console.log(`${student.name} has submitted a PR for ${subject.name}`);
        }
        sprintChallenge(student, subject){
            console.log(`${student.name} has begun spring challenge on ${subject.name}`);
        }
}

// PROJECT MANAGER CLASS 
class ProjectManager extends Instructor{
    constructor(managerObj){
        super(managerObj);
            this.gradClassName = managerObj.gradClassName;
            this.favInstructor = managerObj.favInstructor;
    }
    standUp(slack){
     console.log (`${this.name} announces to ${this}, @channel standy times!`);
    }
  debugsCode(student, subject){  
    console.log(`${this.name} debugs ${student.name}'s code on ${subject.name}`);
    }
}

const person = new Person({
    'name': 'Person Name',
    'location': 'New York',
})

const instructor = new Instructor({
    'name': 'instructor name',
});

const student = new Students({
    'name': 'Students Name',
    
    'favSubjects': ['JS', 'REACT', 'HTML']
})
 const projectManager = new ProjectManager({
    'name': 'Manager Name',

   
})
const functionsClass = {
    'name': 'Functions',
  
}


console.log(person.speak(student, location))
console.log(projectManager.debugsCode(student, functionsClass));
console.log(student.PRAssignment(student, functionsClass));
// console.log(projectManager.standUp(student, slack));
student.listsSubjects();


