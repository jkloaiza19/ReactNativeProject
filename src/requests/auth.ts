import { apiRequest } from "./request"
import { IUser } from '../redux/user/schema'
import { IAuth } from "../redux/auth/schema"

/**
 * The function `updateUserData` sends a POST request to update user data with the specified ID and
 * data.
 * @param {number} id - The `id` parameter is the unique identifier of the user whose data needs to be
 * updated.
 * @param {IUser} data - The `data` parameter is an object that represents the user data to be updated.
 * It should have the following properties:
 */
export const signInUser = (data: IAuth) => apiRequest<IUser>({
  url: '/users/auth/signin',
  method: 'POST',
  data: {
    body: JSON.stringify(data),
  },
})