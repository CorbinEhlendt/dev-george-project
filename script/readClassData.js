fetch('https://CorbinEhlendt.github.io/dev-george-project/data/classData.json')
  
.then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
  })
  
  .then(data => { 
     displayClassData(data.classData);
    //  console.log(data.classData);
  })

  .catch(error => {
      // Handle errors
      console.error('Fetch Error :-S', error);
  }); 

  function displayClassData(classData) {
   
    for (const log of classData) {
        console.log(`class: ${log.class}`);
        console.log(`professor: ${log.professor}`);
        

        document.getElementById('dataSpot').innerHTML += `<li class="list-group-item"><strong>${log.class}:</strong> ${log.professor}</li>`; 
    }
}

fetch('https://CorbinEhlendt.github.io/dev-george-project/data/classData.json')
  
.then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
  })
  
  .then(data => { 
    displayClassData(data.classData);
    //   console.log(data.classData);
  })

  .catch(error => {
      // Handle errors
      console.error('Fetch Error :-S', error);
  }); 

  function displayClassData(classData) {
   
    for (const log of classData) {
        console.log(`class: ${log.class}`);
        console.log(`professor: ${log.professor}`);
        

        document.getElementById('dataSpot').innerHTML += `<li class="list-group-item"><strong>Class:</strong> ${log.class} - <strong>Professor:</strong> ${log.professor}</li>`; 
    }
}

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
        `;

        
        listItem.querySelector('.edit-btn').addEventListener('click', () => {
            toggleEditMode(log, listItem, index, classData);
        });

        dataSpot.appendChild(listItem);
    });
}

function toggleEditMode(log, listItem, index, classData) {
    const classSpan = listItem.querySelector('.class-name');
    const professorSpan = listItem.querySelector('.professor-name');

    
    classSpan.innerHTML = `<input type="text" value="${log.class}" class="form-control form-control-sm">`;
    professorSpan.innerHTML = `<input type="text" value="${log.professor}" class="form-control form-control-sm">`;

    
    const editBtn = listItem.querySelector('.edit-btn');
    editBtn.textContent = 'Save';
    editBtn.className = 'btn btn-success btn-sm save-btn';

    
    editBtn.addEventListener('click', () => {
        saveEditedData(log, classSpan, professorSpan, editBtn, listItem, index, classData);
    });
}

function saveEditedData(log, classSpan, professorSpan, editBtn, listItem, index, classData) {
    const newClass = classSpan.querySelector('input').value.trim();
    const newProfessor = professorSpan.querySelector('input').value.trim();
 
    log.class = newClass;
    log.professor = newProfessor;

    
    classSpan.textContent = newClass;
    professorSpan.textContent = newProfessor;

    // Restore Edit button
    editBtn.textContent = 'Edit';
    editBtn.className = 'btn btn-warning btn-sm edit-btn';

    // Reattach Edit functionality
    editBtn.addEventListener('click', () => {
        toggleEditMode(log, listItem, index, classData);
    });

   
    classData[index] = log;

}
