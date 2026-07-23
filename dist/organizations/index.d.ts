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
export declare class OrganizationManager {
    private readonly orgs;
    constructor();
    createOrg(params: {
        name: string;
        slug: string;
        plan?: Organization['plan'];
    }): Organization;
    listOrgs(): readonly Organization[];
}
//# sourceMappingURL=index.d.ts.map