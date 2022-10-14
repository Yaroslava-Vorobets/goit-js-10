export function markupCountriesList(name) {

   return name.map(({ name, flags }) => {  
     return ` <li class="country-list__item">
      <img       
        src="${flags.svg}"
        width="40px"
        height="30px"
      />
      <p class="country-list__name">${name.official}</p>
    </li>`;
  }).join('')  

}

export function markupCountries({ name, capital, population, flags, languages }) { 
     return ` <div class="country-info_head">
        <img src="${flags.svg}"  width="40px" height="30px" alt="flag">
        <p class="country-info_capital">${name.official}</p>
      </div>
      <div class="description">
        <p class="description_capital">Capital: <span class="description__name-capital">${capital}</span> </p>
        <p class="description_population">Population: <span class="description__name-population">${population}</span> </p></p>
        <p class="description_languages">Languages: <span class="description__name-languages">${Object.values(languages).join('')}</span> </p></p>
      </div>`
 

}