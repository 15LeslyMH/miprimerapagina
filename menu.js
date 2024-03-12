fetch(menu.js)

//¿Que hace esta linea? Esta linea inicia la carga del archivomenu.json, fetch es una
//funcion de javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o un endpoint de API.
//¿Como funciona? Fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta JSON,
//si no un objeto de respuesta que incluye varios detalles sobre la respuesta que incluye varios detalles sobre la respuesta misma.

.then(response => response.json())
//¿Que hace? ESta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir
//el cuerpo de la respuesta en un objeto Javascript (Esto asume el cuerpo de la respuesta esta en formato JSON)


.then(data => {
     const menuContainer = document.getElementById ('menu-container');

    //¿Que hace? Aqui se procesan los datos JSON ya convertidos.
    //Se obtienen una referencia al contenedor de texto, y luego se añade este titulo al contenedor menu.
    data.item.forEach(category => {
        const categoryTittle = document.createElement ('h2');
        //¿Que hace? Aqui se crea un elemento H2, asigna el nombre de la categoria
        //como su contenido de texto, y luego se añade este titulo al contenedor menu
        categoryTittle.textContent = category.category;
        menuContainer.appendChild(categoryTittle);
        const table = document.createElement('tab');
        //¿Que hace? Se crea un elemento table para cada categoria. Ademas, se prepara el encabezado (tablehead) con las columnas
        //pertinentes, tablebody se inicializa vacio y se llenara con los elementos de la categoria.

        const tablehead = <tr><th>Fotos</th><th>Descripcion</th><th>Precio</th></tr>;
        let tablebody=';'
        
    });
})