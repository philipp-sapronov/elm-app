import { CreateCommentDto, UpdateCommentDto } from './dto';
import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { Comment } from './interface';

@Controller('comments')
export class CommentsController {
  @Get()
  async find(): Promise<Comment[]> {
    return [] as Comment[];
  }

  @Get(':id')
  async findOne(@Param('slug') slug: string): Promise<Comment> {
    return {} as Comment;
  }

  @Post()
  async create(@Body() data: CreateCommentDto /* use validation pipe */): Promise<Comment> {
    return {} as Comment;
  }

  @Put()
  async update(@Body() data: UpdateCommentDto /* use validation pipe */): Promise<Comment> {
    return {} as Comment;
  }
}
