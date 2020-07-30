import { TagsService } from './service';
import { CreateTagDto, UpdateTagDto } from './dto';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ITag } from './interface';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get()
  async get(): Promise<ITag[]> {
    return this.tagsService.find();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ITag> {
    return this.tagsService.findById(id);
  }

  @Post('create')
  async add(@Body() data: CreateTagDto /* use validation pipe */): Promise<ITag> {
    return await this.tagsService.create(data);
  }

  @Post('update')
  async update(@Body() data: UpdateTagDto /* use validation pipe */): Promise<ITag> {
    return {} as ITag;
  }

  @Post('remove')
  async remove(@Body() data: { id: string } /* use validation pipe */): Promise<ITag> {
    return {} as ITag;
  }
}
