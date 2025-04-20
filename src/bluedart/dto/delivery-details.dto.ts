import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeliveryDetailsDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  IDNumber?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  IDType?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  ReceivedBy?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Relation?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  SecurityCodeDelivery?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Signature?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  IDImage?: string;
}