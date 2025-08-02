function mostrar(id) {
  document
    .querySelectorAll(".contenido")
    .forEach((c) => c.classList.remove("show"));
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.classList.add("show");
    seccion.scrollIntoView({ behavior: "smooth" });
  }
}

// Año actual dinámico en footer
document.getElementById("current-year").textContent = new Date().getFullYear();
