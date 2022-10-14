
export class FetchCountries {

  getCountries(inputValue) {
     const url =  `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,population,flags,languages`
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
  }
}

 
 
  



  