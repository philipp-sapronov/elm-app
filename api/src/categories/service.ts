import { CreateCategoryDto } from './dto';
import { CategoryDbParams } from './schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { ICategory } from './interface';

type ArticleDocument = Document & ICategory;

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(CategoryDbParams.name) private readonly categoriesModel: Model<ArticleDocument>,
  ) {}
  async findAll(): Promise<ICategory[]> {
    return this.categoriesModel.find();
  }

  async findById(id: string): Promise<ICategory | null> {
    return this.categoriesModel.findById(id);
  }

  async create(data: CreateCategoryDto): Promise<ICategory> {
    const newTag = new this.categoriesModel(data);

    return await newTag.save();
  }

  // async findBy() {}
  // async findOne() {}
  // async update(data: UpdateArticleDto) {}
  // async softDelete() {}
  // async delete() {}
}
