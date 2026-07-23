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

export class MarketplaceCatalog {
  private readonly plugins: MarketplacePlugin[] = [
    {
      id: 'official-weather-tool',
      name: 'Weather Tool Plugin',
      version: '1.0.0',
      author: 'Warborn Technologies',
      downloads: 1420,
      verified: true,
    },
    {
      id: 'vector-postgres-store',
      name: 'pgvector Memory Provider',
      version: '1.2.0',
      author: 'Warborn Enterprise',
      downloads: 3890,
      verified: true,
    },
  ];

  public listPlugins(): readonly MarketplacePlugin[] {
    return this.plugins;
  }
}
