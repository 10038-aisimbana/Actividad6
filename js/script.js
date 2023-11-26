document.addEventListener('DOMContentLoaded', fetchData);

    function fetchData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';

      const dataContainer = document.getElementById('data-container');

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          data.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<br>
              <h3>${user.name}</h3>
              <p>Email: ${user.email}</p>
              <p>Compañía: ${user.company.name}</p>
            `;
            dataContainer.appendChild(card);
          });
        })
        .catch(error => {
          console.error('Error al obtener datos:', error.message);
        });
    }