const url = 'https://api.spotify.com/v1'

export async function getToken(clientId, clientSecret) {
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
  const result = await fetch(`${url}/search?q=${q}&type=${type}&limit=10`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token },
  })
  const data = await result.json()
  return data.tracks.items
}

export default {
  getToken,
  getCategories,
  searchItem,
}
