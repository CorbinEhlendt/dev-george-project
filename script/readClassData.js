fetch('https://CorbinEhlendt.github.io/dev-george-project/data/classData.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        classData = data.classData; 
        displayClassData(classData);
        initializeAddClassFeature(classData);
    })
    .catch(error => console.error('Fetch Error :-S', error));

// Display Class Data in the DOM
function displayClassData(classData) {
    const dataSpot = document.getElementById('dataSpot');
    dataSpot.innerHTML = '';

    classData.forEach((log, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
            <strong>Class:</strong> <span class="class-name">${log.class}</span> - 
            <strong>Professor:</strong> <span class="professor-name">${log.professor}</span>
            <button class="btn btn-warning btn-sm edit-btn ms-3">Edit</button>
            <button class="btn btn-danger btn-sm delete-btn ms-2">Delete</button>
        `;

        listItem.querySelector('.edit-btn').onclick = () => toggleEditMode(log, listItem, index, classData);
        listItem.querySelector('.delete-btn').onclick = () => showDeleteConfirmation(log, listItem, index, classData);

        dataSpot.appendChild(listItem);
    });

    localStorage.setItem('classData', JSON.stringify(classData)); // Save Data
}

// Toggle Edit Mode
function toggleEditMode(log, listItem, index, classData) {
    const classSpan = listItem.querySelector('.class-name');
    const professorSpan = listItem.querySelector('.professor-name');

    classSpan.innerHTML = `<input type="text" value="${log.class}" class="form-control form-control-sm">`;
    professorSpan.innerHTML = `<input type="text" value="${log.professor}" class="form-control form-control-sm">`;

    const editBtn = listItem.querySelector('.edit-btn');
    editBtn.textContent = 'Save';
    editBtn.className = 'btn btn-success btn-sm save-btn';

    editBtn.onclick = () => saveEditedData(log, classSpan, professorSpan, editBtn, listItem, index, classData);
}

// Save Edited Data
function saveEditedData(log, classSpan, professorSpan, editBtn, listItem, index, classData) {
    const newClass = classSpan.querySelector('input').value.trim();
    const newProfessor = professorSpan.querySelector('input').value.trim();

    if (!newClass || !newProfessor) return alert('Class Name and Professor Name cannot be empty!');

    log.class = newClass;
    log.professor = newProfessor;
    classData[index] = log;

    classSpan.textContent = newClass;
    professorSpan.textContent = newProfessor;

    editBtn.textContent = 'Edit';
    editBtn.className = 'btn btn-warning btn-sm edit-btn';
    editBtn.onclick = () => toggleEditMode(log, listItem, index, classData);

    localStorage.setItem('classData', JSON.stringify(classData)); // Save Updated Data
}

// Show Delete Confirmation
function showDeleteConfirmation(log, listItem, index, classData) {
    const confirmationBox = document.createElement('div');
    confirmationBox.className = 'confirmation-box mt-2';
    confirmationBox.innerHTML = `
        <p>Delete "<strong>${log.class}</strong>"?</p>
        <button class="btn btn-danger btn-sm confirm-delete-btn">Delete</button>
        <button class="btn btn-secondary btn-sm cancel-delete-btn">Cancel</button>
    `;

    listItem.appendChild(confirmationBox);

    confirmationBox.querySelector('.confirm-delete-btn').onclick = () => deleteRecord(index, classData, listItem);
    confirmationBox.querySelector('.cancel-delete-btn').onclick = () => confirmationBox.remove();
}

// Delete Record
function deleteRecord(index, classData, listItem) {
    classData.splice(index, 1);
    listItem.remove();
    localStorage.setItem('classData', JSON.stringify(classData)); 
}

// Add a New Class
function initializeAddClassFeature() {
    const newClassForm = document.getElementById('new-class-form');

    newClassForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newClassName = document.getElementById('new-class-name').value.trim();
        const newProfessorName = document.getElementById('new-professor-name').value.trim();

        if (!newClassName || !newProfessorName) {
            alert('Class Name and Professor Name cannot be empty!');
            return;
        }

        // Create new record
        const newRecord = { class: newClassName, professor: newProfessorName };
        classData.push(newRecord); 

        // Add to DOM dynamically
        addClassToDOM(newRecord, classData.length - 1);

        
    });
}
    

function addClassToDOM(log, index, classData) {
    const dataSpot = document.getElementById('dataSpot');
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerHTML = `
        <strong>Class:</strong> <span class="class-name">${log.class}</span> - 
        <strong>Professor:</strong> <span class="professor-name">${log.professor}</span>
        <button class="btn btn-warning btn-sm edit-btn ms-3">Edit</button>
        <button class="btn btn-danger btn-sm delete-btn ms-2">Delete</button>
    `;

    listItem.querySelector('.edit-btn').onclick = () => toggleEditMode(log, listItem, index, classData);
    listItem.querySelector('.delete-btn').onclick = () => showDeleteConfirmation(log, listItem, index, classData);

    dataSpot.appendChild(listItem);
}

// Function to export data in JSON format
function exportData() {
    console.log('Exporting Data...');
    console.log('Current classData:', classData); 

    const jsonData = JSON.stringify(classData, null, 2);
    console.log('Exported Class Data:', jsonData);
}

// Attach event listener to the export button
document.getElementById('export-data-btn').addEventListener('click', () => {
    exportData(classData);
});