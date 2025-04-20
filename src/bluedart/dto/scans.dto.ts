import { Type } from 'class-transformer';
import { ValidateNested, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ScanDetailDto } from './scan-detail.dto';
import { DeliveryDetailsDto } from './delivery-details.dto';
import { ReweighDto } from './reweigh.dto';
import { FieldExecutiveDto } from './field-executive.dto';
import { QCFailedDto } from './qc-failed.dto';

export class ScansDto {
  @ApiProperty({ type: [ScanDetailDto] })
  @ValidateNested({ each: true })
  @Type(() => ScanDetailDto)
  ScanDetail: ScanDetailDto[];

  @ApiProperty({ required: false })
  @ValidateNested()
  @Type(() => DeliveryDetailsDto)
  @IsOptional()
  DeliveryDetails?: DeliveryDetailsDto;

  @ApiProperty({ required: false })
  @ValidateNested()
  @Type(() => ReweighDto)
  @IsOptional()
  Reweigh?: ReweighDto;

  @ApiProperty({ required: false })
  @ValidateNested()
  @Type(() => FieldExecutiveDto)
  @IsOptional()
  FieldExecutiveDetails?: FieldExecutiveDto;

  @ApiProperty({ required: false })
  @ValidateNested()
  @Type(() => QCFailedDto)
  @IsOptional()
  QCFailed?: QCFailedDto;
}