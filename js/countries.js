const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    const CountriesHTML = countries.map(country=> getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join('');
}
// step 2....
const getCountryHTML =({name, flags, area, region}) =>{
  return `
       <div class="country">
           <h2>${name.common}</h2>
           <p>Area: ${area}</p>
           <p>Continet: ${region}</p>
           <img src="${flags.png}">
       </div>
    `
}
// const getCountryHTML =country =>{
//     // step 1....
//     const {name, flags} = country;
//     return `
//        <div class="country">
//            <h2>${name.common}</h2>
//            <img src="${flags.png}">
//        </div>
//     `
// }
//step orginal.....
// const getCountryHTML =country =>{
//     return `
//        <div class="country">
//            <h2>${country.name.common}</h2>
//            <p>${country.area}</p>
//            <img src="${country.flags.png}">
//        </div>
//     `
// }

loadCountries();