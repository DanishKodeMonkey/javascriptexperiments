/*
A constructor is a special method of a class
It acceps arguments and assigns properties
*/

//Creating a constructor, is a extra step to creating a class
//first, create a class
class Student{
    //inside, create a constructor, with (arguments,arguments,arguments)
    //  and {properties, properties, properties}
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    //properties and methods can also be set OUTSIDE the constructor, but INSIDE the class
    study(){
        console.log(`${this.name} is studying`);
    }
}

//Now create a student, using the format above.

const student1 = new Student("Spongebob", 30, 3.2)
const student2 = new Student("Patrick", 35, 1.5)

//display the values and invoke the method.
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

//display the values and invoke the method.
console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();