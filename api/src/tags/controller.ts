import { TagsService } from "./service";
import { CreateTagDto, UpdateTagDto, DeleteTagDto } from "./dto";
import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { ITag } from "./interface";

@Controller("tags")
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get()
  async get(): Promise<ITag[]> {
    return this.tagsService.find();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<ITag> {
    return this.tagsService.findById(id);
  }

  @Post("add")
  async add(@Body() data: CreateTagDto /* use validation pipe */): Promise<ITag> {
    return await this.tagsService.create(data);
  }

  @Post("update")
  async update(@Body() data: UpdateTagDto /* use validation pipe */): Promise<ITag> {
    return await this.tagsService.update(data);
  }

  @Post("delete")
  async delete(@Body() data: DeleteTagDto /* use validation pipe */): Promise<ITag> {
    return await this.tagsService.delete(data);
  }
}
