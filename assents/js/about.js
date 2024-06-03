fetch("./assents/data/data.json") // Corrected path to the JSON file
  .then(response => {
    return response.json();
  })
  .then(data => {
    const BioList = document.getElementById('bio');
    data.bio.forEach(bio => {
      const listItem = document.createElement('div');
      listItem.classList.add('col-md-8', "offset-md-2");
      listItem.innerHTML = `
      <img src="${bio.img}" class="card-img-top" alt="${bio.name}">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${bio.name}</h5>
            <p class="card-text">${bio.description}</p>
         </div>
      </div>
      `;
      BioList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching or parsing data:', error));



