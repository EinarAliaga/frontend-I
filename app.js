import axios from 'axios';

const button1 = document.getElementById('button1');
// 'https://crudcrud.com/api/c3e4cda4f22b4002bd6265f52a8b65e3/todos'
button1.onclick = async () => {
  try {
    const axiosResponse = await axios({
      method: 'GET',
      url: 'https://crudcrud.com/api/c3e4cda4f22b4002bd6265f52a8b653333/todos',
    });

    console.log(axiosResponse.data);
  } catch (error) {
    alert('Error al buscar tareas, intenta más tarde');
  }
};

/**
 * import -> importar paquetes o archivos
 * from -> de dónde se va a importar
 */
