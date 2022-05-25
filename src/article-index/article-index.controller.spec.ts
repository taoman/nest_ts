import { Test, TestingModule } from '@nestjs/testing';
import { ArticleIndexController } from './article-index.controller';

describe('ArticleIndexController', () => {
  let controller: ArticleIndexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleIndexController],
    }).compile();

    controller = module.get<ArticleIndexController>(ArticleIndexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
