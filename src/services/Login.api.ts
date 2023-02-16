import { URL } from 'src/constants/api.constants'
import { AuthResponse } from 'src/types/auth.type'
import { dataLogin } from 'src/types/.type'
import http from 'src/utils/http'

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
// Axios
export const loginAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/auth/token', body)
