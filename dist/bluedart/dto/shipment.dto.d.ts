import { ScansDto } from './scans.dto';
export declare class ShipmentDto {
    WaybillNo: string;
    SenderID?: string;
    ReceiverID?: string;
    Origin?: string;
    OriginAreaCode?: string;
    Destination?: string;
    DestinationAreaCode?: string;
    PickUpDate?: string;
    PickUpTime?: string;
    ShipmentMode?: string;
    ExpectedDeliveryDate?: string;
    Feature?: string;
    RefNo?: string;
    Prodcode?: string;
    SubProductCode?: string;
    Weight?: string;
    DynamicExpectedDeliveryDate?: string;
    Scans?: ScansDto;
}
