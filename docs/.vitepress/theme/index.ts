import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './Layout.vue'
import YouTubeEmbed from './components/YouTubeEmbed.vue'
import DownloadLink from './components/DownloadLink.vue'
import CatalogCardList from './components/CatalogCardList.vue'
import TechniqueTagFilter from './components/TechniqueTagFilter.vue'
import ProjectCatalog from './components/ProjectCatalog.vue'
import './style.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('YouTubeEmbed', YouTubeEmbed)
    app.component('DownloadLink', DownloadLink)
    app.component('CatalogCardList', CatalogCardList)
    app.component('TechniqueTagFilter', TechniqueTagFilter)
    app.component('ProjectCatalog', ProjectCatalog)
  },
}

export default theme
