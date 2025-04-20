"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BlueDartService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueDartService = void 0;
const common_1 = require("@nestjs/common");
let BlueDartService = BlueDartService_1 = class BlueDartService {
    constructor() {
        this.logger = new common_1.Logger(BlueDartService_1.name);
    }
    async processStatusTracking(payload) {
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
};
exports.BlueDartService = BlueDartService;
exports.BlueDartService = BlueDartService = BlueDartService_1 = __decorate([
    (0, common_1.Injectable)()
], BlueDartService);
//# sourceMappingURL=bluedart.service.js.map