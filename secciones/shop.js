
let btnCompra = document.querySelectorAll(".botonCompra");
for( let boton of btnCompra){

    boton.addEventListener("click" , agregar_carrito);
}

let carrito = [];

function agregar_carrito(e){
    console.log("EL EVENTO ESTA EN:" , e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    
    let nombre_producto = padre.querySelector(".nombreProducto").textContent;
    
    let precio = padre.querySelector("span").textContent;
    
    let img = abuelo.querySelector("img").src;
    
    let producto = {
        nombre:nombre_producto,
        img:img,
        precio: precio,
        cantidad:1
    };


    carrito.push(producto);
    

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito" , arreglo_JSON);

    console.log( carrito);
    
    mostrar_carrito( producto );
}

function mostrar_carrito( producto){

    let fila = document.createElement("tr");

     fila.innerHTML = `<td><img src="${producto.img}"></td>
                       <td>${producto.nombre }</td>
                       <td>${producto.cantidad}</td>
                       <td>${producto.precio}</td>
                       <td><button class="btn-danger borrar_elemento">Borrar</button></td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    let total= document.getElementById("total");
    


    let botones_borrar = document.querySelectorAll(".borrar_elemento");

    for( let boton of botones_borrar){

        boton.addEventListener("click" , borrar_producto);
    }

}




function borrar_producto(e){

    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
}

let btn_carrito = document.getElementById("mostrar_carrito");

btn_carrito.addEventListener("click" , function(){

    let carrito = document.getElementById("carrito");

    carrito.style.display != "none" ? carrito.style.display =  "none" : carrito.style.display = "flex";
   /* if(carrito.style.display != "none"){
        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "flex";   
     }*/


})
/*
Swal.fire({

    title: "Bienvenido al Shop",
    showClass: {
        popup: 'animate__animated animate__bounceInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__hinge'
      }
    
}

) ;*/

let clima =document.getElementById("clima");
let ciudad= "Buenos Aires"


fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=aa3bba92f69300fdc2d75e043aba9c5a")
    .then ( response => response.json())
    .then (data => {
        clima.innerHTML = `<span> Ciudad: ${data.name} </span>
                            <span>Temperatura: ${data.main.temp}</span>` 
    })




/*
Toastify({

    text: "Instagram",
    
    duration: 10000,
    destination: 

    
    }).showToast();



*/


/*//array de objetos

let usuarios = [
    {nombre:"Lucia" , apellido:"Piscitelli" , edad:18},
    {nombre:"Juan" , apellido:"Lopez" , edad:40},
    {nombre:"Matias" , apellido:"Gonzalez" , edad:15},
    {nombre:"Alejandro" , apellido:"Gimenes" , edad:42},
    {nombre:"Mirian" , apellido:"Alvarez" , edad:16},
    {nombre:"Belen" , apellido:"Cesale" , edad:10},
    {nombre:"Lucas" , apellido:"Pare" , edad:28},
    {nombre:"Santiago" , apellido:"Lajud" , edad:23}
];

//CONCAT

let nueva_lista = [{nombre:"Juan Cruz" , apellido:"Lajud" , edad:18}];

let resultado_concat = usuarios.concat(nueva_lista);
console.log("LISTA CONCATENADA: ", resultado_concat);*/





/*
    let producto= prompt("Ingrese el producto a comprar");
    let precio_producto= parseInt (prompt("Ingrese el precio del producto")) ; 
    let cantidad= parseInt (prompt("Ingrese cantidad que desea comprar")); 
    let lugar= prompt("Indique entrega en CABA o GBA");




    
    function costo_producto (precio_producto, cantidad){
    let precio = precio_producto * cantidad;
    return precio

    }



    function costo_envio (){
    if (lugar == "CABA"){
        let precio_total = (costo_producto (precio_producto, cantidad))*1.10
        return ("El precio final de "+ producto + " es de $"+ precio_total+ " que disfrute su compra")
    }
    else if (lugar == "GBA"){
        precio_total = (costo_producto(precio_producto, cantidad))*1.20
        return ("El precio final de " + producto + " es de $" + precio_total + " que disfrute su compra")

    }

    }





console.log(costo_envio(costo_producto));


//filter

let arr_usuarios = [
    {nombre:"Lucia" , apellido:"Piscitelli" , edad:18},
    {nombre:"Juan" , apellido:"Lopez" , edad:40},
    {nombre:"Matias" , apellido:"Gonzalez" , edad:15},
    {nombre:"Alejandro" , apellido:"Gimenes" , edad:42},
    {nombre:"Mirian" , apellido:"Alvarez" , edad:16},
    {nombre:"Belen" , apellido:"Cesale" , edad:10},
    {nombre:"Lucas" , apellido:"Pare" , edad:28},
    {nombre:"Santiago" , apellido:"Lajud" , edad:23}
];


function mayor ( usuario ){
      
    return usuario.edad >= 18
}


let filtro_edad = arr_usuarios.filter( mayor );
console.log(filtro_edad);

//reduce


let ventas = [
    {nombre:"Brownie" , precio:1000},
    {nombre:"Cheescake" , precio:5500},
    {nombre:"Lemon Pie" , precio:3500},
    {nombre:"Sablee de Almendras" , precio:3600},
    {nombre:"Torta Oreo" , precio:6000},
    {nombre:"Torta Brownie, dulce de leche y crema" , precio:3600}
];


function total_compra ( acu , producto ){

    acu = acu + producto.precio;
    return acu
}

let venta_total = ventas.reduce( total_compra , 0 );
console.log("El total de las vetas es de: ", venta_total);*/




