import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ShipmentStatusDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  waybillNo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsDateString()
  statusDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  statusLocation: string;
}