import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Gebtron Strategy",
    pageTitleSuffix: " | 2026-2030",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "ayoussry.github.io/gebtron-Strategy-2026",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "DM Serif Display",
        body: "DM Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FAFAF8",
          lightgray: "#E8ECF0",
          gray: "#8A94A0",
          darkgray: "#1A1A1A",
          dark: "#1A5048",
          secondary: "#1A5048",
          tertiary: "#37A797",
          highlight: "rgba(55, 167, 151, 0.08)",
          textHighlight: "rgba(232, 90, 60, 0.15)",
        },
        darkMode: {
          light: "#0f1e1b",
          lightgray: "#1a3530",
          gray: "#4a7a72",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#37A797",
          tertiary: "#4dbfae",
          highlight: "rgba(55, 167, 151, 0.12)",
          textHighlight: "rgba(232, 90, 60, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
