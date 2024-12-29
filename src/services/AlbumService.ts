import axios from 'axios'
import { type Album, type Photo } from '../models/album'

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

export async function getAlbums() {
  const res = await axios.get<Album[]>(ROOT_URL + '/users/1/albums')

  const albums = []

  for (const [key, album] of Object.entries(res.data)) {
    albums.push(album)
  }

  return albums
}

export async function getAlbum(id: String | undefined) {
  const url = `${ROOT_URL}/albums/${id}`
  return await axios.get<Album>(url)
}

export async function getUserAlbums(userId: String | undefined) {
  const url = `${ROOT_URL}/users/${userId}/albums`
  const albums = await axios.get<Album[]>(url)

  const userAlbums = []

  for (const [key, album] of Object.entries(albums.data)) {
    if (String(album.userId) === userId) {
      userAlbums.push(album)
    }
  }

  return userAlbums
}

export async function getPhotos() {
  return await axios.get<Photo[]>(ROOT_URL + '/photos')
}

export async function getAlbumPhotos(id: Number | undefined) {
  const url = `${ROOT_URL}/albums/${id}/photos`
  const res = await axios.get<Photo[]>(url)

  const photos = []

  for (const [key, album] of Object.entries(res.data)) {
    photos.push(album)
  }

  return photos
}
