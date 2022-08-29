




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
console.log("El total de las vetas es de: ", venta_total);




class Producto {
    constructor(){


    }

}

class Venta {
    constructor(){


    }
}
