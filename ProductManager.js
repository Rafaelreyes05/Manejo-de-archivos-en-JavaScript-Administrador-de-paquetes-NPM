import fs, { readFileSync } from 'fs'

export default class ProductManager {
    constructor(path) {
        this.path= path
    }

    readProducts(){
        let productos = readFileSync (this.path,'utf-8')
        productos = JSON.parse(productos)
        return productos
    }

    getProducts() {
        let productos = this.readProducts()
        console.log(productos)
    }

    writeProducts(productos){
        fs.writeFileSync(this.path,JSON.stringify(productos))
    }

    addProduct(producto) {
        let productos = this.readProducts()
        let repetido = false
        productos.forEach(item=>{
            if (item.title==producto.title){
                repetido = true
            }
        })
        if(repetido){
            console.warn("El producto ya ha sido ingresado")
        }
        else{
            producto.id = productos.length+1
            productos.push(producto)
            this.writeProducts(productos)
            console.log(`El producto ha sido ingresado con exito id:${producto.id}`)
        }
    }

    getProductBYId(id) {
        let productos = this.readProducts()
        productos.forEach(producto=>{
            if(producto.id==id){
                console.log(`El producto con id No. ${id} es: `)
                console.log(producto)
            }
        })


    }

    updateProduct(id,newProducto){
        let productos = this.readProducts()
        productos [id-1] = {
            title:newProducto.title,
            description: newProducto.description,
            price: newProducto.price,
            thumbnail:newProducto.thumbnail,
            code:newProducto.code,
            stock:newProducto.stock
        }

        this.writeProducts(productos)

    }

    deleteProduct(id){
        let productos = this.readProducts()
        delete (productos [id-1] )
        this.writeProducts(productos)
    }

    
}