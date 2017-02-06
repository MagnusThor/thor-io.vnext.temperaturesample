"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var thor_io_vnext_1 = require("thor-io.vnext");
var MicroServiceController = (function (_super) {
    __extends(MicroServiceController, _super);
    function MicroServiceController(connection) {
        _super.call(this, connection);
        this.minLevel = 0;
        this.maxLevel = 10;
    }
    MicroServiceController.prototype.setThreshold = function (data) {
        this.minLevel = data.min;
        this.maxLevel = data.max;
        this.invoke({ min: this.minLevel, max: this.maxLevel }, "thresholdChange");
    };
    MicroServiceController.prototype.temperatureUpdate = function (data) {
        var expression = function (pre) {
            return data.temp > pre.minLevel && data.temp < pre.maxLevel;
        };
        this.invokeTo(expression, data, "temperatureChange");
    };
    __decorate([
        thor_io_vnext_1.CanSet(true), 
        __metadata('design:type', Number)
    ], MicroServiceController.prototype, "minLevel", void 0);
    __decorate([
        thor_io_vnext_1.CanSet(true), 
        __metadata('design:type', Number)
    ], MicroServiceController.prototype, "maxLevel", void 0);
    __decorate([
        thor_io_vnext_1.CanInvoke(true), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MicroServiceController.prototype, "setThreshold", null);
    __decorate([
        thor_io_vnext_1.CanInvoke(true), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MicroServiceController.prototype, "temperatureUpdate", null);
    MicroServiceController = __decorate([
        thor_io_vnext_1.ControllerProperties("microservice", false), 
        __metadata('design:paramtypes', [thor_io_vnext_1.ThorIO.Connection])
    ], MicroServiceController);
    return MicroServiceController;
}(thor_io_vnext_1.ThorIO.Controller));
exports.MicroServiceController = MicroServiceController;
//# sourceMappingURL=Temperature.Controller.js.map