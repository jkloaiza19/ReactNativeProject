// selectors
import { selectAuthToken } from "../redux/auth/selectors"

// store
import { state } from "../../store"

export interface IRequest {
  url: string
  data?: object
  method?: string
  config?: object
  headers?: Record<string, string>
}

/* The line `export type response = {` is defining a type alias in TypeScript. It creates a new type
called `response` that is an object type. The object can have any number of properties with string
keys and any values. */
export type response<T> = {
  data: T
}

// const baseUrl = 'https://develop-endpoint.free.beeceptor.com'
// const baseUrl = 'https://swapi.dev/api'
const baseUrl = 'http://localhost:3000'

/**
 * The function sets the authentication header in the headers object based on the URL and the
 * authentication token.
 * @param {string} url - A string representing the URL of the request.
 * @param headers - The `headers` parameter is an object that represents the headers of an HTTP
 * request. It is a key-value pair where the key is the header name and the value is the header value.
 * @returns The function `setAuthHeader` returns the `headers` object if the `url` includes the string
 * 'auth'. Otherwise, it adds an 'Authentication' header with the value of `Bearer ` to the
 * `headers` object and returns the updated `headers` object.
 */
const setAuthHeader = (url: string, headers: Record<string, string>) => {
  if (url.includes('auth')) {
    return headers
  }

  const authToken = selectAuthToken(state)

  if (!authToken) {
    throw new Error('Invalid auth token')
  }

  return {
    ...headers,
    'Authentication': `Bearer ${authToken}`,
  }
}

/**
 * It takes in an object with the url, data, method, config, and headers, and returns a promise with
 * the response
 * @param {request}  - url - the url to make the request to
 * @returns A promise that resolves to a response object.
 */
export const apiRequest = async <T>({
  url,
  data = {},
  method = 'GET',
  config = {},
  headers = {},
}: IRequest): Promise<T> => {

  return fetch(`${baseUrl}${url}`, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...setAuthHeader(url, headers),
    },
    ...data,
    ...config,
  })
  .then(response => response.json())
  .catch(error => Promise.reject(error))
}
