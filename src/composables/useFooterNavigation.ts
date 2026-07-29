import { useRoute } from 'vue-router'

export const useFooterNavigation = () => {
  const route = useRoute()
  const institutionalPaths = new Set([
    '/sobre',
    '/termos-de-uso',
    '/politica-de-privacidade',
    '/politica-de-cookies',
    '/direitos-autorais',
  ])

  const isFooterLinkActive = (href: string) => {
    const path = href.split('#')[0]
    return institutionalPaths.has(path) && route.path === path
  }

  return { isFooterLinkActive }
}
