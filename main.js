/**
 * Marco Aldair de Jesus Caceres ISIC U7 18390579
 */

btnMostrarPais.addEventListener("click", loadRestcountries);
btnFlag.addEventListener("click", loadFlag);
function loadRestcountries() {
    fetch('https://restcountries.com/v3.1/name/peru')
    .then(response => response.json())
    .then(data => showCountry(data[0]))
}

function loadFlag() {
    fetch("https://flagcdn.com/256x192/pe.png")
    .then(response => response.blob())
    .then((imageData)=>showFlag(imageData));
}

function showCountry({
    name,
    capital,
    population,
    currencies,
    region,
    flag
  }) {
    countryInfo.querySelector("summary").innerHTML = name.nativeName.spa.official; 
    contains = countryInfo.innerHTML;
    contains = `${contains} Nombre oficial ${name.nativeName.spa.official} <br/>
                Capital ${capital} <br/> bandera ${flag} <br/> poblacion ${population}<br/>
                Moneda ${currencies.PEN.name} <br/> Region ${region}`;
    countryInfo.innerHTML = contains;
}

function showFlag(imageData) {
    const reader = new FileReader();
    reader.onload = () => {
        let imageUrl = reader.result;
        let image = document.createElement("img");
        image.src = imageUrl;
        divFlag.appendChild(image);
    };
    reader.readAsDataURL(imageData);
}