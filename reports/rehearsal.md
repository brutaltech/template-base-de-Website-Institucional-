# Ensaio de personalização do template

Data: 5 de agosto de 2026

Empresa fictícia: **Norte Habitat — Consultoria Imobiliária**  
Setor: mediação e consultoria imobiliária  
Branch: `rehearsal/norte-habitat`

## Resultado

- Transformação inicial completa e compilada: **3 min 17 s**.
- Repetição depois da correção das variáveis de fonte: **40 s**.
- Componentes alterados no diff final contra `main`: **zero**.
- `npm run lint`: aprovado.
- `npm run build`: aprovado, com todas as 11 rotas estáticas geradas.
- Inspeção visual da Home: identidade, paleta, tipografia, conteúdo e imagens transformados.

## Âmbito comprovado

O comando `git diff --name-only main...rehearsal/norte-habitat` devolve apenas:

- `content/site.ts`
- `app/globals.css`
- ficheiros em `public/images/`

Não foi necessário editar qualquer ficheiro em `components/`, nem páginas em `app/`.

## Bugs de template encontrados e corrigidos em `main`

1. Cores de fundos e padrões estavam escritas diretamente em componentes; passaram a derivar das variáveis semânticas de `@theme`.
2. O favicon estava duplicado em `app/icon.svg`; passou a ser controlado por `content/site.ts` e `public/images/favicon.svg`.
3. As variáveis de `next/font` sobrepunham `--font-display` e `--font-body`; as fontes carregadas passaram a usar `--font-source-display` e `--font-source-body`, deixando a escolha final no `@theme`.

## Referências Git locais

- Base final validada em `main`: `edf8b7d`.
- Transformação: `14f4dea`.
- Branch atualizado com as correções de `main`: `4141928`.
