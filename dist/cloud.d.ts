/**
 * Warborn Cloud Managed SaaS Platform Kernel.
 * @module warborn-cloud/cloud
 */
import { OrganizationManager } from './organizations';
import { ProjectManager } from './projects';
import { DeploymentManager } from './deployments';
import { MarketplaceCatalog } from './marketplace';
export declare class WarbornCloudPlatform {
    readonly organizations: OrganizationManager;
    readonly projects: ProjectManager;
    readonly deployments: DeploymentManager;
    readonly marketplace: MarketplaceCatalog;
    constructor();
    initialize(): Promise<void>;
}
export declare function createWarbornCloud(): WarbornCloudPlatform;
//# sourceMappingURL=cloud.d.ts.map