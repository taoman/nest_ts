import { ApiProperty } from '@nestjs/swagger';
export class ArticleDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  create_time: string;
  @ApiProperty()
  content: string;
}
