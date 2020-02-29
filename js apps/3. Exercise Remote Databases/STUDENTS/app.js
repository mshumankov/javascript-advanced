(function loadInfo() {
    const username = 'test';
    const password = 'test';
    const url = 'https://baas.kinvey.com/appdata/kid_rytf0QaaB/students'

    const headers = {
        credentials: 'include',
        Authorization: 'Basic ' + btoa(`${username}:${password}`),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(url, headers)
        .then(handler)
        .then(data => {

            const sorted = data.sort((a, b) => a.id - b.id);
            const studentFragment = document.createDocumentFragment();

            sorted.forEach(student => {
                const trStudent = document.createElement('tr');
                const tdID = document.createElement('td');
                const tdFirstName = document.createElement('td');
                const tdLastName = document.createElement('td');
                const tdFacultyNumber = document.createElement('td');
                const tdGrade = document.createElement('td');

                tdID.textContent = student.id;
                tdFirstName.textContent = student.firstName;
                tdLastName.textContent = student.lastName;
                tdFacultyNumber.textContent = student.facultNumber;
                tdGrade.textContent = student.grade;

                trStudent.appendChild(tdID);
                trStudent.appendChild(tdFirstName);
                trStudent.appendChild(tdLastName);
                trStudent.appendChild(tdFacultyNumber);
                trStudent.appendChild(tdGrade);

                studentFragment.appendChild(trStudent);
            });

            const tableInfo = document.querySelector('table tbody');
            tableInfo.appendChild(studentFragment);
        })
        .catch(err => console.log(err))

    function handler(res) {
        if (res.status >= 400) {
            throw new Error(res.status)
        }

        return res.json();
    }

})();