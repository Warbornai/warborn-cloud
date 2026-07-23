/**
 * Warborn Cloud Managed SaaS Platform Kernel.
 * @module warborn-cloud/cloud
 */

import { OrganizationManager } from './organizations';
import { ProjectManager } from './projects';
import { DeploymentManager } from './deployments';
import { MarketplaceCatalog } from './marketplace';

export class WarbornCloudPlatform {
  public readonly organizations: OrganizationManager;
  public readonly projects: ProjectManager;
  public readonly deployments: DeploymentManager;
  public readonly marketplace: MarketplaceCatalog;

  constructor() {
    this.organizations = new OrganizationManager();
    this.projects = new ProjectManager();
    this.deployments = new DeploymentManager();
    this.marketplace = new MarketplaceCatalog();
  }

  public async initialize(): Promise<void> {
    console.log('⚡ Warborn Cloud Platform v0.1.0 initialized.');
  }
}

export function createWarbornCloud(): WarbornCloudPlatform {
  return new WarbornCloudPlatform();
}
