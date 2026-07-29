export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export const submitContact = async (data: ContactFormData): Promise<void> => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api'
  const response = await fetch(`${apiBaseUrl}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) throw new Error('Não foi possível enviar a mensagem.')
}
