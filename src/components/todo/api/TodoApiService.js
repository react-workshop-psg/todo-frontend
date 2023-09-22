import { apiClient } from './ApiClient'

export const retrieveAllTodosForUsernameApi
    = () => apiClient.get(`/todos`)

export const retrieveTodoApi
    = (id) => apiClient.get(`/todos/${id}`)

export const createTodoApi
    = (todo) => apiClient.post(`/todos`, todo)
