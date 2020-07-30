import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { ArticlesModule } from '../articles/module';
import { TagsModule } from '../tags/module';
import { CommentsModule } from '../comments/module';
import { CategoriesModule } from '../categories/module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://phl:Qwerty@first.9tyc5.mongodb.net/first?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
    ArticlesModule,
    CommentsModule,
    CategoriesModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
