import { apiRequest } from "./request"
import { IUser } from '../redux/user/schema'

/**
 * The `getUsers` function makes an API request to retrieve a list of people.
 */
export const getUsers = () => apiRequest({ url: '/people' })

/**
 * The getUser function makes an API request to retrieve information about a specific user.
 */
export const getUser = (id: number | string) => apiRequest({ url: `/people/${id}` })

/**
 * The function `updateUserData` sends a POST request to update user data with the specified ID and
 * data.
 * @param {number} id - The `id` parameter is the unique identifier of the user whose data needs to be
 * updated.
 * @param {IUser} data - The `data` parameter is an object that represents the user data to be updated.
 * It should have the following properties:
 */
export const updateUserData = (id: number, data: IUser) => apiRequest({
  url: `/people/${id}`,
  method: 'POST',
  data: {
    body: JSON.stringify(data),
  },
})