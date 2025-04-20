import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeliveryUpdateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  waybillNo: string;

  @ApiProperty()
  @IsDateString()
  deliveryDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  receiverName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  remarks?: string;
}