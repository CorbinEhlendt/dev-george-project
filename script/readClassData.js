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
