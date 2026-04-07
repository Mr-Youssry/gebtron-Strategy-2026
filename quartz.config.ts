import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Gebtron Strategy",
    pageTitleSuffix: " | 2026-2030",
    enableSPA: false,
    enablePopovers: false,
    analytics: null,
    locale: "en-US",
    baseUrl: "Mr-Youssry.github.io/gebtron-Strategy-2026",
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
          light: "#E8E4DC",
          lightgray: "#D4D0C8",
          gray: "#8A94A0",
          darkgray: "#1B4D3E",
          dark: "#1B4D3E",
          secondary: "#1B4D3E",
          tertiary: "#E84C30",
          highlight: "rgba(27, 77, 62, 0.06)",
          textHighlight: "rgba(232, 76, 48, 0.15)",
        },
        darkMode: {
          light: "#0f1e1b",
          lightgray: "#1a3530",
          gray: "#4a7a72",
          darkgray: "#E8E4DC",
          dark: "#ebebec",
          secondary: "#E84C30",
          tertiary: "#4dbfae",
          highlight: "rgba(232, 76, 48, 0.12)",
          textHighlight: "rgba(232, 76, 48, 0.2)",
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
