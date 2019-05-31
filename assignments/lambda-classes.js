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
         favSubjects.forEach(function(listed){
                console.log(listed);
            });
        }

    
        PRAssignment(student, subject){
            console.log(`${student} has submitted a PR for ${subject}`);
        }
        sprintChallenge(student, subject){
            console.log(`${student} has begun spring challenge on ${subject}`);
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
     console.log (`${this.name} announces to ${slack}, @channel standy times!`);
    }
    debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject.name}`);
    }
}



const instructor = new Instructor({
    'name': 'instructor name',
});

const student = new Students({
    'name': 'Students Name',
    'favSubjects': ['listSubjects', 'METHOD', 'CALLED']
})
 const projectManager = new ProjectManager({
    'name': 'Manager Name'
   
})
const functionsClass = {
    'name': 'Functions'
}
console.log(projectManager.debugsCode(student, functionsClass));


