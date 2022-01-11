var version = 1.16;

function realizandocurso() {
  var h2 = realizando.insertAdjacentElement(
    "beforeend",
    document.createElement("h2")
  );
  h2.textContent = "Actual Curso Realizando:";
  var em = realizando.insertAdjacentElement(
    "beforeend",
    document.createElement("em")
  );
  em.textContent = z.nombre + "   ";
  var span = em.insertAdjacentElement(
    "beforeend",
    document.createElement("span")
  );
  span.className = z.clase;
  span.textContent = z.escuela;
}

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

function info() {
  jQuery.get("http://localhost/ruta/cursos.json?v=1.17", function (data) {
    $.each(data, function (key, value) {
      if (key != "1" && key != "2") {
        var main = document.querySelector("#main");
        var nav = document.querySelector("#nav");

        var a = document.createElement("a");
        a.href = "#" + key;
        a.textContent = value.nombre;
        li = nav.insertAdjacentElement(
          "beforeend",
          document.createElement("li")
        );
        li.insertAdjacentElement("beforeend", a);

        var section = document.createElement("section");
        section.id = key;
        main.insertAdjacentElement("beforeend", section);
        var h2 = document.createElement("h2");
        h2.textContent = value.nombre;
        section.insertAdjacentElement("beforeend", h2);
        btnarriba(section);
        var ol = section.insertAdjacentElement(
          "beforeend",
          document.createElement("ol")
        );

        for (z of value.cursos) {
          if (z.realizado == "realizando") {
            realizandocurso();
          }
          if (z.realizado == "no" || z.realizado == undefined || z.realizado == "realizando") {
            var li = ol.insertAdjacentElement(
              "beforeend",
              document.createElement("li")
            );
            var a = li.insertAdjacentElement(
              "beforeend",
              document.createElement("a")
            );
            a.href = z.src;
            a.target = "_BLANK";
            a.textContent = z.nombre + "   ";
            cursosinlink(z.src,a);
            var span = a.insertAdjacentElement(
              "beforeend",
              document.createElement("span")
            );
            span.className = z.clase;
            span.textContent = z.escuela;
          } else {
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
          }
        }
      }
    });
  });
}

info();
//START Nueva Region
const $btncursos = document.querySelector("#boton-curso");

function datosNewCurso(id, nombre, clase, escuela) {
  var parametros = {
    id: id,
    nombre: nombre,
    clase: clase,
    escuela: escuela,
  };
  $.ajax({
    data: parametros, //datos que se envian a traves de ajax
    url: "editjson.php", //archivo que recibe la peticion
    type: "post", //método de envio
    success: function (response) {
      //una vez que el archivo recibe el request lo procesa y lo devuelve
      $("#resultado").html("Ingresado el nuevo curso");
      setTimeout(function () {
        $("#resultado").html("");
      }, 3000);
    },
    error: function (request, error) {
      $("#resultado").html("Error al relaizar la accion.");
      setTimeout(function () {
        $("#resultado").html("");
      }, 3000);
    },
  });
  document.getElementById("id").value = "";
  document.getElementById("nombre").value = "";
}

$btncursos.addEventListener("click", () => {
  datosNewCurso(
    $("#id").val(),
    $("#nombre").val(),
    $("#clase").val(),
    $("#escuela").val()
  );

  $(document).ready(function () {
    var refreshId = setInterval(function () {
      $("#main").load("main.php"); //actualizas el div
    }, 1000);
  });
});
//END Nueva Region
