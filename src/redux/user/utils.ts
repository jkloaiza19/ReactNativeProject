import { IUser } from "./schema"

/**
 * The function `formatUserData` takes in an object of user data and returns a formatted user object
 * with specific properties.
 * @param data - The `data` parameter is an object that contains key-value pairs. Each key represents a
 * property of a user, and the corresponding value represents the value of that property. The
 * properties include `name`, `hair_color`, `birth_year`, `gender`, and `mass`.
 */
export const formatUserData = (data: Record<string, string>): IUser => ({
  name: data.name,
  hair: data.hair_color,
  dob: data.birth_year,
  gender: data.gender,
  mass: data.mass,
})