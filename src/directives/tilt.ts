import type { Directive } from 'vue'
import VanillaTilt, {
  type HTMLVanillaTiltElement,
  type TiltOptions,
} from 'vanilla-tilt'

const defaultOptions: TiltOptions = {
  max: 4,
  perspective: 1400,
  scale: 1.012,
  speed: 700,
  easing: 'cubic-bezier(.2,.8,.2,1)',
  glare: true,
  'max-glare': 0.08,
  gyroscope: false,
}

const canUseTilt = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const tiltDirective: Directive<HTMLVanillaTiltElement, TiltOptions | undefined> = {
  mounted(element, binding) {
    if (!canUseTilt()) return

    VanillaTilt.init(element, {
      ...defaultOptions,
      ...binding.value,
    })
  },
  beforeUnmount(element) {
    element.vanillaTilt?.destroy()
  },
}
