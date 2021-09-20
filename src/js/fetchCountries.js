import Notiflix from "notiflix"

export default class classCountries {
    constructor() {
        this.searchQuery = ""
        this.endPoint = "name/"
    }
    fetchCountries() {
const url = `https://restcountries.eu/rest/v2/${this.endPoint}${this.searchQuery}`
return fetch(url)
    .then(response => {
        if (response.status === 200) {
        
          return response.json()
                }
        else {
          Notiflix.Notify.warning('Введіть коректне значення!')
        }
    })
}
get query() {
 this.searchQuery
}
set query(newQuery) {
this.searchQuery = newQuery
}
}

