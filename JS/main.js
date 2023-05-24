let ingreso = false;
function ingresar (ingreso){
    let claveGuardada = "1985";
    for(let i=2; i>=0; i--){
        let ingresoClave=prompt("Ingrese su clave. Tenés " + (i+1) + " oportunidades");
        if (ingresoClave===claveGuardada){
            alert("Bienvenido a Comics World´s, ya podes elegir tus gustos!!");
            ingreso=true;
            break;
        }else{
            alert("Error, ingresa una opción valida");
        }
    }
    if (ingreso){
        const articulos =[
        {id: 1, nombre: "Comic Spider Man", precio: 1000, cat: "comic"},
        {id: 2, nombre: "Comic Superman", precio: 1100, cat: "comic"},
        {id: 3, nombre: "Comic X-Men", precio: 1300, cat: "comic"},
        {id: 4, nombre: "Miniatura Spider Man", precio: 2500, cat: "miniatura"},
        {id: 5, nombre: "Miniatura Superman", precio: 2550, cat: "miniatura"},
        {id: 6, nombre: "Miniatura X-Men", precio: 3100, cat: "miniatura"},
        {id: 7, nombre: "Juegos de Mesa Spider Man", precio: 5000, cat: "juegos de mesa"},
        {id: 8, nombre: "Juegos de Mesa Superman", precio: 5200, cat: "juegos de mesa"},
        {id: 9, nombre: "Juegos de Mesa X-Men", precio: 5700, cat: "juegos de mesa"},
    ];

    function articulo(nombre, precio, cat){
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        if (cat){
            this.cat=cat;
        }else{
            alert("Esa categoría no existe");
        }
    }
    function cargarArticulo(){
        let nombre=prompt("Ingrese el artículo que desea cargar");
        let precio=prompt("Ingrese el precio del artículo");
        let cat=prompt("Ingrese la categoría del articulo");

        const nuevoArt=new articulo(nombre, precio, cat);

        return nuevoArt;
    }
    articulos.push(nuevoArt);

    function buscar(arr, filtro, param) {
        return arr.filter((el) => {
        if (param === "id") {
            return el.id == filtro;
        } else if (param === "precio") {
            return el.precio <= filtro;
        } else {
            return el[param].includes(filtro);
        }
        });
    }
}  
}
/*     let stockComics=20;
    let stockMiniaturas=20;
    let stockJuegos=20;
    let opcion=prompt("Elegí una opción: \n1- Comics. \n2 - Miniaturas. \n3 - Juegos. \nPresiona X para salir de tu cuenta.");
    while (opcion !="X"){
        switch (opcion){
            case "1":
                let compraComics=parseInt(prompt("Ingresa la cantidad de Comics que deseas..."));
                alert("Compra exitosa, elegiste " + compraComics);
                console.log(stockComics-compraComics);
            break;
            case "2":
                let compraMiniaturas=parseInt(prompt("Ingresa la cantidad de Miniaturas que deseas..."));
                alert("Compra exitosa, elegiste " + compraMiniaturas);
                console.log(stockMiniaturas-compraMiniaturas);
            break;
            case "3":
                let compraJuegos=parseInt(prompt("Ingresa la cantidad de Juegos que deseas..."));
                alert("Compra exitosa, elegiste " + compraJuegos);
                console.log(stockJuegos-compraJuegos);
            break;
            default:
                alert ("Opción no valida");
            break   
        }
        opcion=prompt("Elegí una opción: \n1- Comics. \n2 - Miniaturas. \n3 - Juegos. \nPresiona X para salir de tu cuenta.");
    }

}else{
    alert("No podes ingresar hasta que podamos validar tu identidad");
}

alert("Gracias por elegirnos! Te esperamos pronto con novedades..."); */

ingresar ();

  


