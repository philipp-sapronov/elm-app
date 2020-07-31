import { CategoryService } from "./service";
import { CreateCategoryDto, UpdateCategoryDto, DeleteCategoryDto } from "./dto";
import { Controller, Get, Param, Post, Body, Put } from "@nestjs/common";
import { ICategory } from "./interface";

@Controller("categories")
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Get()
  async get(): Promise<ICategory[]> {
    return this.categoriesService.find();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<ICategory> {
    return this.categoriesService.findById(id);
  }

  @Post("add")
  async add(@Body() data: CreateCategoryDto /* use validation pipe */): Promise<ICategory> {
    return await this.categoriesService.create(data);
  }

  @Post("update")
  async update(@Body() data: UpdateCategoryDto /* use validation pipe */): Promise<ICategory> {
    return await this.categoriesService.update(data);
  }

  @Post("delete")
  async delete(@Body() data: DeleteCategoryDto /* use validation pipe */): Promise<ICategory> {
    return await this.categoriesService.delete(data);
  }
}
