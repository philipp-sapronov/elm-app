import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TagsController } from './controller';
import { TagsService } from './service';
import { TagsDbParams } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TagsDbParams.name, schema: TagsDbParams.schema, collection: TagsDbParams.collection },
    ]),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
