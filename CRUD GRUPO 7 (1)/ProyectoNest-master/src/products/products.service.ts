import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    private products: Product[] = [
      {
        id:"1",
        nombre: "Laptop",
        marca: "Dell",
        precio: "1200.50",
        disponible: "true",
        modelo: "Inspiron 15",
        procesador: "Intel Core i7",
        almacenamiento: "512GB SSD"
       },
       {
        id:"2",
        nombre: "Laptop",
        marca: "Dell",
        precio: "1200.50",
        disponible: "true",
        modelo: "Inspiron 15",
        procesador: "Intel Core i7",
        almacenamiento: "512GB SSD"
       },
    ];

    findAll(){
        return this.products;
    }

    findOne(id: string){
        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return product;
    }

    create(createProductDto: CreateProductDto) {
      const product: Product={
        id: createProductDto.id,
        nombre: createProductDto.nombre,
        marca: createProductDto.marca,
        precio: createProductDto.precio,
        disponible:createProductDto.disponible,
        modelo: createProductDto.modelo,
        procesador: createProductDto.procesador,
        almacenamiento: createProductDto.almacenamiento
        
    }

    this.products.push(product);

    return product;}

    update(id: string, updateproductrDto: UpdateProductDto){
            let prodcutDB = this.findOne(id);
    
            if(updateproductrDto.id && updateproductrDto.id !== id)
                throw new BadRequestException(`El id del carro no es válido`)
    
            this.products = this.products.map(productos =>{
                if(productos.id===id){
                    prodcutDB = {...prodcutDB, ...updateproductrDto, id}
                    return prodcutDB;
                }
                return productos;
            })
            return prodcutDB;
        }
    

        delete(id:string){
          const product = this.findOne(id);
          this.products = this.products.filter(prod => prod.id !== id);
          console.log({product})
      }
}
