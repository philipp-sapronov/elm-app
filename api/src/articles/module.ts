import { ArticleDbParams } from './schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ArticlesController } from './controller';
import { ArticlesService } from './service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ArticleDbParams.name,
        schema: ArticleDbParams.schema,
        collection: ArticleDbParams.collection,
      },
    ]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
