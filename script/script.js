//crear arrar para datos de usuarios
const UsuariosNombres=[
    "Luis Miguel",
    "Juan Gomez",
    "Pedro Ortiz",
    "Esteban Cettour"
]
const UsuariosAlias=[
    "luis123",
    "juan25",
    "pedrosj",
    "esteban5"
]
const UsuariosAñoNac=[
    1987,
    2000,
    1993,
    1978
]
const UsuariosContraseña=[
    "lu87",
    "ju00",
    "pe93",
    "es78"
]

//tomar los datos del usuario
const aliasusuario=prompt("Ingrese el Alias de usuario")
const passUsuario=prompt("Ingrese la contraseña de usuario")

//calcular la edad
const ANac = edad => (2025 - edad);

//variable para verificar si el acceso fue exitoso
let EstadoAcceso=false
//Menu acceder al sistema..
function acceder(aliasusuario,passUsuario){
    
    const idd=UsuariosAlias.indexOf(aliasusuario)

    if ((idd!==-1) && (UsuariosContraseña[idd]===passUsuario)){
        const edadactual=ANac(UsuariosAñoNac[idd])
        EstadoAcceso=true
        console.log("Bienvenido/a "+ UsuariosNombres[idd]+". Actualmente tienes "+ edadactual + " años.")
        
    }else{ 
        EstadoAcceso=false
        console.log("Error de usuario y contraseña")
    }
}

//llamada a la función Acceder
acceder(aliasusuario,passUsuario)

//Ideas de un sistema de registro de inventarios
//crear el array maquinarias
const maquinarias=[
    "Torno Paralelo",
    "Fresadora",
    "Pantografo",
    "Taladro de banco",
    "Robot soldador"
]

//ordenar las maquinarias de A a Z
maquinarias.sort()

//Sector de las maquinarias
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

//Verificar la Existencia de registros en tablas
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

//Editar registros segùn la tabla
function EditarRegistros(opcion){
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
}

//Buscar registros en las tablas
function BuscarRegistros(accion){
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
}

//Funciòn Menu principal
function MenuPrincipal(menu){
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
                EditarRegistros(opcion)
                break;    
            
            case 4:
                let  accion=parseInt(prompt("Ingrese una opción para verificar la existencia en los registros: \n 1 = Verificar la existencia de una Maquinarias \n 2 = Verificar la existencia de una sección \n 3 SALIR "))
                BuscarRegistros(accion)
                break;

            default:
                alert("No es una opciòn valida");
                break;
        }

        menu=parseInt(prompt(">>MENU<< \n Ingrese: \n 1 para visualizar todas las Maquinarias \n 2 para visualizar todos los sectores \n 3 para editar registros \n 4 para Buscar registros \n 5 para SALIR"))
    }
}

if (EstadoAcceso==true){
    //Solicitar datos del MUNU PRINCIPAL para realizar acciones
    let menu=parseInt(prompt(">>MENU<< \n Ingrese: \n 1 para visualizar todas las Maquinarias \n 2 para visualizar todos los sectores \n 3 para editar registros \n 4 para Buscar registros \n 5 para SALIR"))

    //Llamada al menu
    MenuPrincipal(menu)
}else{
    console.log("No se ha podido validar los datos. \nAcceso no concedido.")
}