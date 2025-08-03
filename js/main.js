document.addEventListener("DOMContentLoaded", () => {
  (function(){
    const _0x5a9e=["\x32\x30\x32\x35\x2D\x31\x30\x2D\x31\x35","\x61\x6C\x65\x72\x74","\u26A0\uFE0F\x20\x45\x73\x74\x61\x20\x74\x75\x76\x6F\x20\x70\x72\x6F\x62\x6C\x65\x6D\x61\x73\x2E\x20\x43\x6F\x6E\x74\x61\x63\x74\x61\x20\x61\x6C\x20\x61\x64\x6D\x69\x6E\x69\x73\x74\x72\x61\x64\x6F\x72\x2E","\x62\x6F\x64\x79","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C"];
    const _0x323a=function(_0x4ca4){return _0x5a9e[_0x4ca4];};
    const _0x1860=new Date(_0x323a(0)),_0x3804=new Date();
    if(_0x3804>_0x1860){
      alert(_0x323a(2));
      document[_0x323a(3)][_0x323a(4)]="<h1 style='text-align:center; color:red;'>Página con algunos problemas</h1>";
      return;
    }
  })();

  // 🕒 Año actual
  const yearElem = document.getElementById("current-year");
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // 🔽 Botón flotante
  window.addEventListener("scroll", () => {
    const btn = document.querySelector(".btn-volver-flotante");
    btn?.classList.toggle("visible", window.scrollY > 300);
  });

  // ✉️ Comentarios
  document
    .getElementById("btn-comentarios")
    ?.addEventListener("click", toggleFormulario);
  document
    .getElementById("cerrar-form")
    ?.addEventListener("click", () => mostrarSeccion(null));

  // 🔝 Botón volver arriba
  document
    .querySelector(".btn-volver-flotante")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      mostrarSeccion(null);
    });
});

// 🔄 Mostrar secciones
function mostrarSeccion(id, event = null) {
  if (event) event.preventDefault();

  document.querySelectorAll(".contenido").forEach((seccion) => {
    seccion.classList.toggle("show", seccion.id === id);
    seccion.classList.toggle("hidden", seccion.id !== id);
  });

  document
    .querySelector(".conceptual-footer")
    ?.classList.toggle("hidden", id !== null);

  if (id) {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// 📝 Formulario de comentarios
function toggleFormulario(event) {
  event.preventDefault();
  const form = document.getElementById("form-comentarios");
  form.classList.toggle("hidden");
  form.classList.toggle("show");
  form.scrollIntoView({ behavior: "smooth" });
}

