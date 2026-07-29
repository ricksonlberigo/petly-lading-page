export interface LeadFormData {
  name: string
  email: string
  phone: string
}

export interface LeadResponse {
  id: string
  message: string
}

export const submitLead = async (data: LeadFormData): Promise<LeadResponse> => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api'
  const response = await fetch(`${apiBaseUrl}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Não foi possível enviar seus dados.')
  return response.json() as Promise<LeadResponse>
}
