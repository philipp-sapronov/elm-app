import { CreateArticleDto } from './dto';
import { ArticleDbParams } from './schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { IArticle } from './interface';
type ArticleDocument = Document & IArticle;

/**
  _id: string;
  categories: Array<string>;
  content: string;
  createdAt: Date;
  preview: string;
  slug: string;
  status: ArticleStatus;
  tags: Array<string>;
  title: string;
  updatedAt: Date;
 */

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(ArticleDbParams.name) private readonly articlesModel: Model<ArticleDocument>,
  ) {}
  async findAll(): Promise<IArticle[]> {
    return this.articlesModel.find();
  }

  async findById(id: string): Promise<IArticle | null> {
    return this.articlesModel.findById(id);
  }

  async findBySlug(slug: string): Promise<IArticle | null> {
    return this.articlesModel.findOne({ slug });
  }

  async create(data: CreateArticleDto): Promise<IArticle> {
    const newTag = new this.articlesModel(data);

    return await newTag.save();
  }

  // async findBy() {}
  // async findOne() {}
  // async update(data: UpdateArticleDto) {}
  // async softDelete() {}
  // async delete() {}
}
