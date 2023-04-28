module.exports = rangeSlider

function rangeSlider() {
  const el = document.createElement("div")
  el.classList.add('container')
  const shadow = el.attachShadow({ mode: "closed" })

  const input = document.createElement("input")
  input.type = "range"

  const bar = document.createElement("div")
  bar.classList.add("bar")

  const fill = document.createElement("div")
  fill.classList.add("fill")

  const ruler = document.createElement("div")
  ruler.classList.add("ruler")

  bar.append(ruler, fill)

  const style = document.createElement("style")
  style.textContent = get_theme()
  shadow.append(style, input, bar)
  return el;
}

function get_theme() {
  return `
    :host(.container){
        background-color: red;
    }
    input{
        width:60%;
    }
    `
}
