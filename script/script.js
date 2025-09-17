// CODIGO 1
// //crear el array maquinarias
// const maquinarias=[
//     "Torno Paralelo",
//     "Fresadora",
//     "Pantografo",
//     "Taladro de banco",
//     "Robot soldador"
// ]
// //ordenar el array maquinarias de A a Z
// maquinarias.sort()


// //imprimir la maquinaria en el indice 3
// console.log(maquinarias[3]);

// maquinarias.push("Abulonadora");

// function agregar(){
//     const agregar=prompt("Ingrese la maquinaria a agregar");
//     maquinarias.push(agregar);
//     mostrardatos();

// }

// function borrar(){
//     maquinarias.pop();
//     mostrardatos();
// }

// function mostrardatos(){
//     const imprimirDatos = prompt("Ingrese 1 para Imprimir los datos?")
    
//     if (imprimirDatos==="1") {
//         console.log (maquinarias);
//     }
// }

// let   opcion=parseInt(prompt("Ingrese una opciòn de edición: \n 1 para agregar \n 2 para borrar el ultimo registro \n 3 SALIR "))

// while (opcion!==3){
//     switch (opcion) {
//         case 1:
//             agregar()
//             break;

//         case 2:
//             borrar()
//             break;

//         default:
//             alert("No es una opciòn valida")
//             break;
//     }
//     opcion=parseInt(prompt("Ingrese una opciòn de edición: \n 1 para agregar \n 2 para borrar el ultimo registro \n 3 SALIR "))
// }



// CODIGO 2

// //crear el array maquinarias
// const maquinarias=[
//     "Torno Paralelo",
//     "Fresadora",
//     "Pantografo",
//     "Taladro de banco",
//     "Robot soldador"
// ]
// //ordenar el array maquinarias de A a Z
// maquinarias.sort()

// const sectores=[
//     "Taller Mecánica",
//     "Taller Carpintería",
//     "Taller Herrería",
//     "Taller Electricidad",
//     "Depósito"
// ]

// //funciòn para agregar datos a los array
// function agregar(tabla){
//     let agregar
//     if (tabla===maquinarias){
//         agregar=prompt("Ingrese el nombre de la maquinaria a agregar");
//     }else if (tabla===sectores){
//        agregar=prompt("Ingrese el nombre del nuevo sector a agregar"); 
//     }
//     tabla.push(agregar);
//     mostrardatos(tabla);

// }

// //funciòn para borrar datos de los array
// function borrar(tabla){
//     tabla.pop();
//     mostrardatos(tabla);
// }

// //funciòn para visualizar los datos
// function mostrardatos(tabla){
//     const imprimirDatos = prompt("Ingrese 1 para Imprimir los datos?")
    
//     if (imprimirDatos==="1") {
//         console.log (tabla.join(" - "));
//     }
// }

// let   opcion=parseInt(prompt("Ingrese una opción de edición: \n 1 = Agregar Maquinarias \n 2 = Borrar el ultimo registro de Maquiarias \n 3 = Agregar Sectores \n 4 = Borrar el ultimo sector \n 5 SALIR "))

// while (opcion!==5){
//     switch (opcion) {
//         case 1:
//             agregar(maquinarias)
//             break;

//         case 2:
//             borrar(maquinarias)
//             break;
//         case 3:
//             agregar(sectores)
//             break;

//         case 4:
//             borrar(sectores)
//             break;

//         default:
//             alert("No es una opciòn valida")
//             break;
//     }
//     opcion=parseInt(prompt("Ingrese una opciòn de edición: \n 1 = Agregar Maquinarias \n 2 = Borrar el ultimo registro de Maquiarias \n 3 = Agregar Sectores \n 4 = Borrar el ultimo sector \n 5 SALIR "))
// }

// function VerificarExistencia (tabla,nombreTabla){
//     let DatoABuscar

//     if (tabla===maquinarias){
//         DatoABuscar=prompt("Ingrese el nombre de la Maquinaria a buscar")

//     }else if (tabla===sectores){
//        DatoABuscar=prompt("Ingrese el nombre del Sector a buscar")
//     }
    
//     if (tabla.includes(DatoABuscar)==true){
//         alert("Se encontró el registro en la tabla " + nombreTabla)
//     } else{
//         alert("No se encuentra el registro en la tabla "+ nombreTabla)
//     }

// }

// let  accion=parseInt(prompt("Ingrese una opción para verificar la existencia en los registros: \n 1 = Verificar la existencia de una Maquinarias \n 2 = Verificar la existencia de una sección \n 3 SALIR "))

// while (accion!==3){
//     switch (accion) {
//         case 1:
//             VerificarExistencia(maquinarias,"Maquinarias")
//             break;

//         case 2:
//             VerificarExistencia(sectores,"Sectores")
//             break;

//         default:
//             alert("No es una opción valida")
//             break;
//     }
//     accion=parseInt(prompt("Ingrese una opción para verificar la existencia en los registros: \n 1 = Verificar la existencia de una Maquinarias \n 2 = Verificar la existencia de una sección \n 3 SALIR "))
// }


// CODIGO 3

//crear el array maquinarias
const maquinarias=[
    "Torno Paralelo",
    "Fresadora",
    "Pantografo",
    "Taladro de banco",
    "Robot soldador"
]
//ordenar el array maquinarias de A a Z
maquinarias.sort()

const sectores=[
    "Taller Mecánica",
    "Taller Carpintería",
    "Taller Herrería",
    "Taller Electricidad",
    "Depósito"
]

//funciòn para agregar datos a los array
function agregar(tabla){
    let agregar
    if (tabla===maquinarias){
        agregar=prompt("Ingrese el nombre de la maquinaria a agregar");
    }else if (tabla===sectores){
       agregar=prompt("Ingrese el nombre del nuevo sector a agregar"); 
    }
    tabla.push(agregar);
    mostrardatos(tabla);

}

//funciòn para borrar datos de los array
function borrar(tabla){
    tabla.pop();
    mostrardatos(tabla);
}

//funciòn para visualizar los datos
function mostrardatos(tabla){
    const imprimirDatos = prompt("Ingrese 1 para Imprimir los datos?")
    
    if (imprimirDatos==="1") {
        console.log(tabla.join(" - "));
    }
}

function VerificarExistencia (tabla,nombreTabla){
    let DatoABuscar

    if (tabla===maquinarias){
        DatoABuscar=prompt("Ingrese el nombre de la Maquinaria a buscar")

    }else if (tabla===sectores){
       DatoABuscar=prompt("Ingrese el nombre del Sector a buscar")
    }
    
    if (tabla.includes(DatoABuscar)==true){
        alert("Se encontró el registro en la tabla " + nombreTabla)
    } else{
        alert("No se encuentra el registro en la tabla "+ nombreTabla)
    }

}

let menu=parseInt(prompt(">>MENU<< \n Ingrese: \n 1 para visualizar todas las Maquinarias \n 2 para visualizar todos los sectores \n 3 para editar registros \n 4 para Buscar registros \n 5 para SALIR"))

while (menu!==5){

    switch (menu){
        case 1:
            mostrardatos(maquinarias);
            break;
        
        case 2:
            mostrardatos(sectores);
            break;

        case 3:
            let   opcion=parseInt(prompt("Ingrese una opción de edición: \n 1 = Agregar Maquinarias \n 2 = Borrar el ultimo registro de Maquiarias \n 3 = Agregar Sectores \n 4 = Borrar el ultimo sector \n 5 SALIR "))

            while (opcion!==5){
                switch (opcion) {
                    case 1:
                        agregar(maquinarias)
                        break;

                    case 2:
                        borrar(maquinarias)
                        break;
                    case 3:
                        agregar(sectores)
                        break;

                    case 4:
                        borrar(sectores)
                        break;

                    default:
                        alert("No es una opciòn valida")
                        break;
                }
                opcion=parseInt(prompt("Ingrese una opciòn de edición: \n 1 = Agregar Maquinarias \n 2 = Borrar el ultimo registro de Maquiarias \n 3 = Agregar Sectores \n 4 = Borrar el ultimo sector \n 5 SALIR "))
            }
            
            break;    
        
        case 4:

            let  accion=parseInt(prompt("Ingrese una opción para verificar la existencia en los registros: \n 1 = Verificar la existencia de una Maquinarias \n 2 = Verificar la existencia de una sección \n 3 SALIR "))

            while (accion!==3){
                switch (accion) {
                    case 1:
                        VerificarExistencia(maquinarias,"Maquinarias")
                        break;

                    case 2:
                        VerificarExistencia(sectores,"Sectores")
                        break;

                    default:
                        alert("No es una opción valida")
                        break;
                }
                accion=parseInt(prompt("Ingrese una opción para verificar la existencia en los registros: \n 1 = Verificar la existencia de una Maquinarias \n 2 = Verificar la existencia de una sección \n 3 SALIR "))
            }
            
            break;
            
        default:
            alert("No es una opciòn valida");
            break;
    }

    menu=parseInt(prompt(">>MENU<< \n Ingrese: \n 1 para visualizar todas las Maquinarias \n 2 para visualizar todos los sectores \n 3 para editar registros \n 4 para Buscar registros \n 5 para SALIR"))
}