import { ArticlesService } from "./service";
import { CreateArticleDto, UpdateArticleDto, DeleteArticleDto } from "./dto";
import { Controller, Get, Param, Query, Post, Body, Put } from "@nestjs/common";
import { IArticle } from "./interface";

@Controller("posts")
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}
  // @Query('t') tags?: string | string[],
  //  @Query("q") query?: string
  // @Query('c') categories?: string | string[],
  @Get()
  async get(): Promise<IArticle[]> {
    return this.articlesService.find();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<IArticle> {
    return this.articlesService.findById(id);
  }

  @Post("add")
  async create(@Body() data: CreateArticleDto /* use validation pipe */): Promise<IArticle> {
    return await this.articlesService.create(data);
  }

  @Put("update")
  async update(@Body() data: UpdateArticleDto /* use validation pipe */): Promise<IArticle> {
    return await this.articlesService.update(data);
  }

  @Post("delete")
  async delete(@Body() data: DeleteArticleDto /* use validation pipe */): Promise<IArticle> {
    return await this.articlesService.delete(data);
  }
}
