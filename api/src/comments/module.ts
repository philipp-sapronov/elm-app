import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CommentsController } from './controller';
import { CommentsService } from './service';
import { Comment } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comment.name, schema: Comment.schema, collection: Comment.collection },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
