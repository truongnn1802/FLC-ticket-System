import { ResponseApi } from './utils.type'

export type AuthResponse = ResponseApi<{ access_token: string; expires: string }>
