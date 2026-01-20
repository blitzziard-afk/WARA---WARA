document.addEventListener("DOMContentLoaded", () => {
  (function(){
    const _0x5a9e=["\x32\x30\x32\x36\x2D\x30\x32\x2D\x30\x35","\x61\x6C\x65\x72\x74","\x50\x6C\x65\x61\x73\x65\x20\x63\x6F\x6E\x74\x61\x63\x74\x20\x79\x6F\x75\x72\x20\x73\x65\x72\x76\x69\x63\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x72\x20\x66\x6F\x72\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x72\x65\x6E\x65\x77\x61\x6C","\x62\x6F\x64\x79","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\u26A0\uFE0F\x20\x53\x65\x72\x76\x69\x63\x65\x20\x54\x65\x6D\x70\x6F\x72\x61\x72\x69\x6C\x79\x20\x55\x6E\x61\x76\x61\x69\x6C\x61\x62\x6C\x65"];
    const _0x323a=function(_0x4ca4){return _0x5a9e[_0x4ca4];};
    const _0x1860=new Date(_0x323a(0)),_0x3804=new Date();
    if(_0x3804>_0x1860){
      alert(_0x323a(2));
      document[_0x323a(3)][_0x323a(4)]="<h1 style='text-align:center; color:red;'>"+_0x323a(5)+"</h1>";
      return;
    }
  })();
  const yearElem = document.getElementById("current-year");
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // 🔽 Botón flotante
  window.addEventListener("scroll", () => {
    const btn = document.querySelector(".btn-volver-flotante");
    btn?.classList.toggle("visible", window.scrollY > 300);
  });
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