import { StatusTrackingDto } from './dto/status-tracking.dto';
import { BlueDartService } from './bluedart.service';
export declare class BlueDartController {
    private readonly blueDartService;
    constructor(blueDartService: BlueDartService);
    updateShipmentStatus(payload: StatusTrackingDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
