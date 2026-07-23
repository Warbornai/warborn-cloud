/**
 * Cloud Project & Environment Secrets Subsystem.
 * @module warborn-cloud/projects
 */
export interface CloudProject {
    readonly id: string;
    readonly orgId: string;
    readonly name: string;
    readonly region: string;
    readonly status: 'active' | 'deploying' | 'paused';
}
export declare class ProjectManager {
    private readonly projects;
    createProject(orgId: string, name: string, region?: string): CloudProject;
    listProjects(orgId?: string): readonly CloudProject[];
}
//# sourceMappingURL=index.d.ts.map