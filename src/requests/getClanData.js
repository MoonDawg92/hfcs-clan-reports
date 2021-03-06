import queryString from "query-string"
import generateAuthHeader from "../utils/generateAuthHeader"

export default ({ cookieToken }, clanId) => {
  const options = { headers: generateAuthHeader(cookieToken) }
  const params = { clan_id: clanId }

  return fetch(`../api/clan?${queryString.stringify(params)}`, options).then(
    result => {
      if (result.status === 200) return result.json()
      else throw { status: result.status, statusText: result.statusText }
    }
  )
}
