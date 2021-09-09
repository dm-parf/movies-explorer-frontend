const moviesImgUrl = process.env.REACT_APP_MOVIES_IMG_URL;

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
    })
      .then(res => this.checkResponse(res))
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include'
    })
      .then(res => this.checkResponse(res))
  }

  updateProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
      .then(res => this.checkResponse(res))
  }

  createMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: moviesImgUrl + data.image.url,
          trailer: data.trailerLink,
          thumbnail: moviesImgUrl + data.image.formats.thumbnail.url,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN

      })
    })
      .then(res => this.checkResponse(res))
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(res => this.checkResponse(res))
  }

}

const api = new Api({
  baseUrl: process.env.REACT_APP_BASE_URL,
});

export default api;
