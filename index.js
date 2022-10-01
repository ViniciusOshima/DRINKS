let contagemLateral = 0

function lateral() {
  let lateral = document.querySelector('.lateral')

  contagemLateral += 1
  if (contagemLateral % 2 === 0) {
    lateral.removeAttribute('id')
  } else {
    lateral.setAttribute('id', 'lateral')
  }
}
