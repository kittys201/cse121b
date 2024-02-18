document.addEventListener("DOMContentLoaded", async () => {
  let url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';
  let prevUrl = null;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f0cecd18bbmsh5b039bfdc1ef1bfp1da1e1jsn7303904267b4',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  prevButton.addEventListener('click', async () => {
    try {
      if (prevUrl) {
        const response = await fetch(prevUrl, options);
        const data = await response.json();
        displayCities(data.data);
        
        const prevLink = data.links.find(link => link.rel === 'prev');
        prevUrl = prevLink ? `https://wft-geo-db.p.rapidapi.com${prevLink.href}` : null;

        const nextLink = data.links.find(link => link.rel === 'next');
        url = nextLink ? `https://wft-geo-db.p.rapidapi.com${nextLink.href}` : null;

        nextButton.disabled = false;

        if (!prevUrl) {
          prevButton.disabled = true;
        }
      }
    } catch (error) {
      console.error(error);
    }
  });

  nextButton.addEventListener('click', async () => {
    try {
      if (url) {
        const response = await fetch(url, options);
        const data = await response.json();
        displayCities(data.data);
        
        const nextLink = data.links.find(link => link.rel === 'next');
        prevUrl = `https://wft-geo-db.p.rapidapi.com${data.links.find(link => link.rel === 'first').href}`;
        url = nextLink ? `https://wft-geo-db.p.rapidapi.com${nextLink.href}` : null;
        
        prevButton.disabled = false;
      }
    } catch (error) {
      console.error(error);
    }
  });

  // Cargar los primeros resultados al cargar la página
  nextButton.click();
});

function displayCities(cities) {
  const citiesList = document.getElementById('citiesList');
  citiesList.innerHTML = ''; // Limpiar la lista antes de agregar nuevas ciudades
  cities.forEach(city => {
    const cityElement = document.createElement('div');
    cityElement.classList.add('city');
    cityElement.innerHTML = `
      <h2>${city.name}</h2>
      <p>Country Code: ${city.code}</p>
      <p>Currency Codes: ${city.currencyCodes.join(', ')}</p>
      <p>WikiData ID: ${city.wikiDataId}</p>
    `;
    citiesList.appendChild(cityElement);
  });
}