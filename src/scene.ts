import { Sprite } from './sprite'
import backgroundImg from './assets/sprites/header.png'
import headerImg from './assets/sprites/showdown-off.png'
import vegasGlowImg from './assets/sprites/vegas@2x.png'
import boltGlowImg from './assets/sprites/bolt@2x.png'
import slotGlowImg from './assets/sprites/slots@2x.png'
import sCharGlowImg from './assets/sprites/s@2x.png'
import hCharGlowImg from './assets/sprites/h@2x.png'
import o1CharGlowImg from './assets/sprites/o-1@2x.png'
import w1CharGlowImg from './assets/sprites/w-1@2x.png'
import dCharGlowImg from './assets/sprites/d@2x.png'
import o2CharGlowImg from './assets/sprites/o-2@2x.png'
import w2CharGlowImg from './assets/sprites/w-2@2x.png'
import nCharGlowImg from './assets/sprites/n@2x.png'
import mustDropGlowImg from './assets/sprites/must_drop.png'
import { AssetManager } from './asset'
import gsap, { Bounce } from 'gsap'

export class Scene {
  #context: CanvasRenderingContext2D
  #width: number
  #height: number
  #items: Sprite[] = []
  static manager: AssetManager | undefined
  #isReady = false

  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    onLoad?: () => void
  ) {
    this.#context = context
    this.#width = width
    this.#height = height
    Scene.manager = new AssetManager({
      onLoad: () => {
        this.#startAnimation()
        this.#isReady = true
        onLoad?.()
      },
    })

    this.#items.push(
      new Sprite(backgroundImg, {
        scale: 2,
        x: -600,
        y: -300,
      }),
      new Sprite(headerImg, {
        scale: 1.5,
        x: 180,
        y: 90,
      }),
      new Sprite(boltGlowImg, {
        scale: 0.75,
        x: 700,
        y: 20,
        opacity: 0,
      }),
      new Sprite(sCharGlowImg, {
        scale: 0.75,
        x: 100,
        y: 100,
        opacity: 0,
      }),
      new Sprite(hCharGlowImg, {
        scale: 0.75,
        x: 240,
        y: 100,
        opacity: 0,
      }),
      new Sprite(o1CharGlowImg, {
        scale: 0.75,
        x: 470,
        y: 100,
        opacity: 0,
      }),
      new Sprite(w1CharGlowImg, {
        scale: 0.75,
        x: 540,
        y: 100,
        opacity: 0,
      }),
      new Sprite(dCharGlowImg, {
        scale: 0.75,
        x: 705,
        y: 100,
        opacity: 0,
      }),
      new Sprite(o2CharGlowImg, {
        scale: 0.75,
        x: 830,
        y: 100,
        opacity: 0,
      }),
      new Sprite(w2CharGlowImg, {
        scale: 0.75,
        x: 960,
        y: 100,
        opacity: 0,
      }),
      new Sprite(nCharGlowImg, {
        scale: 0.75,
        x: 1100,
        y: 100,
        opacity: 0,
      }),
      new Sprite(mustDropGlowImg, {
        scale: 1,
        x: 320,
        y: 390,
        opacity: 0,
      }),
      new Sprite(vegasGlowImg, {
        scale: 0.75,
        x: 260,
        y: 78,
        opacity: 0,
      }),
      new Sprite(slotGlowImg, {
        scale: 0.75,
        x: 830,
        y: 78,
        opacity: 0,
      })
    )

    this.render = this.render.bind(this)
  }

  render() {
    requestAnimationFrame(this.render)
    if (!this.#isReady) {
      return
    }

    this.#items.forEach((item) => {
      item.render(this.#context)
    })
  }

  #startAnimation() {
    const objVegasGlow = this.#items[12]
    const objSlotGlow = this.#items[13]
    const objSGlow = this.#items[3]
    const objHGlow = this.#items[4]
    const objO1Glow = this.#items[5]
    const objW1Glow = this.#items[6]
    const objDGlow = this.#items[7]
    const objO2Glow = this.#items[8]
    const objW2Glow = this.#items[9]
    const objNGlow = this.#items[10]
    const objMustDropGlow = this.#items[11]
    const objBoltGlow = this.#items[2]

    gsap
      .timeline({
        delay: 0.5,
      })
      .fromTo(
        objVegasGlow,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        },
        'intro'
      )
      .fromTo(
        objSlotGlow,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        },
        '<'
      )
      .to(
        objSGlow,
        {
          delay: 0.5,
          opacity: 1,
          duration: 0.2,
        },
        '<0.05'
      )
      .to(objHGlow, {
        opacity: 1,
        duration: 0.2,
      })
      .to(objO1Glow, {
        opacity: 1,
        duration: 0.1,
      })
      .to(objW1Glow, {
        opacity: 1,
        duration: 0.2,
      })
      .to(objDGlow, {
        opacity: 1,
        duration: 0.1,
      })

      .to(objO2Glow, {
        opacity: 1,
        duration: 0.2,
      })

      .to(objW2Glow, {
        opacity: 1,
        duration: 0.2,
      })

      .to(objNGlow, {
        opacity: 1,
        duration: 0.2,
      })

      .fromTo(
        objMustDropGlow,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          delay: 0.5,
          ease: Bounce.easeOut,
        }
      )

      .to(objMustDropGlow, {
        opacity: 0,
        duration: 0.1,
        ease: Bounce.easeOut,
        delay: 0.2,
      })

      .fromTo(
        objMustDropGlow,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.05,
          ease: Bounce.easeOut,
          yoyo: true,
          repeat: 2,
        }
      )

      .fromTo(
        objVegasGlow,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
          repeat: 2,
          yoyo: true,
          ease: Bounce.easeOut,
        },
        'intro+=0.9'
      )

      .fromTo(
        objSlotGlow,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
          repeat: 2,
          yoyo: true,
          ease: Bounce.easeOut,
        },
        '<'
      )

    gsap
      .timeline({
        delay: 2.6,
        repeat: Infinity,
        yoyo: true,
      })
      .fromTo(
        objBoltGlow,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: Bounce.easeInOut,
          duration: 0.1,
        }
      )
  }

  initialize() {
    requestAnimationFrame(this.render)
  }
}
