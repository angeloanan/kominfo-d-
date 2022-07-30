export interface IndiWTFResponse {
  success: boolean
  errors: any[]
  messages: any[]
  checked_by: string
  result: Result
}

export interface Result {
  id: string
  last_checked_on: string
  headers: Record<string, string>
}
