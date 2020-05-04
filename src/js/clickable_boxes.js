export const ClickableBoxes = (container) => {
  var row = document.createElement('div')
  row.style.display = 'flex'

  for(let i=1; i<=5; i++) {
    var div = document.createElement('div')
    div.style.width = '80px'
    div.style.height = '80px'
    div.style.backgroundColor = 'purple'
    div.style.cursor = 'pointer'
    div.style.margin = '0 5px'
    div.onclick = function() {
      alert('This is box #' + i)
    }
    row.appendChild(div)
  }

  container.append(row)
}