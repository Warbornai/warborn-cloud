"use strict";
/**
 * Warborn Cloud Managed SaaS Platform Kernel.
 * @module warborn-cloud/cloud
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarbornCloudPlatform = void 0;
exports.createWarbornCloud = createWarbornCloud;
const organizations_1 = require("./organizations");
const projects_1 = require("./projects");
const deployments_1 = require("./deployments");
const marketplace_1 = require("./marketplace");
class WarbornCloudPlatform {
    organizations;
    projects;
    deployments;
    marketplace;
    constructor() {
        this.organizations = new organizations_1.OrganizationManager();
        this.projects = new projects_1.ProjectManager();
        this.deployments = new deployments_1.DeploymentManager();
        this.marketplace = new marketplace_1.MarketplaceCatalog();
    }
    async initialize() {
        console.log('⚡ Warborn Cloud Platform v0.1.0 initialized.');
    }
}
exports.WarbornCloudPlatform = WarbornCloudPlatform;
function createWarbornCloud() {
    return new WarbornCloudPlatform();
}
//# sourceMappingURL=cloud.js.map