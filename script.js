// Mapeo de ciudades a comunidades autónomas y banderas
const cityData = {
    "barcelona": { comunidad: "Cataluña", bandera: "Catalunya.png" },
    "madrid": { comunidad: "Madrid", bandera: "Madrid.png" },
    "sevilla": { comunidad: "Andalucía", bandera: "Andalucia.png" },
    "valencia": { comunidad: "Valencia", bandera: "Valencia.png" },
    "granada": { comunidad: "Andalucía", bandera: "Andalucia.png" },
    "bilbao": { comunidad: "País Vasco", bandera: "Pais_vasco.png" },
    "san sebastián": { comunidad: "País Vasco", bandera: "Pais_vasco.png" },
    "malaga": { comunidad: "Andalucía", bandera: "Andalucia.png" },
    "toledo": { comunidad: "Castilla-La Mancha", bandera: "Castilla_la_mancha.png" },
    "salamanca": { comunidad: "Castilla-La Mancha", bandera: "Castilla_la_mancha.png" }
};

// Array con las ciudades más turísticas de España en minúsculas
const touristCities = Object.keys(cityData);

// Función para verificar si una ciudad es turística y obtener su información
function checkCity(city) {
    const cityLowerCase = city.trim().toLowerCase();
    if (touristCities.includes(cityLowerCase)) {
        return cityData[cityLowerCase];
    } else {
        return null;
    }
}

// Manejar el envío del formulario
document.getElementById('city-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const cityInput = document.getElementById('city-name').value;
    const resultDiv = document.getElementById('result');

    const cityInfo = checkCity(cityInput);

    if (cityInfo) {
        resultDiv.innerHTML = `
            <p>${cityInput} es una de las ciudades más turísticas de España.</p>
            <p>Comunidad Autónoma: ${cityInfo.comunidad}</p>
            <img src="flags/${cityInfo.bandera}" alt="Bandera de ${cityInfo.comunidad}" class="flag-image">
        `;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.innerHTML = `<p>${cityInput} no es una de las ciudades más turísticas de España.</p>`;
        resultDiv.style.color = 'red';
    }
});

