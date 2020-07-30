import { CreateArticleDto, UpdateArticleDto } from './dto';
import { Controller, Get, Param, Query, Post, Body, Put } from '@nestjs/common';
import { IArticle } from './interface';
import { articles, getArticle } from './example';

@Controller('articles')
export class ArticlesController {
  @Get()
  async find(
    // @Query('t') tags?: string | string[],
    @Query('q') query?: string,
    // @Query('c') categories?: string | string[],
  ): Promise<IArticle[]> {
    if (typeof query === 'string' && query.trim().length > 0)
      return articles.filter(article => article.content.includes(query));

    return articles;
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<IArticle> {
    const current = articles.find(article => article.slug === slug);

    if (current === undefined) {
      return null;
    } else {
      return current;
    }
  }

  @Post()
  async create(@Body() data: CreateArticleDto /* use validation pipe */): Promise<IArticle> {
    console.log(data);
    return getArticle();
  }

  @Put()
  async update(@Body() data: UpdateArticleDto /* use validation pipe */): Promise<IArticle> {
    console.log(data);
    return getArticle();
  }
}
