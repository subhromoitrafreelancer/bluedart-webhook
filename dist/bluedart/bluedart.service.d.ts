import { StatusTrackingDto } from './dto/status-tracking.dto';
export declare class BlueDartService {
    private readonly logger;
    processStatusTracking(payload: StatusTrackingDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
