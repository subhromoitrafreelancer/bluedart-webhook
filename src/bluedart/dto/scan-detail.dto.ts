import { IsString, IsOptional, IsLatitude, IsLongitude } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ScanDetailDto {
  @ApiProperty()
  @IsString()
  Scan: string;

  @ApiProperty()
  @IsString()
  ScanCode: string;

  @ApiProperty()
  @IsString()
  ScanGroupType: string;

  @ApiProperty()
  @IsString()
  ScanDate: string;

  @ApiProperty()
  @IsString()
  ScanTime: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ScannedLocation?: string;

  @ApiProperty()
  @IsString()
  ScanType: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  Comments?: string;

  @ApiProperty()
  @IsString()
  ScannedLocationCode: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ScannedLocationCity?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ScannedLocationStateCode?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  StatusTimeZone?: string;

  @ApiProperty()
  @IsLatitude()
  @IsOptional()
  StatusLatitude?: string;

  @ApiProperty()
  @IsLongitude()
  @IsOptional()
  StatusLongitude?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  SorryCardNumber?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ReachedDestinationLocation?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  SecureCode?: string;
}