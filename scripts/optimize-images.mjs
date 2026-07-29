import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const assetsDirectory = join(process.cwd(), 'public', 'assets')
const responsiveDirectory = join(assetsDirectory, 'responsive')

const imageVariants = [
  {
    source: 'hero-dog-cat.webp',
    name: 'hero-dog-cat',
    widths: [320, 640],
    quality: 78,
  },
  {
    source: 'petly-dashboard-desktop.webp',
    name: 'petly-dashboard-desktop',
    widths: [960, 1200, 1600],
    quality: 78,
  },
  {
    source: 'petly-mockup-tablet-transparente.webp',
    name: 'petly-mockup-tablet',
    widths: [480, 720, 1200],
    quality: 78,
  },
  {
    source: 'petly-dashboard-celular-transparente.webp',
    name: 'petly-dashboard-phone',
    widths: [200, 400],
    quality: 78,
  },
  {
    source: 'cta-corgi.webp',
    name: 'cta-corgi',
    widths: [240, 480],
    quality: 78,
  },
  {
    source: 'cta-contact.png',
    name: 'cta-contact',
    widths: [480, 800],
    quality: 80,
  },
]

await mkdir(responsiveDirectory, { recursive: true })

await Promise.all(
  imageVariants.flatMap(({ source, name, widths, quality }) =>
    widths.map((width) =>
      sharp(join(assetsDirectory, source))
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, smartSubsample: true, effort: 5 })
        .toFile(join(responsiveDirectory, `${name}-${width}.webp`)),
    ),
  ),
)

console.log('Responsive image variants generated.')
