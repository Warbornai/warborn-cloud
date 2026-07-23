"use strict";
/**
 * Organization & Multi-Tenancy Management Subsystem.
 * @module warborn-cloud/organizations
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationManager = void 0;
class OrganizationManager {
    orgs = new Map();
    constructor() {
        this.createOrg({ name: 'Warborn Technologies', slug: 'warborn-tech', plan: 'enterprise' });
    }
    createOrg(params) {
        const org = {
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
    listOrgs() {
        return Array.from(this.orgs.values());
    }
}
exports.OrganizationManager = OrganizationManager;
//# sourceMappingURL=index.js.map