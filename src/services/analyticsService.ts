export type AnalyticsEvent =
  | 'hero_primary_cta_click'
  | 'hero_contact_click'
  | 'faq_open'
  | 'lead_form_submit'
  | 'lead_form_success'
  | 'lead_form_error'
  | 'whatsapp_click'

interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined
}

export const trackEvent = (event: AnalyticsEvent, payload: AnalyticsPayload = {}): void => {
  if (import.meta.env.DEV) console.debug('[analytics]', event, payload)
  window.dispatchEvent(new CustomEvent('petly:analytics', { detail: { event, payload } }))
}
