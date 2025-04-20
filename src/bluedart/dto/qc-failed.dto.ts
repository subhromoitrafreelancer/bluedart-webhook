import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QCFailedDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Reason?: string;

  @ApiProperty({ required: false, type: [String] })
  @IsArray()
  @IsOptional()
  Pictures?: string[];

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Type?: string;
}