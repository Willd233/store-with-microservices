import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../global/dtos/product/createProduct.dto';
import { UpdateProductDto } from '../global/dtos/product/updateProduct.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductType } from '../global/types';
import { ProductFilterDto } from '../global/dtos/product/productFilter.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModule: Model<ProductType>,
  ) {}

  async getProducts(query: ProductFilterDto): Promise<ProductType[]> {
    const { search, page = 1, limit = 10 } = query;

    if (page < 1 || limit < 1) {
      throw new Error('Invalid page or limit values');
    }
    const productQuery: any = {};
    if (search) {
      productQuery.name = { $regex: new RegExp(search, ' i') };
    }

    const skip = (page - 1) * limit;
    const products = await this.productModule
      .find(productQuery)
      .skip(skip)
      .limit(limit);
    return products;
  }

  async getProduct(id: string): Promise<ProductType> {
    const product = await this.productModule.findById(id);
    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<CreateProductDto> {
    const existProduct = this.productModule.findOne({
      name: createProductDto.name,
    });
    if (existProduct) {
      throw new HttpException('Product already exists', HttpStatus.CONFLICT);
    }

    const product = new this.productModule(createProductDto);
    return await product.save();
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<UpdateProductDto> {
    const updateProduct = await this.productModule.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    return updateProduct;
  }

  async deleteProduct(id: string) {
    const deleteProduct = await this.productModule.findByIdAndDelete(id);

    return deleteProduct;
  }
}
