const params = new URLSearchParams(window.location.search);
const cliente = params.get("cliente") || "andrea";

fetch(`clientes/${cliente}/data.json`)
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log("Datos cargados:", datos);
  })
  .catch(error => {
    console.error("Error al cargar los datos:", error);
  });
