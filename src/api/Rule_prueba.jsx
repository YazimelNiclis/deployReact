import API from "./Rule_API";

export const consultarHora = async () => {
  let url = "/api";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error en la consulta";
    });
};
