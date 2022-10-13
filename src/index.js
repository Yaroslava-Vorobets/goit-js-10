import './css/styles.css';
import { FetchCountries } from './js/fetchCountries';
import {markupCountriesFound} from './js/markup';
// import './js/refs'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {markupCountriesList,markupCountries} from './js/markup'
const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const inputSearchBox = document.querySelector('#search-box');

const fetchCountries = new FetchCountries()

function renderMarkupCountriesList(data) {
  const markup = markupCountriesList()
  countryList.insertAdjacentElement('beforeend',markup)
}

function renderMarkupCountries(data) {
  const markup = data.map(markupCountries).join('')
  countryInfo.innerHTML = markup
}


const onInputEvent = (e) => {
 
  clearListInput()
  clearInfoInput()

  inputValue = e.target.value.trim().toLowerCase()
  if (!inputValue) {
    return;
  }  
  fetchCountries.getcountries(inputValue)
    .then(data => { 
      if (data.length === 1) {
         renderMarkupCountries(data)
      } else if (data.length >= 2 && data.length <= 10) {
        renderMarkupCountriesList(data) ;
      } else {
        return Notify.info("Too many matches found. Please enter a more specific name.");
       
      }
    })
    .catch(error => {
      return Notify.failure('Oops, there is no country with that name');     
    });  
} 

  inputSearchBox.addEventListener('input', debounce(onInputEvent, DEBOUNCE_DELAY))



  function clearListInput() {
    inputSearchBox.innerHTML = '';
  }

  function clearInfoInput() {
    inputSearchBox.innerHTML = '';
  }



