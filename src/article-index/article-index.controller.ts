import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ArticleIndexService } from './article-index.service';
import { ArticleDto } from './article-index.dto';
import { ArticleEntity } from './article-index.entity';
import { query } from 'express';
@Controller('article')
export class ArticleIndexController {
  constructor(private readonly articleIndexService: ArticleIndexService) {}
  @Get()
  findAll(@Query('key') key?: string): Promise<ArticleEntity[]> {
    return this.articleIndexService.findAll(key);
  }
  @Post('/create')
  createArticle(@Body() ArticleDto: ArticleDto): Promise<ArticleEntity> {
    return this.articleIndexService.create(ArticleDto);
  }
}
