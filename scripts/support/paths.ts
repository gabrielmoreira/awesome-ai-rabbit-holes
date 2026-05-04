import * as path from "node:path";
import { fileURLToPath } from "node:url";

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

export const CONFIG_DIR = path.join(REPO_ROOT, "config");
export const CONFIG_SETTINGS_PATH = path.join(CONFIG_DIR, "settings.yml");
export const CONFIG_SOURCES_PATH = path.join(CONFIG_DIR, "sources.yml");
export const CONFIG_CATEGORIES_PATH = path.join(CONFIG_DIR, "categories.yml");

export const CATALOG_DIR = path.join(REPO_ROOT, "catalog");
export const CATALOG_ITEMS_DIR = path.join(CATALOG_DIR, "items");
export const PI_FREE_CATALOG_DIR = path.join(CATALOG_DIR, "pi-free");
export const PI_FREE_INTELLIGENCE_PATH = path.join(PI_FREE_CATALOG_DIR, "intelligence.json");
export const PI_FREE_ALL_MODELS_PATH = path.join(PI_FREE_CATALOG_DIR, "all-models.json");
export const PI_FREE_RANKED_MODELS_PATH = path.join(PI_FREE_CATALOG_DIR, "ranked-models.json");

export const CACHE_DIR = path.join(REPO_ROOT, ".cache");
export const README_CACHE_DIR = path.join(CACHE_DIR, "readmes", "github");
export const SOURCE_LIST_CACHE_DIR = path.join(CACHE_DIR, "source-lists");
export const WEBSITE_LINK_CACHE_DIR = path.join(CACHE_DIR, "linked-sites");
export const DISCOVERY_CANDIDATES_PATH = path.join(CACHE_DIR, "discover", "candidates.json");
