import { Module } from '@nestjs/common';
import { CommentsController } from './controller';
import { CommentsService } from './service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
