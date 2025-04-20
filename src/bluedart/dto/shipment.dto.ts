import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ScansDto } from './scans.dto';

export class ShipmentDto {
  @ApiProperty()
  @IsString()
  WaybillNo: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  SenderID?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  ReceiverID?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Origin?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  OriginAreaCode?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Destination?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  DestinationAreaCode?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  PickUpDate?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  PickUpTime?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  ShipmentMode?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  ExpectedDeliveryDate?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Feature?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  RefNo?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Prodcode?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  SubProductCode?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Weight?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  DynamicExpectedDeliveryDate?: string;

  @ApiProperty({ required: false })
  @ValidateNested()
  @Type(() => ScansDto)
  @IsOptional()
  Scans?: ScansDto;
}