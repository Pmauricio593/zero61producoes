# Zero61 Produções

Site institucional publicado pela Vercel a partir da branch `main`.

## Estrutura atual

- `client/index.html`: página principal.
- `client/public/styles.css`: estilos e responsividade.
- `client/public/script.js`: menu, abas, formulário e interações.
- `client/public/assets/media/`: fotografias otimizadas usadas no site.
- `vercel.json`: build Vite e diretório de saída `dist/public`.

O código e os ativos da versão anterior permanecem no histórico Git. O snapshot imediatamente anterior à nova experiência está identificado pela tag `portfolio-site-antigo-2026-10-16`.

## Verificação local

```bash
pnpm install --frozen-lockfile
pnpm exec vite build
```
