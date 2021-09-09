class MoviesApi {
    constructor(options) {
      this._moviesUrl = options.moviesUrl;
    }
  
    checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getMovies() {
      return fetch(`${this._moviesUrl}`, {

      })
        .then(res => this.checkResponse(res))
    }

}

const api = new MoviesApi({
  moviesUrl: process.env.REACT_APP_MOVIES_URL,
});

export default api;