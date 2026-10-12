# ilumcam

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Despliegue automático (Hostinger)

Cada push a `master` compila el sitio en GitHub Actions y sube `dist/` por FTP a
`public_html/` (ver `.github/workflows/deploy.yml`). Solo se suben los archivos que
cambiaron y no se borra nada que la acción no haya subido (la API en
`public_html/api` queda intacta).

Configuración, una sola vez, en GitHub → Settings → Secrets and variables → Actions:

- Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (de hPanel → Archivos → Cuentas FTP).
- Variables opcionales: `FTP_SERVER_DIR` (por defecto `public_html/`), `FTP_PROTOCOL`
  (`ftps` por defecto, o `ftp`) y `FTP_PORT` (21).

También se puede lanzar a mano desde la pestaña Actions → "Publicar sitio en Hostinger" → Run workflow.
