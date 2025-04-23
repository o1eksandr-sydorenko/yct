import { ApiProperty } from '@nestjs/swagger';

export class BaseErrorResponse {
  @ApiProperty({
    type: String,
    description: 'The error name',
  })
  error: string;

  @ApiProperty({
    type: String,
    description: 'The error message',
  })
  message: string;
}
