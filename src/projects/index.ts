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

export class ProjectManager {
  private readonly projects = new Map<string, CloudProject>();

  public createProject(orgId: string, name: string, region: string = 'us-east-1'): CloudProject {
    const project: CloudProject = {
      id: `prj_${Math.random().toString(36).substring(2, 9)}`,
      orgId,
      name,
      region,
      status: 'active',
    };
    this.projects.set(project.id, project);
    return project;
  }

  public listProjects(orgId?: string): readonly CloudProject[] {
    const all = Array.from(this.projects.values());
    return orgId ? all.filter(p => p.orgId === orgId) : all;
  }
}
