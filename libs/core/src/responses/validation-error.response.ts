import { ApiProperty } from '@nestjs/swagger';

export class ValidationErrorProperty {
  @ApiProperty()
  name: string;

  @ApiProperty()
  messages: string[];

  @ApiProperty()
  key?: string;
}

export class ValidationErrorResponse {
  @ApiProperty()
  error: string;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: [ValidationErrorProperty] })
  properties: ValidationErrorProperty[];
}
