//aba lateral section

let contagemLateral = 0

function lateral() {
  let lateral = document.querySelector('.lateral')

  contagemLateral += 1
  if (contagemLateral % 2 === 0) {
    lateral.removeAttribute('id')
    lateral.innerHTML = ' '
  } else {
    lateral.setAttribute('id', 'lateral')
    lateral.innerHTML =
      '<div class="favoritos"><h1>FAVORITOS</h1> <p>Nenhum drink selecionado</p></div> <div class="ja-fiz"><h1>JÁ FIZ</h1> <p>Nenhum drink selecionado</p></div>'
  }
}

// transition inicio section

let contagemImg = 0

function imgUp() {
  let img = document.querySelector('.img-inicio')
  img.setAttribute('class', 'img-inicio-transition')
}
