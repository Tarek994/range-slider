module.exports = rangeSlider

function rangeSlider() {
  const el = document.createElement("div")
  el.classList.add("container")
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
  :host { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }
  :host {
    --white       : hsla(0,0%,100%,1);
    --transparent : hsla(0,0%,0%,0);
    --grey        : hsla(0,0%,90%,1);
    --blue       : hsla(207, 88%, 66%, 1);
    position: relative;
    width: 100%;
    height: 16px;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-appearance: none;
    outline: none;
    margin: 0;
    z-index: 2;
    background-color: var(--transparent);
  }
  .bar {
    position: absolute;
    top: 3px;
    left: 0;
    z-index: 0;
    height: 10px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  `
}
