import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleIndexController } from './article-index.controller';
import { ArticleEntity } from './article-index.entity';
import { ArticleIndexService } from './article-index.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleIndexController],
  providers: [ArticleIndexService],
})
export class ArticleIndexModule {}
