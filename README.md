# LP Desajustada 2 — versão com seções

Variante da LP de campanha com **quebra de objeção**. Mesmo primeiro fold
da LP 1 (tela cheia, arte + headline + comparação de odd + botão), e abaixo
as seções que respondem o que trava o cadastro.

Página estática: `index.html` + `config.js` + `assets/`. Sem build.

## Seções

| seção | objeção que ela responde |
| --- | --- |
| Quem está te falando isso | "quem é você pra eu confiar meu CPF?" |
| Deu red? Você recebe de volta | "como e quando eu recebo?" |
| Por que eu devolveria seu dinheiro | "qual a pegadinha?" |
| Ainda em dúvida? | as demais, uma a uma |

## Regra do config

**Campo vazio esconde o bloco.** Nada aqui inventa informação: seção sem
conteúdo simplesmente não renderiza, e a página continua íntegra.

Isso vale especialmente pro FAQ: **pergunta sem resposta não vira card**.
Plantar a dúvida na cabeça da pessoa e deixar a resposta em branco é pior
do que não ter a pergunta.

## O que falta preencher

Em `config.js`, dentro de `faq`, três respostas estão vazias de propósito
porque só você sabe:

- **Quanto eu preciso depositar** — o mínimo real da casa
- **E se a casa cancelar a aposta** — a objeção que mais derruba conversão
  nesse tipo de oferta; tem sugestão de resposta no comentário do arquivo
- **Preciso mandar documento** — o que a casa pede no cadastro

E em `autor.selos`, dois selos estão vazios pra você pôr número que tenha
de verdade (tamanho de canal, desajustes do mês).

## Rodar

```
npx serve .
```

## Deploy

Vercel, projeto estático, sem framework. Root = raiz do repo.
