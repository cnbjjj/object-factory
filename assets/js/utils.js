function select(selector, parent = document) {
  return parent.querySelector(selector)
}

function event(on, event, call) {
  on.addEventListener(event, call)
}

export { select, event };