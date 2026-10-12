const { defineConfig } = require('@vue/cli-service')

// URL pública del sitio (sin "/" final), p. ej. VUE_APP_SITE_URL=https://www.midominio.com en .env.production
const SITE_URL = (process.env.VUE_APP_SITE_URL || '').replace(/\/$/, '')

// Rutas públicas que se incluyen en el sitemap
const PUBLIC_ROUTES = ['/', '/blog']

// Genera robots.txt y sitemap.xml en el build a partir de SITE_URL
class SeoFilesPlugin {
  apply(compiler) {
    const { Compilation, sources } = compiler.webpack
    compiler.hooks.thisCompilation.tap('SeoFilesPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'SeoFilesPlugin', stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL },
        () => {
          const robots = [
            'User-agent: *',
            'Disallow: /admin',
            'Disallow: /listar',
            'Disallow: /crear',
            'Disallow: /editar/',
          ]
          if (SITE_URL) {
            robots.push('', `Sitemap: ${SITE_URL}/sitemap.xml`)
            const lastmod = new Date().toISOString().slice(0, 10)
            const urls = PUBLIC_ROUTES.map((path) =>
              `  <url><loc>${SITE_URL}${path}</loc><lastmod>${lastmod}</lastmod></url>`
            ).join('\n')
            compilation.emitAsset('sitemap.xml', new sources.RawSource(
              `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
            ))
          }
          compilation.emitAsset('robots.txt', new sources.RawSource(robots.join('\n') + '\n'))
        }
      )
    })
  }
}

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [new SeoFilesPlugin()],
  },
  chainWebpack: (config) => {
    // <lord-icon> es un custom element, no un componente de Vue
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          ...(options && options.compilerOptions),
          isCustomElement: (tag) => tag === 'lord-icon',
        },
      }))
  },
})
