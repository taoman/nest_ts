import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ArticleIndexService } from './article-index.service';
import { ArticleDto } from './article-index.dto';
import { ArticleEntity } from './article-index.entity';
@Controller('article')
export class ArticleIndexController {
  constructor(private readonly articleIndexService: ArticleIndexService) {}
  @Get()
  findAll(@Query('key') key?: string): Promise<ArticleEntity[]> {
    return this.articleIndexService.findAll(key);
  }
  @Post('/create')
  createArticle(@Body() ArticleDto: ArticleDto) {
    return this.articleIndexService.create(ArticleDto);
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<ArticleEntity> {
    return this.articleIndexService.findOne(id);
  }
}
