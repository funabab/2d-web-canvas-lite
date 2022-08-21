import { Scene } from './scene'

interface SpriteOptions {
  x: number
  y: number
  opacity: number
  scale: number
}

export class Sprite {
  x: number
  y: number
  #img: HTMLImageElement | null = null
  scale: number
  opacity: number

  constructor(uri: string, opts?: Partial<SpriteOptions>) {
    const img = document.createElement('img')
    img.src = uri

    this.x = opts?.x ?? 0
    this.y = opts?.y ?? 0
    this.scale = opts?.scale ?? 1
    this.opacity = opts?.opacity ?? 1

    Scene.manager?.loadOne()

    img.onload = () => {
      this.#img = img
      Scene.manager?.oneLoaded()
    }
  }

  render(context: CanvasRenderingContext2D) {
    if (!this.#img || this.opacity === 0) {
      return
    }

    const width = this.#img.width
    const height = this.#img.height

    const dw = width * this.scale
    const dh = height * this.scale

    const globalAlpha = context.globalAlpha

    context.globalAlpha = this.opacity
    context.drawImage(this.#img, 0, 0, width, height, this.x, this.y, dw, dh)
    context.globalAlpha = globalAlpha
  }
}
