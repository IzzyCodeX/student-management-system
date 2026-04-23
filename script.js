// Student Management System

class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class StudentManager {
    constructor() {
        this.students = this.loadFromLocalStorage();
    }

    addStudent(student) {
        this.students.push(student);
        this.saveToLocalStorage();
    }

    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.saveToLocalStorage();
    }

    searchStudent(id) {
        return this.students.find(student => student.id === id);
    }

    saveToLocalStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    loadFromLocalStorage() {
        const students = localStorage.getItem('students');
        return students ? JSON.parse(students) : [];
    }
}

// Example of using the StudentManager class
const manager = new StudentManager();

// Add a student
manager.addStudent(new Student(1, 'John Doe', 20));

// Delete a student
manager.deleteStudent(1);

// Search for a student
const foundStudent = manager.searchStudent(1);
console.log(foundStudent);