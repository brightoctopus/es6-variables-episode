import { HelloWorld } from './js/hello_world'
import { ClickableBoxes } from './js/clickable_boxes'

const greeting = document.createElement('h1')
greeting.textContent = HelloWorld()

const app = document.querySelector('#root')
ClickableBoxes(app)
// app.append(greeting)