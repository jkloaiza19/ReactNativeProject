export interface IRequest {
  url: string
  data?: object
  method?: string
  config?: object
  headers?: object
}

/* The line `export type response = {` is defining a type alias in TypeScript. It creates a new type
called `response` that is an object type. The object can have any number of properties with string
keys and any values. */
export type response = {
  [key: string]: any
}

// const baseUrl = 'https://develop-endpoint.free.beeceptor.com'
const baseUrl = 'https://swapi.dev/api'

/**
 * It takes in an object with the url, data, method, config, and headers, and returns a promise with
 * the response
 * @param {request}  - url - the url to make the request to
 * @returns A promise that resolves to a response object.
 */
export const apiRequest = async ({
  url,
  data = {},
  method = 'GET',
  config = {},
  headers = {},
}: IRequest): Promise<response> => await fetch(`${baseUrl}${url}`, {
  method: method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
  ...data,
  ...config,
})
.then(response => response.json())
.catch(error => Promise.reject(error))
