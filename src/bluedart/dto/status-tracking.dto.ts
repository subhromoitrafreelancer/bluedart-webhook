import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ShipmentDto } from './shipment.dto';

export class StatusTrackingDto {
  @ApiProperty({ type: [ShipmentDto] })
  @ValidateNested({ each: true })
  @Type(() => ShipmentDto)
  statustracking: { Shipment: ShipmentDto }[];
}