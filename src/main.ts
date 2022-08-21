import { Scene } from './scene'
import './style.css'

const width = 1516,
  height = 680

const elCanvas = document.getElementById('canvas') as HTMLCanvasElement
const elPreloader = document.querySelector('.preloader') as HTMLElement

const context = elCanvas.getContext('2d') as CanvasRenderingContext2D

const scene = new Scene(context, width, height, () => {
  elPreloader.style.display = 'none'
})

scene.initialize()
