import { URL } from 'src/constants/api.constants'
import { dataLogin } from 'src/types/login.type'
export const postApi = async (url: string, data: dataLogin) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
  return res.json()
}
export const Login = (data: dataLogin) => {
  const url = URL + '/auth/token'
  return postApi(url, data)
}
