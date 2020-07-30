import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ICategory } from './interface';

@Controller('categories')
export class CategoryController {
  @Get()
  async find(): Promise<ICategory[]> {
    return [] as ICategory[];
  }

  @Get(':id')
  async findOne(@Param('slug') slug: string): Promise<ICategory> {
    return {} as ICategory;
  }

  @Post()
  async create(@Body() data: CreateCategoryDto /* use validation pipe */): Promise<ICategory> {
    return {} as ICategory;
  }

  @Put()
  async update(@Body() data: UpdateCategoryDto /* use validation pipe */): Promise<ICategory> {
    return {} as ICategory;
  }
}
