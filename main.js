import ProductManager from "./ProductManager.js"
import {productoPrueba1,productoPrueba2,productoPrueba3} from "./productos-prueba.js"


//Crear Instancia
let tienda = new ProductManager('./productos.json')

//Llamar todos los productos
console.log('Obteniendo todos los elementos:')
tienda.getProducts()

//Agregar Objeto
console.log('Agregando un elemento:')
tienda.addProduct(productoPrueba1)
tienda.getProducts()

//Objeto Repetido
console.log('Intentando Agregar un elemento repetido:')
tienda.addProduct(productoPrueba1)

//Agregar un nuevo producto
console.log('Agregando un nuevo elemento:')
tienda.addProduct(productoPrueba2)
tienda.getProducts()

//Buscar por Id
console.log('Buscar elemento por ID:')
tienda.getProductBYId(2)

//Actualizar un elemento
console.log('Actualizando elemento:')
tienda.updateProduct(2,productoPrueba3)
tienda.getProducts()

//Eliminar un elemento un elemento
console.log('Eliminando elemento:')
tienda.deleteProduct(2,productoPrueba3)
tienda.getProducts()


