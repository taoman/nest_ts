import { Test, TestingModule } from '@nestjs/testing';
import { ArticleIndexService } from './article-index.service';

describe('ArticleIndexService', () => {
  let service: ArticleIndexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleIndexService],
    }).compile();

    service = module.get<ArticleIndexService>(ArticleIndexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
