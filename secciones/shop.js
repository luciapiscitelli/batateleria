
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

console.log(costo_envio(costo_producto))




/*function calculo_envio (lugar_envio){
    if (lugar_envio == "CABA") {
       let costo_envio = precio_producto* 0.1
       return costo_envio
    }
    else if (lugar_envio == "GBA"){
        costo_envio = precio_producto* 0.15
       return costo_envio
    }

}



precio_producto = 
lugar=prompt("Indique CABA o GBA")

console.log= (precio_producto)
console.log=(calculo_envio(lugar)+ precio_producto) 
*/
