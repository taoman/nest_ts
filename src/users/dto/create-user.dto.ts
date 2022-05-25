import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  img_url: string;
  @ApiProperty()
  type_id: number;
}
