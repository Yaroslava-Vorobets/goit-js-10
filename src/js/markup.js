export function markupCountriesList(name) {

  return name.map(({ name, flags }) => {  
     return ` <li class="country-list__item">
      <img
        class="country-list__flag"
        src="${flags.svg}"
        width="30px"
        height="20px"
      />
      <p class="country-list__name">${name.official}</p>
    </li>`;
  }).join()  

}

export function markupCountries(name) {
  return name.map(({ name, capital, population, flags, languages }) => {
    return ` <div class="country-info_head">
        <img src="${flags.svg}" alt="flag" class="country-info_flag">
        <p class="country-info_capital">${name.official}</p>
      </div>
      <div class="description">
        <p class="description_capital">Capital: <span class="description__name.capital">${capital}</span> </p>
        <p class="description_population">Population: <span class="description__name.population">${population}</span> </p></p>
        <p class="description_languages">Languages: <span class="description__name.languages">${languages}</span> </p></p>
      </div>`
  })

}