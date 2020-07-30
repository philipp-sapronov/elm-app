import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CategoryController } from './controller';
import { CategoryService } from './service';
import { CategoryDbParams } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CategoryDbParams.name,
        schema: CategoryDbParams.schema,
        collection: CategoryDbParams.collection,
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoriesModule {}
