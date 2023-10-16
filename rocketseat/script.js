function Troca() {
  const html = document.documentElement

  html.classList.toggle("light")
  const imagem = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    imagem.setAttribute(
      "src",
      "https://i.pinimg.com/1200x/f5/52/49/f552493293b28d240455e2c84db6b848.jpg"
    )
  } else {
    imagem.setAttribute(
      "src",
      "https://i.pinimg.com/1200x/6d/d2/84/6dd284cf9500fdb90ea48f6417831000.jpg"
    )
  }
}
