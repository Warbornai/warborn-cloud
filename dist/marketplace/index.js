"use strict";
/**
 * Plugin Marketplace Catalog & Distribution.
 * @module warborn-cloud/marketplace
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceCatalog = void 0;
class MarketplaceCatalog {
    plugins = [
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
    listPlugins() {
        return this.plugins;
    }
}
exports.MarketplaceCatalog = MarketplaceCatalog;
//# sourceMappingURL=index.js.map