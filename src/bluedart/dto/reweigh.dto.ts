import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReweighDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  MPSNumber?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  RWActualWeight?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  RWLength?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  RWBreadth?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  RWHeight?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  RWVolWeight?: string;
}