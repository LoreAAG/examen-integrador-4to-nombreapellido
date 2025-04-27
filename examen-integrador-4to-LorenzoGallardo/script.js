
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  const proyectosKey = 'proyectos';
  const lista = document.getElementById('proyectos-lista');
  const form = document.getElementById('form-proyecto');
  
  function cargarProyectos() {
    const data = JSON.parse(localStorage.getItem(proyectosKey)) || [];
    lista.innerHTML = '';
    data.forEach((proyecto, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <button onclick="eliminarProyecto(${index})">Eliminar</button>
      `;
      lista.appendChild(div);
    });
  }
  
  function agregarProyecto(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const data = JSON.parse(localStorage.getItem(proyectosKey)) || [];
    data.push({ titulo, descripcion });
    localStorage.setItem(proyectosKey, JSON.stringify(data));
    form.reset();
    cargarProyectos();
  }
  
  function eliminarProyecto(index) {
    const data = JSON.parse(localStorage.getItem(proyectosKey)) || [];
    data.splice(index, 1);
    localStorage.setItem(proyectosKey, JSON.stringify(data));
    cargarProyectos();
  }
  
  form.addEventListener('submit', agregarProyecto);
  cargarProyectos();