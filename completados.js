var completados = document.querySelector("#completados");
var ol = completados.insertAdjacentElement(
  "beforeend",
  document.createElement("ol")
);
var li = ol.insertAdjacentElement(
  "beforeend",
  document.createElement("li")
);
var del = li.insertAdjacentElement(
  "beforeend",
  document.createElement("del")
);
var a = li.insertAdjacentElement(
  "beforeend",
  document.createElement("a")
);
a.src = z.src;
a.target = "_BLANK";
a.textContent = z.nombre + "   ";
cursosinlink(z.src,a);
var a = del.insertAdjacentElement(
  "beforeend",
  document.createElement("span")
);
span.className = z.clase;
span.textContent = z.escuela;
