// ============================================================
//  LP Desajustada 2 — versão com seções (quebra de objeção)
//  Único arquivo que você mexe por campanha.
//
//  REGRA GERAL: campo vazio ('') esconde o bloco correspondente.
//  Nada aqui inventa informação — o que você não preencher, some.
// ============================================================
window.LP_CONFIG = {

  /* ===== ARTE DO TOPO ===== */
  // Vertical, ideal 1080x1620 (2:3). Evite 9:16: sobra barra nas laterais.
  arte: 'assets/arte-placeholder.svg',
  arteAjuste: 'contain',   // 'contain' = arte inteira | 'cover' = preenche e corta

  /* ===== ABA DO NAVEGADOR =====
     Título que aparece na aba e quando o link é compartilhado.
     Sem valor em dinheiro aqui de propósito: o que fica exposto é
     a aba do celular de quem abriu, não a oferta. */
  tituloAba: 'Bilhete do dia',

  /* ===== SELO ===== */
  selo: 'Bilhete disponível',

  /* ===== PRIMEIRO FOLD ===== */
  valor: 'R$ 3.000',       // vira "<valor> no seu bolso ou seu dinheiro de volta"
  oddDe: 'odd 13.50',
  oddPara: 'odd 102.7',
  ctaLabel: 'Quero esse bilhete',

  // Contagem regressiva. Desligada. Pra ligar, horário do primeiro jogo em
  // ISO com fuso, ex: '2026-08-26T18:00:00-03:00'.
  deadline: '',

  /* ===== QUEM ESTÁ FALANDO ===== */
  autor: {
    // Foto opcional em /assets, largura cheia do card, recortada pelo centro.
    // Arquivo ausente ou quebrado remove a figura inteira, sem deixar buraco.
    foto: 'assets/caumo-instituto.jpg',

    // Legenda abaixo da foto. '' esconde só a legenda, a foto fica.
    // Descreva só o que dá pra ver — não afirme mais do que a imagem mostra.
    fotoLegenda: 'Instituto Projeto Neymar Jr. — São Paulo, junho de 2024',

    nome: 'Mateus Caumo',
    titulo: 'Apostador profissional há mais de 13 anos',
    texto: 'Eu não acho esses desajustes por sorte. É o que eu faço todo dia há mais de 13 anos: comparar linha por linha, casa por casa, até achar uma que está pagando errado. Quando acho, eu passo pra você antes da casa corrigir.',
    // Cada selo vazio some. Preencha só com número que você tenha de verdade.
    selos: [
      '13 anos de mercado',
      '',   // ex: 'X mil no canal'
      ''    // ex: 'X desajustes esse mês'
    ]
  },

  /* ===== REEMBOLSO ===== */
  reembolso: {
    titulo: 'Deu red? Você recebe de volta',
    prazo: '48h',
    // Os passos que a pessoa precisa cumprir. Item vazio some.
    passos: [
      'Tira print do <b>comprovante da conta criada hoje</b> pelo botão desta página.',
      'Tira print do <b>bilhete redado</b>.',
      'Manda os dois no suporte. O Pix cai em até <b>48h</b>.'
    ],
    // As regras da proteção. Item vazio some.
    regras: [
      'Vale só pra <b>conta nova</b>, criada hoje pelo botão desta página.',
      'Uma aposta protegida <b>por pessoa</b>, neste bilhete.'
    ],
    ctaLabel: 'Pedir reembolso no suporte'
  },

  /* ===== POR QUE EU FAÇO ISSO =====
     Seção DESLIGADA. O bloco existe na página e volta sozinho se você
     preencher o texto de novo. '' mantém escondido. */
  porque: {
    titulo: '',
    texto: ''
  },

  /* ===== PERGUNTAS =====
     Pergunta com resposta vazia NÃO aparece na página.
     Preencha só o que você souber responder com segurança. */
  faq: [
    {
      p: 'Já tenho conta na BetWarrior. Vale pra mim?',
      r: 'A proteção vale só pra conta nova criada hoje pelo botão desta página. O bilhete continua disponível pra você, mas sem a devolução.'
    },
    {
      p: 'Quanto eu preciso depositar?',
      // PREENCHER com o depósito mínimo real da casa. Enquanto vazio, some.
      r: ''
    },
    {
      p: 'E se a casa cancelar a aposta?',
      // PREENCHER. Essa é a objeção que mais derruba conversão nesse tipo de
      // oferta: a página inteira diz que a odd está desajustada, e quem aposta
      // sabe que casa cancela aposta com erro de precificação.
      // Sugestão a confirmar com a casa antes de publicar:
      // 'Não é erro de digitação, é a casa precificando diferente das grandes.
      //  A aposta é aceita normalmente. Se por qualquer motivo cancelarem, eu
      //  devolvo do mesmo jeito.'
      r: ''
    },
    {
      p: 'Preciso mandar documento?',
      // PREENCHER com o que a casa pede de fato no cadastro.
      r: ''
    }
  ],

  /* ===== LINKS ===== */
  link: 'https://link.arenaaffiliates.com.br/V5XYSZP',
  linkSuporte: 'https://t.me/suportecaumobot?start=6a8c9cf2c1a13ec6c4054fd1',

  /* ===== RODAPÉ ===== */
  termos: 'Proteção promocional independente da casa de apostas, exclusiva para contas novas criadas no mesmo dia através desta página e limitada a uma aposta por pessoa neste bilhete. Devolução via Pix em até 48h mediante comprovante de criação da conta no dia e print do bilhete redado. Apostas esportivas envolvem risco e não existe ganho garantido. Aposte apenas o que você pode perder. Conteúdo destinado a maiores de 18 anos. Este site não faz parte do Facebook Inc. nem é endossado pelo Facebook de nenhuma maneira.',

  // Repassa utm_* e fbclid pro link da casa.
  // O link atual e um encurtador limpo (sem query string), entao anexar
  // '?utm_source=...' e seguro — nao ha cupom pra quebrar. Ligar isso faz
  // a origem do clique chegar na plataforma de afiliado.
  // Deixado desligado so porque e mudanca de comportamento do link: ligue
  // quando quiser fechar a atribuicao.
  repassarParametros: false
};
