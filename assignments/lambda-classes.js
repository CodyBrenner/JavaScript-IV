// CODE here for your Lambda Classes
// PERSON CLASS
class Person {
    constructor(name, location, age){
        this.name = name;
        this.location = location;
        this.age = age;
     
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


// INSTRUCTOR CLASS
class Instructor extends Person{
    constructor(specialty, favLanguage, catchPhrase){
        super();
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
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
    constructor(previousBackground,className,favSubjects ){
        super();
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

        listsSubjects(favSubjects){
         this.favSubjects.forEach(function(listed){
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
    constructor(gradClassName, favInstructor){
        super();
            this.gradClassName = gradClassName;
            this.favInstructor = favInstructor;
    }
    standUp(slack){
     console.log (`${this.name} announces to ${slack}, @channel standy times!`);
    }
    debugsCode(student, subject){
console.log(`${this.name} debugs ${student.name}'s code on ${subject.name}`);
    }
}


// Person Test



