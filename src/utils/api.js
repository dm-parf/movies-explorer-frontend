class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
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
        about: data.about
      })
    })
      .then(res => this.checkResponse(res))
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data["name"],
        link: data["url"]
      })
    })
      .then(res => this.checkResponse(res))
  }

  removeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(res => this.checkResponse(res))
  }

  toggleLike(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes/`, {
      method: isLiked ? 'DELETE' : 'PUT',
      credentials: 'include',
    })
      .then(res => this.checkResponse(res))
  }

  changeAvatar(url) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: url,
      })
    })
      .then(res => this.checkResponse(res))
  }

}

const api = new Api({
  baseUrl: process.env.REACT_APP_BASE_URL,
});

export default api;
