/**
 * Deployment Automation & Hosted Runtime Manager.
 * @module warborn-cloud/deployments
 */
import { WarbornGateway } from '@warborn/gateway';
export interface DeploymentRecord {
    readonly id: string;
    readonly projectId: string;
    readonly version: string;
    readonly status: 'provisioning' | 'healthy' | 'failed';
    readonly deployedAt: string;
}
export declare class DeploymentManager {
    readonly gateway: WarbornGateway;
    constructor();
    deploy(projectId: string, version?: string): Promise<DeploymentRecord>;
}
//# sourceMappingURL=index.d.ts.map