import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FieldExecutiveDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  FeName?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  FeMobileNo?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Feactivity?: string;
}