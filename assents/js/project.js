fetch("./assents/data/data.json") // Corrected path to the JSON file
  .then(response => {
    return response.json();
  })
  .then(data => {
    const projectsList = document.getElementById('projects');
    data.projects.forEach(project => {
      const listItem = document.createElement('div');
      listItem.classList.add('card');
      listItem.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <p class="card-text">${project.description}</p>
        <p class="card-text">Completed ${project.completed? "Yes" : "No"}</p>
        <a href="#" class="btn btn-warning">Not Aviable</a>
        </div>
      `;
      projectsList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching or parsing data:', error));
