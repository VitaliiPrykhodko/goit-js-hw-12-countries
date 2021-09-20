import './sass/main.scss';
import classCountries from "./js/fetchCountries.js";
import debounce from 'lodash/debounce'
import templatePage from './template/templateOne.hbs'
import template from './template/template.hbs'
import Notiflix from "notiflix"

const box = document.querySelector('.container')
const input = document.getElementById('input')
input.addEventListener('input', debounce(onSearch, 1000))

const newFetchCountries = new classCountries()


function onSearch(evt) {
    evt.preventDefault()
    box.innerHTML = ""
    
    newFetchCountries.query = evt.target.value.trim()
    newFetchCountries.fetchCountries()
        .then(data => {
            if (data === undefined) {
            return
        }
        if (data.length >= 2 && data.length <= 10) {
            data.forEach((elem) => {
                   const markup = template({elem});
                box.insertAdjacentHTML('beforeend', markup)
                })
        } if (data.length === 1) {
            data.map((elem) => {
                const markupCap = templatePage({elem})
            box.insertAdjacentHTML('beforeend', markupCap)
            })
        }  if (data.length > 10) {
             Notiflix.Notify.info('To many matches found. Please more specific query!')
        }
            
        }).catch(error => console.log(error))
       }

