const url = 'https://api.spotify.com/v1'
const clientId = 'af6ed709c1864aa7b440ae660f9cae09'
const clientSecret = '3ae071dfc9be4c1db82795dae3e4f26d'

export async function getToken() {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
    },
    body: 'grant_type=client_credentials',
  })

  const data = await result.json()
  return data.access_token
}

export async function getCategories(token) {
  const result = await fetch(`${url}/browse/categories`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token },
  })
  const data = await result.json()
  return data.categories.items
}

export async function searchItem(token, q) {
  const type = 'track'
  const result = await fetch(`${url}/search?q=${q}&type=${type}&limit=20`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token },
  })
  const data = await result.json()
  return data.tracks.items
}

export async function getTrack(token, id) {
  const result = await fetch(`${url}/tracks/${id}`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token },
  })
  const data = await result.json()
  return data
}

export default {
  getToken,
  getCategories,
  searchItem,
  getTrack,
}
