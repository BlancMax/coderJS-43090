let ingreso = false;
function ingresar (ingreso){
let claveGuardada = "1985";
for(let i=2; i>=0; i--){
    let ingresoClave=prompt("Ingrese su clave. Tenés " + (i+1) + " oportunidades");
    if (ingresoClave===claveGuardada){
        alert("Bienvenido a Compendios del Infinito, ya podes elegir tus gustos!!");
        ingreso=true;
        break;
    }else{
        alert("Error, ingresa una opción valida");
    }
}
if (ingreso){
    let stockComics=20;
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

alert("Gracias por elegirnos! Te esperamos pronto con novedades...");
}
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

ingresar ();

