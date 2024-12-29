import axios from 'axios'
import { type User, type ToDo } from '../models/user'

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

export async function getUsers() {
  const temp = await axios.get<User[]>(ROOT_URL + '/users')

  const users = []

  for (const [key, user] of Object.entries(temp.data)) {
    users.push(user)
  }

  return users
}

export async function getUser(id: String | undefined) {
  if (id) {
    const url = `${ROOT_URL}/users/${id}`

    return await axios.get<User>(url)
  }

  return undefined
}

export async function getUserNames() {
  const users = await getUsers()

  const userNames = new Map()

  users.map((user) => userNames.set(user.id, user.name))

  return userNames
}

export async function getUserTodos(id: String | undefined) {
  const url = `${ROOT_URL}/users/${id}/todos`

  const todos = await axios.get<ToDo[]>(url)

  const userTodos = []

  for (const [key, todo] of Object.entries(todos.data)) {
    userTodos.push(todo)
  }

  return userTodos
}
