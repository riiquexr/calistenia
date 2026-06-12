## Objetivo
Recriar o quiz "Calistenia by Atlas" exatamente como nos prints: fluxo de várias etapas com header fixo, barra de progresso, e telas alternando entre perguntas, transições e conteúdo motivacional.

## Estrutura de telas (10 etapas na ordem)
1. **Idade** — Hero com título grande "Programa de Calistenia Asiática para Mulheres", subtítulo "TESTE DE 1 MINUTO", pergunta "Quantos anos você tem?" + 4 opções (39-45, 46-50, 51-60, 60+) com seta. Imagem da mulher à direita.
2. **Transição social proof** — Imagem grupo de mulheres, "Elas conseguiram e você também pode", "Mais de 27 milhões…", botão "Continuar".
3. **Experiência prévia** — "Você já experimentou exercícios de calistenia?" + Sim/Não. Imagem mulher à direita.
4. **Diferencial** — Texto à esquerda "Você já tem a base, mas a Calistenia Asiática é diferente…" + imagem mulher no sofá. Botão "CONTINUAR".
5. **Objetivo principal** — 4 opções com ícones (Perder peso, Desenvolver músculos, Manter peso, Melhorar aptidão).
6. **Expectativas (múltipla escolha)** — 5 opções com ícones + checkbox circular. Botão "Continuar".
7. **Zonas de preocupação (parte 1)** — Toggle "Melhorar o corpo inteiro" + lista com miniaturas (Queixo duplo, Braços flácidos, Seios caídos, Gordura barriga, Gordura joelhos, Traseiro de alforje).
8. **Zonas de preocupação (parte 2 / scroll)** — continuação da lista (+ Nádegas flácidas, Parte interna da coxa). Botão "Próximo passo".
9. **Zonas alvo** — Lista com miniaturas (Barriga, Bunda, Pernas, Peito, Braços, Costas).
10. **Final / Promessa** — Imagem mulher OK, título "Apenas 7 minutos por dia — transformarão seu corpo e destravarão o seu metabolismo…" + parágrafo descritivo + CTA.

## Design System
- Cor primária: rosa/magenta `#E63B7A` (logo + CTAs + acentos).
- Texto principal: cinza-escuro quase preto.
- Fundo: branco / off-white `#F7F7F8` no corpo do quiz.
- Cards de opção: branco com sombra leve, borda arredondada (rounded-2xl), hover com leve elevação.
- Tipografia: sans-serif bold pesada para títulos (estilo "Calistenia" logo = condensed bold itálico-ish), Inter/sans para corpo.
- Header fixo: logo "CALISTENIA" rosa + badge cinza "by Atlas", botão voltar `<` à esquerda, barra de progresso fina rosa abaixo.
- Botão CTA: rosa pill grande full-width, branco quando desabilitado fica rosa-claro.

## Arquitetura técnica
- Rota única `/` (ou `/quiz`) com componente controlador de step (state local, sem backend).
- Cada step é um componente em `src/components/quiz/steps/`.
- `QuizLayout` reutilizável com header + progress bar + slot.
- State: `useState` com array de respostas; navegação `next()` / `back()`.
- Tokens de cor em `src/styles.css` (--primary rosa, etc.).
- Imagens geradas via `imagegen` e salvas em `src/assets/`:
  - Mulher asiática pose 1 (hero idade) — fundo transparente
  - Mulher asiática pose 2 (perna levantada, experiência) — transparente
  - Mulher asiática sentada no sofá (diferencial)
  - Grupo de 5 mulheres fitness (social proof)
  - Mulher OK gesture (final)
  - Miniaturas das zonas: queixo, braço, seios, barriga, joelhos, traseiro, nádegas, coxa interna, bunda, pernas, peito, costas (12 thumbs)
- Ícones (objetivo/expectativas): lucide-react (Scale, Dumbbell, UserCheck, Zap, Battery, Moon, Brain, Move, Sparkles).

## Componentes
- `QuizHeader` (logo + back + progress)
- `OptionCard` (variante "arrow" e "icon" e "thumb")
- `MultiSelectCard` (com radio circular)
- `ToggleRow` (switch "corpo inteiro")
- `PrimaryButton` (rosa, disabled state)
- `TransitionScreen` (imagem + título + texto + botão)

## Fora de escopo
- Backend / persistência de respostas.
- Página de resultado real / venda — pode ser stub na etapa final.
- Animações complexas entre steps (uso transição simples fade).

## Confirmação
Após aprovar o plano, vou:
1. Definir tokens de cor.
2. Gerar as imagens necessárias.
3. Construir layout + 10 steps com navegação funcional.