// student-management-system script.js

// Notification system function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'notification';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Email validation function
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class StudentManager {
    constructor() {
        this.students = this.loadStudents();
    }

    addStudent(name, email) {
        if (!isValidEmail(email)) {
            showNotification('Invalid email format.');
            return;
        }

        const student = new Student(name, email);
        this.students.push(student);
        this.saveStudents();
        showNotification('Student added successfully!');
    }

    deleteStudent(email) {
        this.students = this.students.filter(student => student.email !== email);
        this.saveStudents();
        showNotification('Student deleted successfully!');
    }

    searchStudent(email) {
        return this.students.find(student => student.email === email);
    }

    loadStudents() {
        const studentsJSON = localStorage.getItem('students');
        return studentsJSON ? JSON.parse(studentsJSON) : [];
    }

    saveStudents() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }
}

// Example usage
const studentManager = new StudentManager();

// Add some students
studentManager.addStudent('John Doe', 'john@example.com');
studentManager.addStudent('Jane Doe', 'jane@example.com');

// Delete a student
studentManager.deleteStudent('john@example.com');

// Search for a student
const searchedStudent = studentManager.searchStudent('jane@example.com');
console.log(searchedStudent);
