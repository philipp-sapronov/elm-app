import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";

import { CreateCategoryDto, UpdateCategoryDto, DeleteCategoryDto } from "./dto";
import { CategoryDbParams } from "./schema";
import { ICategory } from "./interface";
import { Status } from "../statuses/enums";

type ArticleDocument = Document & ICategory;

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(CategoryDbParams.name) private readonly categoriesModel: Model<ArticleDocument>
  ) {}
  async find(): Promise<ICategory[]> {
    return this.categoriesModel.find();
  }

  async findById(id: string): Promise<ICategory | null> {
    return this.categoriesModel.findById(id);
  }

  async create(data: CreateCategoryDto): Promise<ICategory> {
    const newTag = new this.categoriesModel(data);

    return await newTag.save();
  }

  async update(data: UpdateCategoryDto): Promise<ICategory> {
    return await this.categoriesModel.findByIdAndUpdate(data._id, data, {
      new: true
    });
  }

  async delete(data: DeleteCategoryDto): Promise<ICategory> {
    return await this.categoriesModel.findByIdAndUpdate(
      data.id,
      { status: Status.deleted },
      {
        new: true
      }
    );
  }
}
