module.exports = rangeSlider;

function rangeSlider() {
    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})
    shadow.innerHTML = `<h1>Hello World</h1>`
    return el
}
