import { ScanDetailDto } from './scan-detail.dto';
import { DeliveryDetailsDto } from './delivery-details.dto';
import { ReweighDto } from './reweigh.dto';
import { FieldExecutiveDto } from './field-executive.dto';
import { QCFailedDto } from './qc-failed.dto';
export declare class ScansDto {
    ScanDetail: ScanDetailDto[];
    DeliveryDetails?: DeliveryDetailsDto;
    Reweigh?: ReweighDto;
    FieldExecutiveDetails?: FieldExecutiveDto;
    QCFailed?: QCFailedDto;
}
