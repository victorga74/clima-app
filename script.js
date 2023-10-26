let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "a0e37a7af84fb8b1feeee1ca1bbafa8d";
let difKelvin = 273.15;
// let ciudad = "Matamoros";

// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response));

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    // .then((response) => console.log(response));
    .then((data) => mostrarDatosClima(data));
}
function mostrarDatosClima(data) {
  console.log(data);
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(
    temperatura - difKelvin
  )}°C`;

  const humedadInfo = document.createElement("h2");
  humedadInfo.textContent = `La humedad es de: ${humedad}%`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}.png`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
