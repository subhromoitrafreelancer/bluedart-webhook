"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueDartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const status_tracking_dto_1 = require("./dto/status-tracking.dto");
const basic_auth_guard_1 = require("../guards/basic-auth.guard");
const bluedart_service_1 = require("./bluedart.service");
let BlueDartController = class BlueDartController {
    constructor(blueDartService) {
        this.blueDartService = blueDartService;
    }
    async updateShipmentStatus(payload) {
        return this.blueDartService.processStatusTracking(payload);
    }
};
exports.BlueDartController = BlueDartController;
__decorate([
    (0, common_1.Post)('status-tracking'),
    (0, swagger_1.ApiOperation)({ summary: 'Update shipment status' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_tracking_dto_1.StatusTrackingDto]),
    __metadata("design:returntype", Promise)
], BlueDartController.prototype, "updateShipmentStatus", null);
exports.BlueDartController = BlueDartController = __decorate([
    (0, swagger_1.ApiTags)('Blue Dart'),
    (0, common_1.Controller)('api/bluedart'),
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, swagger_1.ApiBasicAuth)(),
    __metadata("design:paramtypes", [bluedart_service_1.BlueDartService])
], BlueDartController);
//# sourceMappingURL=bluedart.controller.js.map