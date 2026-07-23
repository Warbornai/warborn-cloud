"use strict";
/**
 * Deployment Automation & Hosted Runtime Manager.
 * @module warborn-cloud/deployments
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentManager = void 0;
const gateway_1 = require("@warborn/gateway");
class DeploymentManager {
    gateway;
    constructor() {
        this.gateway = (0, gateway_1.createWarbornGateway)();
    }
    async deploy(projectId, version = '0.1.0') {
        await this.gateway.start();
        return {
            id: `dep_${Math.random().toString(36).substring(2, 9)}`,
            projectId,
            version,
            status: 'healthy',
            deployedAt: new Date().toISOString(),
        };
    }
}
exports.DeploymentManager = DeploymentManager;
//# sourceMappingURL=index.js.map