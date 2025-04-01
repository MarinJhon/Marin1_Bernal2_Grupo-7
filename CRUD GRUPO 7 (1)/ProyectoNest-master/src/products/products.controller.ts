import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(
            private readonly prodcutsService: ProductsService
        ){}
    
        @Get()
        getAllCars(){
            return this.prodcutsService.findAll()
        }
    
        @Get('id/:id')
        getProductById(@Param('id', ParseUUIDPipe)id:string){
            console.log({id})
            //throw new Error('Auxilio!')
            return this.prodcutsService.findOne(id);
        }
    
        @Get('brand/:brand')
        getCarByBrand(@Param('brand')brand){
            console.log({brand})
            return this.prodcutsService.findOne(brand);
        }
    
    
        @Post()
        //@UsePipes(ValidationPipe)
        createCar(@Body() createProductoDto:CreateProductDto){
            return this.prodcutsService.create(createProductoDto);
        }
    
        @Patch('id/:id')
        updateCar(
            @Param('id', ParseUUIDPipe) id:string,
            @Body() updateProductoDto: UpdateProductDto){
            return this.prodcutsService.update(id, updateProductoDto);
        }
    
        @Delete('id/:id')
        deleteCar(@Param('id', ParseUUIDPipe) id:string){
            return this.prodcutsService.delete(id);
        }
    }

