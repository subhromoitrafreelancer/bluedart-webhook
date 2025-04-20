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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScansDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const scan_detail_dto_1 = require("./scan-detail.dto");
const delivery_details_dto_1 = require("./delivery-details.dto");
const reweigh_dto_1 = require("./reweigh.dto");
const field_executive_dto_1 = require("./field-executive.dto");
const qc_failed_dto_1 = require("./qc-failed.dto");
class ScansDto {
}
exports.ScansDto = ScansDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [scan_detail_dto_1.ScanDetailDto] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => scan_detail_dto_1.ScanDetailDto),
    __metadata("design:type", Array)
], ScansDto.prototype, "ScanDetail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => delivery_details_dto_1.DeliveryDetailsDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", delivery_details_dto_1.DeliveryDetailsDto)
], ScansDto.prototype, "DeliveryDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => reweigh_dto_1.ReweighDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", reweigh_dto_1.ReweighDto)
], ScansDto.prototype, "Reweigh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => field_executive_dto_1.FieldExecutiveDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", field_executive_dto_1.FieldExecutiveDto)
], ScansDto.prototype, "FieldExecutiveDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => qc_failed_dto_1.QCFailedDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", qc_failed_dto_1.QCFailedDto)
], ScansDto.prototype, "QCFailed", void 0);
//# sourceMappingURL=scans.dto.js.map