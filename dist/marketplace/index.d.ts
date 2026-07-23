/**
 * Plugin Marketplace Catalog & Distribution.
 * @module warborn-cloud/marketplace
 */
export interface MarketplacePlugin {
    readonly id: string;
    readonly name: string;
    readonly version: string;
    readonly author: string;
    readonly downloads: number;
    readonly verified: boolean;
}
export declare class MarketplaceCatalog {
    private readonly plugins;
    listPlugins(): readonly MarketplacePlugin[];
}
//# sourceMappingURL=index.d.ts.map