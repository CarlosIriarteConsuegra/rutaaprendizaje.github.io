function cursosinlink(link,contenedor){
  if (link == ""){
    var span = contenedor.insertAdjacentElement(
      "beforeend",
      document.createElement("span")
    );
    span.id = "sinlink";
    span.textContent = "!SIN LINK¡";
  }
}

function btnarriba(contenedor){
    var a = contenedor.insertAdjacentElement(
      "beforeend",
      document.createElement("a")
    );
    a.className = "arriba";
    a.href = "#nav"
    a.textContent = "Volver Arriba";
}

function agregaropnav(nav){
  var a = document.createElement("a");
  a.href = "#" + key;
  a.textContent = value.nombre;
  li = nav.insertAdjacentElement("beforeend", document.createElement("li"));
  li.insertAdjacentElement("beforeend", a);
}

function info() {
  jQuery.get("https://carlosiriarteconsuegra.github.io/rutaaprendizaje.github.io/cursos.json", function (data) {
    $.each(data, function (key, value) {
      if (key != "1" && key != "2") {
        var main = document.querySelector("#main");
        var nav = document.querySelector("#nav");
        var completados = document.querySelector("#completados");

        for (z of value.cursos) {
          if (z.realizado == "si") {
            agregaropnav(nav);
            var section = document.createElement("section");
            section.id = key;
            completados.insertAdjacentElement("beforeend", section);
            var h2 = document.createElement("h2");
            h2.textContent = value.nombre;
            section.insertAdjacentElement("beforeend", h2);
            btnarriba(section);
            var ol = section.insertAdjacentElement(
              "beforeend",
              document.createElement("ol")
            );
            
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
            var span = del.insertAdjacentElement("beforeend",document.createElement("span"));
            span.className = z.clase;
            span.textContent = z.escuela;
          }
        }
      }
    });
  });
}

info();
