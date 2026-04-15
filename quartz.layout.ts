import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Gebtron FZCO": "https://gebtron.ae",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({
      title: "Explorer",
      sortFn: (a, b) => {
        // Custom order for top-level folders
        const order = ["strategy", "okrs", "research", "eaas", "meetings"]
        const aName = a.slugSegment?.toLowerCase() ?? ""
        const bName = b.slugSegment?.toLowerCase() ?? ""
        const aIdx = order.indexOf(aName)
        const bIdx = order.indexOf(bName)
        // If both are in the order list, sort by position
        if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
        // Ordered items come before unordered
        if (aIdx !== -1) return -1
        if (bIdx !== -1) return 1
        // Folders before files
        if (a.isFolder && !b.isFolder) return -1
        if (!a.isFolder && b.isFolder) return 1
        // Alphabetical fallback
        return aName.localeCompare(bName, undefined, { numeric: true })
      },
      mapFn: (node) => {
        // Friendly display names for folders
        const names = {
          "strategy": "Strategy",
          "okrs": "Plans & OKRs",
          "research": "Research Library",
          "eaas": "EAAS",
          "meetings": "Meetings",
          "industry": "Industry & Market",
          "finance": "Finance & Valuation",
          "hr": "Human Resources",
          "legal": "Legal & Commercial",
          "frameworks": "Strategic Frameworks",
          "market-research": "Market Research",
          "africa": "Africa",
          "europe": "Europe",
        }
        const key = node.slugSegment?.toLowerCase() ?? ""
        if (names[key]) {
          node.displayName = names[key]
        }
      },
    }),
  ],
  right: [],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({
      title: "Explorer",
      sortFn: (a, b) => {
        // Custom order for top-level folders
        const order = ["strategy", "okrs", "research", "eaas", "meetings"]
        const aName = a.slugSegment?.toLowerCase() ?? ""
        const bName = b.slugSegment?.toLowerCase() ?? ""
        const aIdx = order.indexOf(aName)
        const bIdx = order.indexOf(bName)
        // If both are in the order list, sort by position
        if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
        // Ordered items come before unordered
        if (aIdx !== -1) return -1
        if (bIdx !== -1) return 1
        // Folders before files
        if (a.isFolder && !b.isFolder) return -1
        if (!a.isFolder && b.isFolder) return 1
        // Alphabetical fallback
        return aName.localeCompare(bName, undefined, { numeric: true })
      },
      mapFn: (node) => {
        // Friendly display names for folders
        const names = {
          "strategy": "Strategy",
          "okrs": "Plans & OKRs",
          "research": "Research Library",
          "eaas": "EAAS",
          "meetings": "Meetings",
          "industry": "Industry & Market",
          "finance": "Finance & Valuation",
          "hr": "Human Resources",
          "legal": "Legal & Commercial",
          "frameworks": "Strategic Frameworks",
          "market-research": "Market Research",
          "africa": "Africa",
          "europe": "Europe",
        }
        const key = node.slugSegment?.toLowerCase() ?? ""
        if (names[key]) {
          node.displayName = names[key]
        }
      },
    }),
  ],
  right: [],
}
