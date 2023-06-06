import { read, utils } from "xlsx";
import { ref } from "vue";

function handleArchivoExcel (event) {
    const resultados = ref([]);
    const archivo = event.target.files[0];
    const reader = new FileReader();

  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

    const datos = jsonData.slice(1);
    resultados.value = datos;

    console.log(datos);
  };

  reader.readAsArrayBuffer(archivo);
  console.log(reader);

  return resultados;
};

export default handleArchivoExcel ;
