# BrutalTech — template institucional

Template Next.js para sites institucionais de pequenas empresas, com Home, Sobre, Serviços, Portefólio, Contacto e páginas legais. Inclui SEO técnico, dados estruturados, formulário transacional por Resend, WhatsApp e Google Analytics opcional. O conteúdo do cliente vive em `content/site.ts`; componentes e layout podem ser reutilizados sem reescrever o site.

**Demo publicada:** [https://brutaltech.vercel.app](https://brutaltech.vercel.app)

## Arranque local

Pré-requisitos: Node.js 20.9 ou superior, npm e Git.

Este pacote não pressupõe uma URL pública de Git. A cópia auditada não tem um remote `origin`, portanto o acesso ao código é o único dado externo que o responsável pela entrega tem de fornecer. Não tente adivinhar uma URL:

- **Por arquivo:** peça ao responsável um ZIP desta pasta, extraia-o e abra um terminal na raiz que contém `package.json`.
- **Por Git:** peça ao responsável acesso ao repositório e a respetiva URL HTTPS ou SSH. Em PowerShell, clone-a sem deixar um valor fictício no comando:

```powershell
$repositoryUrl = Read-Host "Cole a URL Git fornecida pelo responsável"
git clone $repositoryUrl projeto1
Set-Location projeto1
```

Quando estiver na raiz do projeto, instale as dependências:

```bash
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
npm run typecheck
npm run lint
npm run build
```

`npm run typecheck` corre `next typegen` antes do `tsc --noEmit`. É necessário nessa ordem: o Next.js 16 gera `LayoutProps`/`PageProps` (tipos globais usados pelas rotas) apenas ao correr `next dev`, `next build` ou `next typegen` — chamar `tsc --noEmit` isolado numa cópia acabada de clonar, sem nunca ter corrido nenhum destes três, falha por não encontrar esses tipos ainda por gerar.

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
- `siteTheme`, em `content/site.ts`: a paleta única usada pelo site e pelos emails.

Regras práticas:

- Mantenha cada `id` único, curto e sem espaços.
- Use caminhos iniciados por `/` para ficheiros dentro de `public/`.
- Use URLs completas, começadas por `https://`, para redes sociais e mapa.
- O número de WhatsApp deve incluir o indicativo internacional. A mensagem é codificada automaticamente.
- `siteContent.contact.email` é o **destinatário** público do formulário: substitua-o pelo email real do cliente e confirme que essa caixa recebe mensagens. `RESEND_FROM_EMAIL` é o **remetente** técnico, configurado no ambiente, e tem de usar um domínio ou subdomínio verificado na Resend. São valores independentes e ambos têm de estar corretos.
- Fotografias de equipa e portefólio podem ser omitidas: o layout tem um fallback, mas a entrega final deve usar o inventário completo quando o cliente fornecer imagens.

#### Atualizar a morada e o mapa

> Nota: as páginas legais continuam em MDX separado (`content/legal/*.mdx`). Isso é intencional, porque o rebrand deve alterar os dados da empresa em `siteContent` sem exigir edição jurídica nas políticas. O texto legal mantém a estrutura editorial nos MDX e agarra apenas `siteContent.identity`, `siteContent.contact.email` e `siteContent.contact.address` para interpolação.


`contact.address.mapEmbedUrl` é um campo separado da morada estruturada porque o URL de incorporação do Google Maps tem parâmetros próprios. Trate os dois valores como um par acoplado e atualize-os na mesma alteração:

1. Atualize `street`, `postalCode`, `city` e `country` em `siteContent.contact.address`.
2. Num computador, abra o [Google Maps](https://maps.google.com) e pesquise a morada completa; confirme visualmente que o marcador está no local certo.
3. Escolha **Partilhar → Incorporar um mapa**, selecione o tamanho e clique em **Copiar HTML**. Se estiver a partilhar a vista do mapa em vez de um local, use **Menu → Partilhar ou incorporar mapa → Incorporar um mapa**. Consulte as [instruções oficiais do Google Maps](https://support.google.com/maps/answer/7101463).
4. No HTML copiado, copie apenas o URL completo entre aspas no atributo `src="…"` do `iframe`.
5. Cole esse URL em `contact.address.mapEmbedUrl`, sem colar o elemento `iframe`.
6. Abra `/contacto` e confirme o marcador, a morada visível e o link para abrir o mapa. Corra também `npm run build`.

### 2. Cores e fontes

Edite as cores apenas em `siteTheme.colors`, no ficheiro `content/site.ts`. O layout converte estes valores em variáveis CSS, o Tailwind consome-as e o template de email reutiliza os mesmos valores; não mantenha uma segunda paleta em componentes ou em `app/globals.css`.

| Campo | Controla |
| --- | --- |
| `primary` | Texto principal, botões e elementos estruturais |
| `secondary` | Fundos escuros e superfícies de alto contraste |
| `accent` | Destaques sobre fundos claros |
| `accentOnDark` | Destaques com contraste AA sobre `secondary` |
| `mutedText` | Texto secundário com contraste AA sobre fundos claros |
| `canvas` | Fundo base da página e transparência do cabeçalho/hero |
| `surface` | Secções e cartões com fundo alternativo |
| `surfaceSoft` | Variação muito suave para cartões estatísticos |
| `success` | WhatsApp e mensagens de sucesso |
| `successHover` | Estado hover da cor de sucesso |
| `white` | Branco da marca e misturas com transparência |

As fontes são carregadas em `app/layout.tsx` com `next/font` e expostas como `--font-source-display` e `--font-source-body`. Para trocar apenas entre as duas famílias já carregadas, altere `--font-display` e `--font-body` no bloco `@theme inline` de `app/globals.css`; para adotar outra família, atualize também a importação de `next/font` no layout.

Depois de trocar a paleta, teste todas as combinações texto/fundo no [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). Como referência, WCAG AA pede 4,5:1 para texto normal, 3:1 para texto grande e 3:1 para componentes gráficos de interface. Faça ainda o teste dinâmico: mude temporariamente `siteTheme.colors.primary`, compile e confirme que a cor antiga não sobrevive no site, nas sombras nem no email; depois reponha o valor final.

### 3. Imagens

Substitua os ficheiros mantendo nomes, dimensões e rácios. Se alterar um nome, atualize o caminho correspondente em `content/site.ts`.

| Pasta / ficheiro | Dimensões | Formato | Rácio | Utilização |
| --- | ---: | --- | ---: | --- |
| `public/images/home/brutaltech-hero.webp` | 1920×1080 | WebP, qualidade ~80 | 16:9 | Hero da Home; manter a zona esquerda visualmente calma para o texto |
| `public/images/portfolio/*.webp` | 1200×900 | WebP, qualidade ~80 | 4:3 | Todos os cartões do Portefólio |
| `public/images/team/*.webp` | 800×800 | WebP, qualidade ~80 | 1:1 | Retratos da Equipa |
| `public/images/og/brutaltech.webp` | 1200×630 | WebP, qualidade ~80 | 40:21 | Open Graph e Twitter por omissão |
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

Os dados estruturais da empresa — nome, email e morada — já são lidos de `content/site.ts`. Reveja integralmente o restante texto para o caso real, confirme fornecedores, retenção de dados, cookies e analytics e atualize a data no fim de cada ficheiro.

Os ficheiros fornecem estrutura editorial, não aconselhamento jurídico. O texto final e a respetiva validação legal são responsabilidade de quem publica o site do cliente.

### 5. Analytics

Defina `NEXT_PUBLIC_GA_ID` com o ID de medição do cliente, por exemplo `G-XXXXXXXXXX`, e volte a fazer deploy. Não é necessário editar componentes. Se a variável estiver vazia, o Google Analytics não é carregado.

Para obter o valor, abra a propriedade do cliente no GA4 e siga **Administração → Recolha e modificação de dados → Fluxos de dados → Web → [fluxo do site]**. Copie o **ID de medição** mostrado nos detalhes do fluxo; começa por `G-`. É necessário ter, pelo menos, acesso de Editor à propriedade. Consulte a [instrução oficial para localizar o ID de medição](https://support.google.com/analytics/answer/12270356).

Confirme antes da ativação se o enquadramento legal do cliente exige consentimento prévio para analytics.

## Variáveis de ambiente

Nunca faça commit de `.env.local` ou de chaves reais. O `.gitignore` já exclui ficheiros `.env*`, exceto `.env.example`.

| Nome | Obrigatória | O que faz | Onde obter / exemplo |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | Para o formulário real | Autentica o envio transacional no servidor | Crie uma chave com permissão **Sending access** no [dashboard de API keys da Resend](https://resend.com/docs/dashboard/api-keys/introduction). O valor só é mostrado uma vez. |
| `RESEND_FROM_EMAIL` | Para o formulário real | Define o remetente do email | Use `Nome do site <contacto@subdominio.cliente.pt>`. O domínio ou subdomínio tem de estar verificado na Resend. |
| `CONTACT_FORM_TOKEN_SECRET` | Em produção | Assina o token temporal anti-spam no servidor | Gere um valor aleatório exclusivo, com pelo menos 32 caracteres de entropia; por exemplo, `openssl rand -base64 32`. Não use prefixo `NEXT_PUBLIC_`. |
| `NEXT_PUBLIC_SITE_URL` | Em produção | Base absoluta de canónicos, sitemap, robots, OG e JSON-LD | URL final com `https://` e sem caminho, por exemplo `https://cliente.pt`. |
| `NEXT_PUBLIC_GA_ID` | Não | Ativa Google Analytics quando preenchida | Em GA4: **Administração → Fluxos de dados → Web → fluxo do site**; copie o ID de medição `G-…`. Deixe vazio na demo. |

`CONTACT_FORM_TOKEN_SECRET` não tem fallback em produção: se estiver ausente ou for inválido, a proteção anti-spam falha fechada e a submissão é recusada. Em desenvolvimento existe apenas um fallback local fixo para facilitar o arranque; nunca o trate como configuração de produção. Guarde o segredo apenas em `.env.local` e nas variáveis protegidas do alojamento. Para o gerar sem OpenSSL, pode usar `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`.

Para preparar a Resend:

1. Em **Domains**, adicione de preferência um subdomínio dedicado, como `envios.cliente.pt`.
2. Publique no DNS os registos SPF e DKIM indicados e espere pelo estado **Verified**. A [documentação de domínios da Resend](https://resend.com/docs/dashboard/domains/introduction) explica os registos necessários.
3. Crie uma API key com acesso apenas a envio e, se possível, restrita ao domínio.
4. Use em `RESEND_FROM_EMAIL` exatamente o domínio ou subdomínio verificado; diferenças entre `cliente.pt` e `envios.cliente.pt` causam erro 403.
5. Defina `siteContent.contact.email` com uma caixa real do cliente que possa confirmar a receção; não use domínios reservados como `.example`.
6. Coloque a chave apenas em `.env.local` e nas variáveis protegidas da Vercel.
7. Em produção, faça uma submissão válida e só considere o formulário entregue quando vir o estado de sucesso **e** a mensagem chegar à caixa destinatária. Guarde uma captura com destinatário, assunto e hora, sem expor dados sensíveis.

## Deploy na Vercel

### Preparar o repositório

1. Confirme `npm run lint` e `npm run build` sem erros.
2. Garanta que a branch de produção se chama `main` e que `git status` está limpo.
3. Execute `git remote -v`. Se já existir um `origin` autorizado, use-o. Se o comando não devolver nada, crie um repositório vazio na conta GitHub que vai manter o projeto ou peça acesso ao repositório privado do responsável.
4. Copie a URL HTTPS ou SSH apresentada pelo GitHub e, apenas no caso de ainda não existir `origin`, configure-a por introdução interativa. A URL é uma dependência externa e não está inventada neste template:

```powershell
git branch -M main
$repositoryUrl = Read-Host "Cole a URL HTTPS ou SSH do repositório autorizado"
git remote add origin $repositoryUrl
git push -u origin main
```

Se `origin` já existir, não volte a executar `git remote add`; confirme o destino com `git remote get-url origin` e execute apenas `git push -u origin main`. Num repositório privado, o proprietário tem ainda de conceder acesso à conta que fará a importação na Vercel.

### Importar e configurar

1. No dashboard da Vercel, escolha **Add New → Project**, importe o repositório e confirme o preset **Next.js**. A integração Git cria previews por branch e publica a branch de produção; consulte o [fluxo Git oficial da Vercel](https://vercel.com/docs/git).
2. Em **Settings → Environment Variables**, adicione as cinco variáveis para **Production** e **Preview**. Deixe `NEXT_PUBLIC_GA_ID` vazio na demo. Alterações de variáveis só afetam novos deployments, por isso faça redeploy depois de as guardar; veja a [documentação de ambientes](https://vercel.com/docs/environment-variables).
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
- [ ] Textos legais revistos, validados para o caso real e com a data de atualização correta.
- [ ] Domínio próprio ativo e `NEXT_PUBLIC_SITE_URL` igual ao domínio canónico.
- [ ] Sitemap, robots, canonical, Open Graph e JSON-LD usam URLs de produção.
- [ ] Formulário enviado em produção e email recebido na caixa correta.
- [ ] WhatsApp testado num telemóvel real, com número e mensagem corretos.
- [ ] Analytics configurado ou deliberadamente deixado inativo.
- [ ] Lighthouse de produção ≥ 90 nas quatro categorias em todas as páginas de conteúdo verificadas; relatórios arquivados.
- [ ] Na 404, Performance, Acessibilidade e Boas Práticas são ≥ 90. A categoria SEO fica excluída deste limiar: uma 404 deve responder com HTTP 404 e `noindex`, e não deve ser tornada indexável nem responder 200 apenas para aumentar a pontuação Lighthouse.
- [ ] `npm run typecheck`, `npm run lint`, `npm run build` e `git status` sem problemas pendentes.

## Validação do desacoplamento

O template foi transformado numa consultora imobiliária fictícia no branch `rehearsal/norte-habitat`. A transformação inicial demorou 3 min 17 s; depois de corrigidos os problemas encontrados no template, a repetição demorou 40 s. O ensaio original alterou apenas `content/site.ts`, a paleta e ficheiros de `public/images/`, sem alterações a componentes. A paleta foi entretanto centralizada em `content/site.ts`, que é o ponto atual de personalização. Consulte o [relatório histórico do ensaio](reports/rehearsal.md).

### Testar variações de conteúdo (stress test)

Para validar que o layout aguenta nomes longos, muitos serviços e portefólio misto (com e sem imagem) sem editar código, ative o conjunto de conteúdo de stress test por variável de ambiente:

```bash
NEXT_PUBLIC_CONTENT_SET=stress npm run dev
```

Isto troca `siteContent` para o fixture definido em `content/site.stress-test.ts` (nome de marca muito longo, 8 serviços, 7 projetos de portefólio dos quais 2 sem imagem). Sirva para conferir grelhas, quebras de texto e o fallback de imagem em falta a 375px, 768px e 1440px. **Nunca defina `NEXT_PUBLIC_CONTENT_SET=stress` num ambiente de produção ou de demo** — é só uma ferramenta de verificação local; para voltar ao conteúdo real, arranque sem a variável (ou com `NEXT_PUBLIC_CONTENT_SET` vazio/omitido).

## Comandos úteis

```bash
npm run dev        # desenvolvimento local
npm test           # valida schema configurável, token HMAC e rate limit
npm run typecheck  # gera os tipos de rotas (next typegen) e corre tsc --noEmit
npm run lint       # regras de qualidade e acessibilidade estática
npm run build      # compilação de produção
npm run start      # serve localmente a compilação de produção
```

## Documentação interna

`docs/auditoria/AUDIT_RESPONSE.md` regista a resposta a auditorias de conformidade anteriores deste template. É histórico do processo, não conteúdo do site — não precisa de ser lido nem editado para personalizar ou publicar um site de cliente.
