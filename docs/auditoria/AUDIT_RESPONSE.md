# Resposta à auditoria

Resposta de 6 de agosto de 2026 aos achados da auditoria BrutalTech. “Implementado” descreve alterações no template, não prova por si só que os gates finais passaram; os itens assinalados como dependência externa só fecham depois de existir configuração e evidência em produção.

| ID | Estado | Ação ou fundamento |
| --- | --- | --- |
| A-01 | Implementado e verificado localmente | As referências estruturais de marca passam a derivar de `identity.name`; a documentação distingue essas referências da prosa editorial, que deve ser reescrita ao personalizar. O ensaio temporário com “Marca Dinâmica QA” propagou para títulos, footer, JSON-LD, legais e email. |
| A-02 | Contestado | O nome visível faz parte do ficheiro de logótipo, e o fluxo de personalização exige substituir os ativos em `public/`. Um logótipo não deve ser reescrito pelo conteúdo. O fallback textual com `identity.name` cobre a ausência de imagem, mas não transforma o SVG do cliente em texto. |
| A-03 | Implementado e verificado localmente | As páginas legais recebem os dados da empresa a partir de `siteContent`; o HTML renderizado contém nome, email e morada centrais e não contém os placeholders auditados. |
| A-04 | Implementado | Assunto, etiquetas e texto auxiliar do email foram movidos para o conteúdo configurável. |
| A-05 | Implementado | As oito mensagens de validação foram movidas para o conteúdo e são injetadas no schema. |
| A-06 | Implementado e verificado localmente | Cores e sombras dos componentes e do email passam a derivar dos tokens de marca. No ensaio com `primary: #ff00cc`, a cor chegou ao HTML e ao email e o hex principal anterior desapareceu do runtime. |
| A-07 | Implementado e verificado localmente | O RGB isolado foi substituído por uma referência à paleta; o CSS compilado usa as variáveis `--site-color-*` e não conserva `rgb()`/`rgba()` legado. |
| A-08 | Implementado e verificado localmente | O fixture de stress usa apenas ativos existentes e renderizou 8 serviços e 7 projetos: 5 com imagem e 2 fallbacks. Foram verificadas as vistas de 1440 px e 375×823. |
| A-09 | Documentado | `mapEmbedUrl` permanece separado por exigência do Google Maps. O README obriga a atualizá-lo em conjunto com a morada e explica como gerar o embed do zero. |
| A-10 | Implementado | Os separadores de apresentação deixam de ser copy de cliente embutida nos componentes. |
| A-11 | Implementado | Os logótipos claro e escuro têm consumidores coerentes com o fundo; o fallback usa o nome configurado. |
| B-01 | Dependência externa | O README separa destinatário e remetente e documenta o teste. Falta ao responsável fornecer uma caixa real, verificar o domínio na Resend, configurar o deploy e guardar prova de sucesso no ecrã e receção na caixa. Sem estes dados não é honesto declarar entrega de email concluída. |
| B-02 | Implementado e verificado localmente; configuração externa | O tempo mínimo usa token HMAC emitido no servidor, com expiração, e existe rate limit de 5 envios/minuto/IP. Oito testes cobrem token ausente, adulterado, demasiado recente, válido, expirado, rate limit e copy dinâmica; uma submissão nativa sem token foi rejeitada pela Server Action. Produção exige um `CONTACT_FORM_TOKEN_SECRET` exclusivo. |
| B-03 | Implementado | A 404 tem metadata própria, sem canónico fictício nem duplicação de marca. |
| D-01 | Contestado | Mantêm-se HTTP 404 e `noindex`, que são o comportamento semântico correto. Lighthouse 13.4.1 abortou localmente com `ERRORED_DOCUMENT_REQUEST` precisamente por receber 404. O checklist exclui SEO da 404; responder 200 ou permitir indexação seria uma regressão. |
| D-02 | Implementado e medido | “DIFERENCIADORES” usa `#d88760` sobre `#002030`: **6,05:1**. A página `/sobre` obteve Acessibilidade 100 no Lighthouse local; falta repetir em produção. |
| D-03 | Implementado e medido | Os índices usam `#617277` sobre `#ffffff`: **5,02:1**. `/servicos` obteve Acessibilidade 100 no Lighthouse local; falta repetir em produção. |
| D-04 | Implementado e verificado localmente | `main` e footer reservam espaço para o botão fixo. Playwright confirmou, a 375×823, zero overflow e zero interseções com texto do footer nas cinco páginas indicadas; as capturas estão em `reports/lighthouse/post-audit-*-375x823.png`. |
| E-01 | Implementado com dependência externa | O README inclui a demo real e fluxos executáveis por arquivo ou Git. Não existe `origin` nesta cópia; a URL e as permissões do repositório têm de ser fornecidas pelo responsável. |
| E-02 | Implementado | O README indica o percurso exato no GA4 para obter o ID `G-…`. |
| E-03 | Implementado | Os campos folha de `siteCopy` e `legalPages` foram documentados. |
| E-04 | Implementado | `reports/` foi ignorado; os quatro relatórios locais preexistentes foram preservados no disco e deixam de sujar o worktree. |
| E-05 | Implementado | `reports/contacto.html` foi retirado do tracking e mantido apenas como artefacto local ignorado. |
| F-01 | Implementado | A navegação indica a página atual e os botões têm estados ativos. |

## Estado das verificações finais

| Verificação | Estado |
| --- | --- |
| `npm test`, `npm run build`, `npx tsc --noEmit` e `npm run lint` | **Aprovados** no conjunto final; 8/8 testes. `npm audit` também devolveu zero vulnerabilidades. |
| Lighthouse e medições de contraste | Medições e Lighthouse local concluídos; novo deploy e Lighthouse de produção continuam pendentes. |
| Formulário e receção real de email | Bloqueados pelas credenciais, remetente/domínio verificado e caixa destinatária reais. |
| Teste dinâmico de nome, cor e copy | **Aprovado localmente** com valores temporários, depois repostos; build e gates finais foram repetidos após a reposição. |
| Responsivo e stress | **Aprovados localmente** a 375×823, 768 e 1440 px; fixture misto verificado visualmente. |
| Reauditoria | **Submetida localmente em 6 de agosto de 2026: REPROVADO.** Não encontrou outro bloqueante no workspace; reprova porque o deploy público continua anterior às correções, B-01 não tem configuração/prova real e não existe `origin`. |

## Evidência Lighthouse local pós-correção

Lighthouse 13.4.1, modo mobile, contra `next start` do build de produção local. Estes valores são pré-deploy e não substituem o gate no URL público.

| Página | Performance | Acessibilidade | Boas práticas | SEO |
| --- | ---: | ---: | ---: | ---: |
| Home | 97 | 100 | 100 | 100 |
| Sobre | 96 | 100 | 100 | 100 |
| Serviços | 97 | 100 | 100 | 100 |
| Portefólio | 95 | 100 | 100 | 100 |
| Contacto | 97 | 100 | 100 | 100 |
| 404 real | — | — | — | — |

Na última linha, Lighthouse não produziu categorias: terminou com `ERRORED_DOCUMENT_REQUEST` ao receber o estado HTTP 404. A inspeção HTTP separada confirmou 404, título “Página não encontrada | Ponto de Fuga”, `noindex` e ausência de canonical.

## Estado do URL público antes do novo deploy

A verificação de 6 de agosto de 2026 confirma que a demo pública ainda serve o deployment anterior: `/contacto` contém o campo antigo `loadedAt` e não contém `formToken`; uma rota inexistente responde corretamente 404 + `noindex`, mas ainda publica o título de marca duplicado e canonical `/404`. Portanto, a implementação deste documento está validada no workspace, não publicada.

## Resultado da reauditoria independente

**Veredicto: REPROVADO.** O auditor não encontrou outro bloqueante local com a evidência disponível: build, TypeScript, lint, 8/8 testes, auditoria de dependências, testes dinâmicos, stress e browser passaram. A reprovação mantém-se porque o URL público está desatualizado, o email real/Resend e a prova de receção não existem e não há repositório remoto para entregar as alterações. O anexo da auditoria também termina com o briefing original por preencher, pelo que os dez critérios desse briefing não podem ser revalidados de forma conclusiva.

## Dependências e provas pendentes

- **Email e anti-spam:** caixa destinatária real, domínio/remetente verificado, `RESEND_API_KEY` e `CONTACT_FORM_TOKEN_SECRET` configurados na Vercel e captura de receção. Não se registam endereços nem segredos neste documento.
- **Git:** URL e permissões de um repositório autorizado; a cópia auditada não tem remote configurado.
- **Produção:** novo deploy antes de repetir Lighthouse, receção do formulário e capturas responsivas no URL público. Os equivalentes locais já passaram.
