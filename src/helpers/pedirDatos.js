import mock_data from "../data/MOCK_DATA.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (bool) {
      resolve(mock_data);
      // } else {
      //  reject("Promesa rechasada");
      //}
    }, 2000);
  });
};
