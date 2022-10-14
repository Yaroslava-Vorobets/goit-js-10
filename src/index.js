import './css/styles.css';
import { FetchCountries } from './js/fetchCountries';
import {markupCountriesFound} from './js/markup';
import {countryList} from './js/refs'
import {inputSearchBox} from './js/refs'
import {countryInfo} from './js/refs'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {markupCountriesList,markupCountries} from './js/markup'
const DEBOUNCE_DELAY = 300;


const fetchCountries = new FetchCountries();
function renderMarkupCountriesList(data) {
const markup = markupCountriesList(data);  
countryList.innerHTML = markup;
}
function renderMarkupCountries(data) {
  const markup = data.map(markupCountries).join('');
  console.log(data);
  console.log(markup);
  countryInfo.innerHTML = markup;
}
const onInputEvent = (e) => {
  clearListInput();
  clearInfoInput();
  const inputValue = e.target.value.trim().toLowerCase()
  if (!inputValue) {
    return;
  }
  fetchCountries.getCountries(inputValue)
    .then(data => {
      if (data.length === 1) {
         renderMarkupCountries(data)
      } else if (data.length >= 2 && data.length <= 10) {
        renderMarkupCountriesList(data);
      } else {
        return Notify.info("Too many matches found. Please enter a more specific name.");
      }
    })   
    .catch(error => {
      onError();
      console.log(error.message);
    });
}
  inputSearchBox.addEventListener('input', debounce(onInputEvent, DEBOUNCE_DELAY))
  function clearListInput() {
    countryList.innerHTML = '';
  }
  function clearInfoInput() {
    countryInfo.innerHTML = '';
  }
  function onError() {
    return Notify.failure('Oops, there is no country with that name');
  }


