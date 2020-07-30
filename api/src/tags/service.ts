import { CreateTagDto, UpdateTagDto } from './dto';
import { TagsDbParams } from './schema';
import { ITag } from './interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

type TagDocument = Document & ITag;

@Injectable()
export class TagsService {
  constructor(@InjectModel(TagsDbParams.name) private readonly tagsModel: Model<TagDocument>) {}
  async find(): Promise<ITag[]> {
    return this.tagsModel.find();
  }

  async findOne(): Promise<ITag | null> {
    return this.tagsModel.findOne();
  }

  async findById(id: string): Promise<ITag | null> {
    return this.tagsModel.findById(id);
  }

  async create(data: CreateTagDto): Promise<ITag> {
    const newTag = new this.tagsModel(data);

    return await newTag.save();
  }

  async update(data: UpdateTagDto) {}
  async softDelete() {}
  async delete() {}
}
