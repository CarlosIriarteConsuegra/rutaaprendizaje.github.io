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
  var cant = 0;
  if (link == ""){
    var span = contenedor.insertAdjacentElement(
      "beforeend",
      document.createElement("span")
    );
    span.id = "sinlink";
    span.textContent = "!SIN LINK¡";
    var cant = 1;
  }
  return cant
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
  var cant = 0;
  var cantSinRealizar = 0;
  var cantSinLink = 0;
  jQuery.get("https://carlosiriarteconsuegra.github.io/rutaaprendizaje.github.io/cursos.json", function (data) {
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
          cant += 1;
          if (z.realizado == "realizando") {
            realizandocurso();
          }
          if (z.realizado == "no" || z.realizado == undefined || z.realizado == "realizando") {
            cantSinRealizar += 1;
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
            cantSinLink += cursosinlink(z.src,a);
            var span = a.insertAdjacentElement(
              "beforeend",
              document.createElement("span")
            );
            span.className = z.clase;
            span.textContent = z.escuela;
          }
        }
      }
    });
    var canttag = main.insertAdjacentElement("beforeend", document.createElement("span"));
    canttag.textContent = "Cantidad Total Cursos " + cant;
    main.insertAdjacentElement("beforeend", document.createElement("br"));
    main.insertAdjacentElement("beforeend", document.createElement("br"));

    var cantRealizadostag = main.insertAdjacentElement("beforeend", document.createElement("span"));
    cantRealizadostag.textContent = "Cantidad Cursos Realizados " + (cant - cantSinRealizar);
    main.insertAdjacentElement("beforeend", document.createElement("br"));

    var cantSinRealizartag = main.insertAdjacentElement("beforeend", document.createElement("span"));
    cantSinRealizartag.textContent = "Cantidad Cursos Sin Realizar " + cantSinRealizar;
    main.insertAdjacentElement("beforeend", document.createElement("br"));
    main.insertAdjacentElement("beforeend", document.createElement("br"));

    var cantSinLinktag = main.insertAdjacentElement("beforeend", document.createElement("span"));
    cantSinLinktag.textContent = "Cantidad Cursos Con Link " + (cant - cantSinLink);
    main.insertAdjacentElement("beforeend", document.createElement("br"));

    var cantSinLinktag = main.insertAdjacentElement("beforeend", document.createElement("span"));
    cantSinLinktag.textContent = "Cantidad Cursos Sin Link " + cantSinLink;
    main.insertAdjacentElement("beforeend", document.createElement("br"));
  });
  
}

info();
