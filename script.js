const students = [
    {
        name: "hunza",
        id: "123",
        class: "10th",
        subjects: [
            { subjectName: "Math", marks: 95 },
            { subjectName: "Urdu", marks: 85 },
            { subjectName: "English", marks: 80 }
        ]
    },
    {
        name: "talha",
        id: "124",
        class: "10th",
        subjects: [
            { subjectName: "Math", marks: 90 },
            { subjectName: "Urdu", marks: 80 },
            { subjectName: "English", marks: 70 }
        ]
    },
    {
        name: "sharjeena",
        id: "126",
        class: "10th",
        subjects: [
            { subjectName: "Math", marks: 89 },
            { subjectName: "Urdu", marks: 69 },
            { subjectName: "English", marks: 82 }
        ]
    },
    {
        name: "mustufa",
        id: "127",
        class: "10th",
        subjects: [
            { subjectName: "Math", marks: 89 },
            { subjectName: "Urdu", marks: 69 },
            { subjectName: "English", marks: 82 }
        ]
    },
    {
        name: "faraz",
        id: "128",
        class: "10th",
        subjects: [
            { subjectName: "Math", marks: 89 },
            { subjectName: "Urdu", marks: 69 },
            { subjectName: "English", marks: 82 }
        ]
    },
    {
        name: "roma",
        id: "129",
        class: "10th",
        subjects: [
            { subjectName: "Math", marks: 89 },
            { subjectName: "Urdu", marks: 69 },
            { subjectName: "English", marks: 82 }
        ]
    }
];

function totalMarks(subjects) {
    let total = 0;
    for (let i = 0; i < subjects.length; i++) {
        total += subjects[i].marks;
    }
    return total;
}

function percentage(subjects) {
    return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}

function grade(percentage) {
    if (percentage >= 80) return "A+";
    else if (percentage >= 70) return "A";
    else if (percentage >= 60) return "B";
    else if (percentage >= 50) return "C";
    else return "Fail";
}



function renderPrompt(){
    const inputName = prompt("Please input your name in small letters:");
    const inputId = prompt("Please input your ID:");
    let student = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === inputName && students[i].id === inputId) {
            student = students[i];
            break;
        }
    }
    
    if (student) {
        const studentPercentage = percentage(student.subjects);
        document.getElementById('result').innerHTML = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class || 'N/A'}</p>
            <p><strong>Total:</strong> ${totalMarks(student.subjects)}</p>
            <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
            <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p>Student not found. Please check the name and ID.</p>
            <button class="btn" onclick=tryagain()>Try Again</button>
        `;
    }
}
renderPrompt();

function tryagain() {
    renderPrompt()
}








