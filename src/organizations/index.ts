/**
 * Organization & Multi-Tenancy Management Subsystem.
 * @module warborn-cloud/organizations
 */

export interface Organization {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly plan: 'community' | 'pro' | 'enterprise';
  readonly membersCount: number;
  readonly createdAt: string;
}

export class OrganizationManager {
  private readonly orgs = new Map<string, Organization>();

  constructor() {
    this.createOrg({ name: 'Warborn Technologies', slug: 'warborn-tech', plan: 'enterprise' });
  }

  public createOrg(params: { name: string; slug: string; plan?: Organization['plan'] }): Organization {
    const org: Organization = {
      id: `org_${Math.random().toString(36).substring(2, 9)}`,
      name: params.name,
      slug: params.slug,
      plan: params.plan || 'community',
      membersCount: 1,
      createdAt: new Date().toISOString(),
    };
    this.orgs.set(org.id, org);
    return org;
  }

  public listOrgs(): readonly Organization[] {
    return Array.from(this.orgs.values());
  }
}
