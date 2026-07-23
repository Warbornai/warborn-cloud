"use strict";
/**
 * Cloud Project & Environment Secrets Subsystem.
 * @module warborn-cloud/projects
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectManager = void 0;
class ProjectManager {
    projects = new Map();
    createProject(orgId, name, region = 'us-east-1') {
        const project = {
            id: `prj_${Math.random().toString(36).substring(2, 9)}`,
            orgId,
            name,
            region,
            status: 'active',
        };
        this.projects.set(project.id, project);
        return project;
    }
    listProjects(orgId) {
        const all = Array.from(this.projects.values());
        return orgId ? all.filter(p => p.orgId === orgId) : all;
    }
}
exports.ProjectManager = ProjectManager;
//# sourceMappingURL=index.js.map