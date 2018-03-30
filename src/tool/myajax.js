import fetchJsonp from 'fetch-jsonp';

export default {
    getfetch(config){
        fetch(config.url, config.options)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          config.success(data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getfetchJsonp(config){
        fetchJsonp(config.url, config.options)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          config.success(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
}
