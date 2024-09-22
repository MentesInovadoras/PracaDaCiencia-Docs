import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import Link from '@docusaurus/Link';

const config: Config = {
  title: 'Documentação Mentes Inovadoras | Sistema Web Praça da Ciência',
  favicon: 'img/favicon.ico',

  url: 'https://PracaDaCiencia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PracaDaCiencia/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MentesInovadoras', // Usually your GitHub org/user name.
  projectName: 'PracaDaCiencia', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    require.resolve('docusaurus-lunr-search'),    
  ],


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,          
          showLastUpdateTime: true, 
          includeCurrentVersion:true,   
          docsRootComponent: '@theme/DocsRoot',
          docVersionRootComponent: '@theme/DocVersionRoot',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/DocItem',  
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        
      } satisfies Preset.Options,
      
    ],
  ],

  themeConfig: {

    footer: {

      style: 'light',      
    copyright: `
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="/img/logo.png" alt="Powered by Mentes Inovadoras" style="height: 24px; margin-right: 8px;" />
      <span>Copyright © ${new Date().getFullYear()}. Powered by Mentes Inovadoras, created with Docusaurus.</span>
    </div>
  `,

    },

    mermaid: {
      options: {
        fontSize: 18,
      },
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },

    image: 'img/logo.jpg',
    navbar: {
      title: 'Sistema Web Praça da Ciência',
      logo: {
        src: 'img/logo.png',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'planning',
          position: 'left',
          label: 'Planejamento',
          },    


        {
          type: 'docSidebar',
          sidebarId: 'development',
          position: 'left',
          label: 'Desenvolvimento',
        },     

        {
          type: 'docSidebar',
          sidebarId: 'using_project',
          position: 'left',
          label: 'Usando o Projeto',
        },      

        {
          type: 'docSidebar',
          sidebarId: 'apoio',
          position: 'left',
          label: 'Material de Apoio',
        },
          
        {
          type: 'docSidebar',
          sidebarId: 'about_us',
          position: 'left',
          label: 'Sobre Nós',
        },

        {
          href: 'https://github.com/MentesInovadoras',
          label: 'GitHub',
          position: 'right',
        },  
    ],


  },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;