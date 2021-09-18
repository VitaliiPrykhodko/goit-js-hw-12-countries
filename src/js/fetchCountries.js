import Notiflix from "notiflix"

export default class classCountries {
    constructor() {
        this.searchQuery = ""
    }
    fetchCountries() {
const url = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`
return fetch(url)
    .then(response => {
        if (response.status !== 200) {
           Notiflix.Notify.warning('Введіть коректне значення!')
                }
        else {
            return  response.json()
        }
    })
}
get query() {
return this.searchQuery
}
set query(newQuery) {
this.searchQuery = newQuery
}
}

