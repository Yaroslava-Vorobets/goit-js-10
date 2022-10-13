
export class FetchCountries {

  getcountries(inputValue) {
    const url = 'https://restcountries.com/v3/all?fields=name,capital,population,flags,languages'
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      // .then(name => {
      //   createMarkup({ name })
      //   return
      // })
      // .catch(error => {
      //   console.log(error)
      // });

  }
}

  function createMarkup({ name, capital, population, flags, languages }) {  
  console.log(name[0].name.official)
  console.log(name[0].capital)
  console.log(name[0].population)
  console.log(name[0].flags)
  console.log(name[0].languages)
  //  name.map(({ name, flags }) => {
  //    console.log(name[0].name.official)
  //    return ` <li class="country-list__item">
  //     <img
  //       class="country-list__flag"
  //       src="${flags.svg}"
  //       width="30px"
  //       height="20px"
  //     />
  //     <p class="country-list__name">${name.official}</p>
  //   </li>`;
  // }).join()

  }
  
     
 
  



  