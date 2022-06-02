import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { ArticleEntity } from './article-index.entity';
import { ArticleDto } from './article-index.dto';
@Injectable()
export class ArticleIndexService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}
  async findAll(key?: string): Promise<ArticleEntity[]> {
    return this.articleRepository.find({
      order: {
        create_time: 'DESC',
      },
      where: [
        {
          content: Like(`%${key}%`),
        },
      ],
    });
  }
  async create(ArticleDto: ArticleDto) {
    return this.articleRepository.save(ArticleDto);
  }
  async findOne(id: number): Promise<ArticleEntity> {
    return this.articleRepository.findOne(id);
  }
}
