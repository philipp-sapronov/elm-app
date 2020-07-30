import { CreateCommentDto, UpdateCommentDto } from './dto';
import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { User } from './interface';

@Controller('tags')
export class CommentsController {
  @Get()
  async find(): Promise<User[]> {
    return [] as User[];
  }

  @Get(':id')
  async findOne(@Param('slug') slug: string): Promise<User> {
    return {} as User;
  }

  @Post()
  async create(@Body() data: CreateCommentDto /* use validation pipe */): Promise<User> {
    return {} as User;
  }

  @Put()
  async update(@Body() data: UpdateCommentDto /* use validation pipe */): Promise<User> {
    return {} as User;
  }
}
