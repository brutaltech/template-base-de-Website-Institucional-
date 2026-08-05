# Ponto de Fuga — template institucional BrutalTech

Template Next.js para sites institucionais de pequenas empresas, com Home, Sobre, Serviços, Portefólio, Contacto e páginas legais. Inclui SEO técnico, dados estruturados, formulário transacional por Resend, WhatsApp e Google Analytics opcional. O conteúdo do cliente vive em `content/site.ts`; componentes e layout podem ser reutilizados sem reescrever o site.

## Arranque local

Pré-requisitos: Node.js 20.9 ou superior, npm e Git.

```bash
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>
npm install
```

Crie o ficheiro local de ambiente a partir do exemplo:

```powershell
Copy-Item .env.example .env.local
```

Em macOS ou Linux, use `cp .env.example .env.local`. Preencha as variáveis descritas mais abaixo e arranque o servidor:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Antes de entregar ou publicar, execute também:

```bash
npm run lint
npm run build
```

## Personalizar para um cliente

Siga esta ordem. Assim, cada etapa usa a anterior como base e é mais fácil detetar dados esquecidos.

### 1. Conteúdo e identidade

Edite `content/site.ts`. O ficheiro tem tipos e comentários campo a campo; a visão geral é:

- `siteContent.identity`: nome, posicionamento, descrição, logótipos e favicon.
- `siteContent.contact`: email que recebe o formulário, telefone, WhatsApp, morada, mapa, horários e redes sociais.
- `siteContent.nav` e `siteContent.footer`: navegação, texto institucional e links legais.
- `siteContent.seoDefaults`: título, descrição e imagem social usados como fallback.
- `siteContent.pages`: SEO e conteúdo de Home, Sobre, Serviços, Portefólio, Contacto e erro 404.
- `siteCopy`: microcopy estrutural, como etiquetas de navegação, títulos auxiliares e mensagens de interface.
- `legalPages`: nomes, rotas e SEO das páginas legais.

Regras práticas:

- Mantenha cada `id` único, curto e sem espaços.
- Use caminhos iniciados por `/` para ficheiros dentro de `public/`.
- Use URLs completas, começadas por `https://`, para redes sociais e mapa.
- O número de WhatsApp deve incluir o indicativo internacional. A mensagem é codificada automaticamente.
- O formulário envia para `siteContent.contact.email`; confirme que é uma caixa real antes do teste final.
- Fotografias de equipa e portefólio podem ser omitidas: o layout tem um fallback, mas a entrega final deve usar o inventário completo quando o cliente fornecer imagens.

### 2. Cores e fontes

Edite o primeiro bloco `@theme` em `app/globals.css`:

| Variável | Controla |
| --- | --- |
| `--color-brand-primary` | Texto principal, contornos e superfícies de maior contraste |
| `--color-brand-secondary` | Fundos escuros e variação institucional |
| `--color-brand-accent` | Botões, etiquetas, foco e pequenos destaques |
| `--color-brand-canvas` | Fundo base da página e transparência do cabeçalho/hero |
| `--color-brand-surface` | Secções e cartões com fundo alternativo |
| `--color-brand-surface-soft` | Variação muito suave para cartões estatísticos |
| `--color-brand-success` | WhatsApp e mensagens de sucesso |
| `--color-brand-success-hover` | Estado hover do botão WhatsApp |
| `--font-display` | Títulos e elementos de marca; use `var(--font-source-display)` ou `var(--font-source-body)` |
| `--font-body` | Texto corrente, navegação e formulários; use `var(--font-source-body)` ou `var(--font-source-display)` |

As fontes são carregadas em `app/layout.tsx` com `next/font` e expostas como `--font-source-display` e `--font-source-body`. Para trocar apenas entre as duas famílias já carregadas, altere as referências no `@theme`; para adotar outra família, atualize também a importação de `next/font` no layout.

Depois de trocar a paleta, teste todas as combinações texto/fundo no [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). Como referência, WCAG AA pede 4,5:1 para texto normal, 3:1 para texto grande e 3:1 para componentes gráficos de interface.

### 3. Imagens

Substitua os ficheiros mantendo nomes, dimensões e rácios. Se alterar um nome, atualize o caminho correspondente em `content/site.ts`.

| Pasta / ficheiro | Dimensões | Formato | Rácio | Utilização |
| --- | ---: | --- | ---: | --- |
| `public/images/home/atelier-hero.webp` | 1920×1080 | WebP, qualidade ~80 | 16:9 | Hero da Home; manter a zona esquerda visualmente calma para o texto |
| `public/images/portfolio/*.webp` | 1200×900 | WebP, qualidade ~80 | 4:3 | Todos os cartões do Portefólio |
| `public/images/team/*.webp` | 800×800 | WebP, qualidade ~80 | 1:1 | Retratos da Equipa |
| `public/images/og/ponto-de-fuga.webp` | 1200×630 | WebP, qualidade ~80 | 40:21 | Open Graph e Twitter por omissão |
| `public/images/logo-dark.svg` | 480×120 viewBox | SVG | 4:1 | Logótipo para fundos claros |
| `public/images/logo-light.svg` | 480×120 viewBox | SVG | 4:1 | Logótipo para fundos escuros |
| `public/images/favicon.svg` | 64×64 viewBox | SVG | 1:1 | Favicon definido por `siteContent.identity.favicon` |

Checklist de cada imagem:

1. Corte para o rácio indicado antes de exportar.
2. Exporte fotografias em WebP com qualidade próxima de 80.
3. Confirme que nenhum ficheiro ultrapassa 300 KB.
4. Escreva um `imageAlt` descritivo para o hero; nos restantes cartões, o título é usado como texto alternativo.
5. Corra `npm run build` e repita o Lighthouse na Home e no Portefólio.

As fotografias incluídas nesta demo foram geradas por IA como um conjunto original e coerente; não misturam bancos de imagem. Ao adaptar, confirme direitos de utilização, consentimento de pessoas identificáveis e adequação ao cliente.

### 4. Textos legais

Edite:

- `content/legal/politica-de-privacidade.mdx`
- `content/legal/termos.mdx`

Pesquise por `[PLACEHOLDER A SUBSTITUIR]`, substitua todas as ocorrências e acrescente a data de atualização. Reveja também fornecedores, retenção de dados, cookies e analytics usados no projeto real.

Os ficheiros fornecem estrutura editorial, não aconselhamento jurídico. O texto final e a respetiva validação legal são responsabilidade de quem publica o site do cliente.

### 5. Analytics

Defina `NEXT_PUBLIC_GA_ID` com o ID de medição do cliente, por exemplo `G-XXXXXXXXXX`, e volte a fazer deploy. Não é necessário editar componentes. Se a variável estiver vazia, o Google Analytics não é carregado.

Confirme antes da ativação se o enquadramento legal do cliente exige consentimento prévio para analytics.

## Variáveis de ambiente

Nunca faça commit de `.env.local` ou de chaves reais. O `.gitignore` já exclui ficheiros `.env*`, exceto `.env.example`.

| Nome | Obrigatória | O que faz | Onde obter / exemplo |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | Para o formulário real | Autentica o envio transacional no servidor | Crie uma chave com permissão **Sending access** no [dashboard de API keys da Resend](https://resend.com/docs/dashboard/api-keys/introduction). O valor só é mostrado uma vez. |
| `RESEND_FROM_EMAIL` | Para o formulário real | Define o remetente do email | Use `Nome do site <contacto@subdominio.cliente.pt>`. O domínio ou subdomínio tem de estar verificado na Resend. |
| `NEXT_PUBLIC_SITE_URL` | Em produção | Base absoluta de canónicos, sitemap, robots, OG e JSON-LD | URL final com `https://` e sem caminho, por exemplo `https://cliente.pt`. |
| `NEXT_PUBLIC_GA_ID` | Não | Ativa Google Analytics quando preenchida | ID de medição GA4, por exemplo `G-XXXXXXXXXX`; deixe vazio na demo. |

Para preparar a Resend:

1. Em **Domains**, adicione de preferência um subdomínio dedicado, como `envios.cliente.pt`.
2. Publique no DNS os registos SPF e DKIM indicados e espere pelo estado **Verified**. A [documentação de domínios da Resend](https://resend.com/docs/dashboard/domains/introduction) explica os registos necessários.
3. Crie uma API key com acesso apenas a envio e, se possível, restrita ao domínio.
4. Use em `RESEND_FROM_EMAIL` exatamente o domínio ou subdomínio verificado; diferenças entre `cliente.pt` e `envios.cliente.pt` causam erro 403.
5. Coloque a chave apenas em `.env.local` e nas variáveis protegidas da Vercel.

## Deploy na Vercel

### Preparar o repositório

1. Confirme `npm run lint` e `npm run build` sem erros.
2. Garanta que a branch de produção se chama `main` e que `git status` está limpo.
3. Crie um repositório GitHub, configure-o como `origin` e envie `main`.

```bash
git branch -M main
git remote add origin <URL_GIT_DO_REPOSITORIO>
git push -u origin main
```

### Importar e configurar

1. No dashboard da Vercel, escolha **Add New → Project**, importe o repositório e confirme o preset **Next.js**. A integração Git cria previews por branch e publica a branch de produção; consulte o [fluxo Git oficial da Vercel](https://vercel.com/docs/git).
2. Em **Settings → Environment Variables**, adicione as quatro variáveis para **Production** e **Preview**. Deixe `NEXT_PUBLIC_GA_ID` vazio na demo. Alterações de variáveis só afetam novos deployments, por isso faça redeploy depois de as guardar; veja a [documentação de ambientes](https://vercel.com/docs/environment-variables).
3. Se ainda não souber o domínio `*.vercel.app`, faça um primeiro deploy, copie a URL de produção, defina-a em `NEXT_PUBLIC_SITE_URL` e faça redeploy.
4. Para domínio próprio, abra **Settings → Domains**, associe o domínio, aplique os registos DNS pedidos, troque `NEXT_PUBLIC_SITE_URL` para a URL canónica e faça novo deploy. Não deixe a URL temporária da Vercel nos metadados finais.

### Verificar em produção

Faça estas verificações no URL público, não em `next dev`:

1. Abra `/`, `/sobre`, `/servicos`, `/portfolio`, `/contacto`, `/politica-de-privacidade` e `/termos`; confirme que a consola do browser não mostra erros.
2. Abra `/sitemap.xml` e `/robots.txt`; ambos devem referir o domínio de produção.
3. Veja o código-fonte de Home e Contacto; confirme canonical, Open Graph e JSON-LD com URLs de produção.
4. Envie o formulário com dados de teste, aguarde pelo email e guarde um print onde se veja remetente, destinatário, assunto e hora. O destinatário é `siteContent.contact.email`.
5. Num telemóvel real, toque no botão WhatsApp e confirme número e mensagem pré-preenchida sem enviar a mensagem.
6. Corra Lighthouse em janela privada para Home e Portefólio; guarde HTML/JSON e confirme todas as categorias com pelo menos 90.

## Checklist de entrega ao cliente

- [ ] Nome, textos, contactos, morada, horários e redes sociais foram confirmados pelo cliente.
- [ ] Logótipos, favicon, imagens e textos alternativos são finais e têm direitos de utilização.
- [ ] Paleta revista com contraste AA e layout testado em telemóvel e desktop.
- [ ] Textos legais revistos e todos os `[PLACEHOLDER A SUBSTITUIR]` removidos.
- [ ] Domínio próprio ativo e `NEXT_PUBLIC_SITE_URL` igual ao domínio canónico.
- [ ] Sitemap, robots, canonical, Open Graph e JSON-LD usam URLs de produção.
- [ ] Formulário enviado em produção e email recebido na caixa correta.
- [ ] WhatsApp testado num telemóvel real, com número e mensagem corretos.
- [ ] Analytics configurado ou deliberadamente deixado inativo.
- [ ] Lighthouse de produção ≥ 90 na Home e no Portefólio; relatórios arquivados.
- [ ] `npm run lint`, `npm run build` e `git status` sem problemas pendentes.

## Validação do desacoplamento

O template foi transformado numa consultora imobiliária fictícia no branch `rehearsal/norte-habitat`. A transformação inicial demorou 3 min 17 s; depois de corrigidos os problemas encontrados no template, a repetição demorou 40 s. O diff final contém apenas `content/site.ts`, o `@theme` e ficheiros de `public/images/`, sem alterações a componentes. Consulte o [relatório do ensaio](reports/rehearsal.md).

## Comandos úteis

```bash
npm run dev      # desenvolvimento local
npm run lint     # regras de qualidade e acessibilidade estática
npm run build    # compilação de produção
npm run start    # serve localmente a compilação de produção
```
