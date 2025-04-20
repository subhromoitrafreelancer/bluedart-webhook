import { Injectable, Logger } from '@nestjs/common';
import { StatusTrackingDto } from './dto/status-tracking.dto';

@Injectable()
export class BlueDartService {
  private readonly logger = new Logger(BlueDartService.name);

  async processStatusTracking(payload: StatusTrackingDto) {
    for (const { Shipment } of payload.statustracking) {
      this.logger.log(`Processing shipment update for waybill: ${Shipment.WaybillNo}`);
      
      if (Shipment.Scans?.ScanDetail) {
        for (const scan of Shipment.Scans.ScanDetail) {
          this.logger.log(`Scan: ${scan.Scan}, Location: ${scan.ScannedLocation || 'N/A'}`);
        }
      }
    }

    return { success: true, message: `Processed ${payload.statustracking.length} shipment updates` };
  }
}