export class AssetManager {
  #count: number = 0
  onLoad: () => void

  constructor(opts: { onLoad: () => void }) {
    this.onLoad = opts.onLoad
  }

  loadOne() {
    this.#count++
  }

  oneLoaded() {
    this.#count = Math.max(0, this.#count - 1)
    if (this.#count === 0) {
      this.onLoad()
    }
  }
}
