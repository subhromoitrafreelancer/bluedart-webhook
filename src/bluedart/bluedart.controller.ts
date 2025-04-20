import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBasicAuth, ApiOperation } from '@nestjs/swagger';
import { StatusTrackingDto } from './dto/status-tracking.dto';
import { BasicAuthGuard } from '../guards/basic-auth.guard';
import { BlueDartService } from './bluedart.service';

@ApiTags('Blue Dart')
@Controller('api/bluedart')
@UseGuards(BasicAuthGuard)
@ApiBasicAuth()
export class BlueDartController {
  constructor(private readonly blueDartService: BlueDartService) {}

  @Post('status-tracking')
  @ApiOperation({ summary: 'Update shipment status' })
  async updateShipmentStatus(@Body() payload: StatusTrackingDto) {
    return this.blueDartService.processStatusTracking(payload);
  }
}