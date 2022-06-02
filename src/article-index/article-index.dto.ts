import { ApiProperty } from '@nestjs/swagger';
export class ArticleDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  create_time: string;
  @ApiProperty()
  content: string;
}
