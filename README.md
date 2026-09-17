# IT Helpdesk System

A ready-to-use Vue 3 + Vite frontend for a student deployment lab. It uses mock data only and does not require a database.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
ls -la dist
```

The production website is generated in `dist/`.

## Apache deployment

Copy the contents of `dist/` into your Apache document root, or configure an Apache VirtualHost to use the directory containing the built files.

### Vue Router note

This app uses Vue Router history mode. Direct requests such as `/tickets` or `/about` need Apache to return `index.html` when the requested file does not exist. For a lab, students can investigate Apache rewrite configuration to solve the refresh/404 problem.

Example `.htaccess` approach:

```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

If using `.htaccess`, make sure Apache allows overrides for the document directory and that `mod_rewrite` is enabled.

## Suggested lab tasks

1. Clone the Git repository.
2. Inspect `package.json`.
3. Run `npm install`.
4. Run `npm run build`.
5. Inspect the generated `dist/` directory.
6. Deploy `dist/` to Apache.
7. Create an Apache VirtualHost.
8. Test the site using the server IP/domain.
9. Test `/tickets`, `/computers`, and `/about` directly.
10. Diagnose and fix the Vue Router refresh/404 issue.
