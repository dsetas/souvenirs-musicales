const params = new URLSearchParams(window.location.search);
const cliente = params.get("cliente") || "Andrea";

fetch(`clientes/${cliente}/data.json`)
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error("No se pudo cargar data.json");
    }

    return respuesta.json();
  })

  .then(datos => {

    document.title = datos.titulo;

    document.getElementById("imagen").src =
      `clientes/${cliente}/${datos.imagen}`;

    document.getElementById("titulo").textContent =
      datos.titulo;

    document.getElementById("subtitulo").textContent =
      datos.subtitulo;

    document.getElementById("frase").textContent =
      datos.frase;

    document.getElementById("reproductor").src =
      `clientes/${cliente}/${datos.audio}`;

    const descargar =
      document.getElementById("descargar");

    descargar.href =
      `clientes/${cliente}/${datos.descarga}`;

    descargar.textContent =
      datos.botonDescarga;

    document.getElementById("dedicatoria").textContent =
      datos.dedicatoria;

    document.getElementById("fecha").textContent =
      datos.fecha;

    document.getElementById("letra").textContent =
      datos.letra;

    const botonLetra =
      document.getElementById("botonLetra");

    const seccionLetra =
      document.getElementById("seccionLetra");

    botonLetra.addEventListener("click", () => {

      if (seccionLetra.hidden) {
        seccionLetra.hidden = false;
        botonLetra.textContent = "Ocultar letra";
      } else {
        seccionLetra.hidden = true;
        botonLetra.textContent = "Ver letra";
      }

    });

  })

  .catch(error => {

    console.error(error);

    document.getElementById("titulo").textContent =
      "No se pudo cargar el recuerdo";

  });
