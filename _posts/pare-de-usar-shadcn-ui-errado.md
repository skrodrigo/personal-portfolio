---
title: "Você Usa shadcn/ui do Jeito Errado."
date: "2025-05-29"
author: "Rodrigo Carvalho"
summary: "Aprenda a personalizar corretamente e criar interfaces únicas e memoráveis."
---

Sites modernos são bonitos, limpos e acessíveis, mas muitos parecem... iguais. O motivo? O uso padrão do *shadcn/ui*. Assim como o Bootstrap no passado, o *shadcn/ui* está criando interfaces genéricas. Mas ele não é o problema — o problema é como ele é usado.

Aqui, vou te mostrar por que isso acontece e como usar o *shadcn/ui* corretamente para criar interfaces únicas.

## Por Que Tudo Parece Igual?

Sites feitos com *shadcn/ui* muitas vezes seguem o mesmo molde: botões, cards e formulários padronizados. Isso lembra a era do Bootstrap, quando todos os sites pareciam cópias. O erro? As pessoas usam o *shadcn/ui* sem personalizar ou personalizam de forma errada, mantendo os estilos padrão.

## O Que é o Shadcn/UI?

Diferente do Bootstrap ou MUI, o *shadcn/ui* **não é uma biblioteca**. Ele é uma ferramenta para você construir **sua própria biblioteca de componentes**. Baseado em **Radix UI** (primitivas acessíveis, sem estilo) e estilizado com **Tailwind CSS**, ele entrega o código-fonte completo dos componentes. Você pode editá-los e moldá-los como quiser.

### Comparação com Bootstrap e MUI

- **Bootstrap**: Interfaces genéricas, difíceis de personalizar sem CSS extra.
- **MUI**: Código abstraído nos `node_modules`. Personalização via `sx` ou `disablePortal`, mas sem controle total.
- **Shadcn/UI**: Código aberto, editável e seu. Um botão é apenas uma função com Radix UI e Tailwind, pronta para ajustes.

## Por Que os Sites Ficam Iguais?

Falta de personalização. Muitos desenvolvedores:
- Usam componentes padrão sem alterações.
- Mudam apenas cores no tema do *shadcn/ui*.
- Ignoram o potencial de customização profunda.

Mudar cores não é suficiente. Largura, altura, fontes e animações precisam ser ajustados para criar uma identidade única.

## Como Fazer Certo

### 1. Comece pelo `globals.css`
Defina estilos globais no `globals.css`. Por exemplo, ajuste o `border-radius` de todos os componentes com uma linha:

```css
:root {
  --radius: 0.75rem;
}
```

Essa mudança simples já transforma a aparência geral.

### 2. Personalize Além das Cores
O tema do *shadcn/ui* muda cores, mas não tamanhos, fontes ou animações. Para algo único, ajuste:
- **Tamanhos**: Largura, altura, padding.
- **Fontes**: Escolha uma tipografia que represente sua marca.
- **Estilos**: Adicione sombras, gradientes ou transições.

### 3. Entenda o Radix UI
O *shadcn/ui* usa **Radix UI**, que oferece primitivas acessíveis. Estude-as para personalizar comportamento e aparência com precisão.

### 4. Crie Sua Biblioteca
Copie os componentes do *shadcn/ui* para seu projeto e edite-os. Quer um botão com animação única? Modifique o código. Quer um card diferente? Ajuste as classes Tailwind.

## Dicas Extras

- **Tweak CN**: Facilita customizações avançadas.
- **Outras bibliotecas**: Explore `21est`, `magicui` e `accertinity` para inspiração.
- **Tailwind CSS**: Domine suas classes para ajustes rápidos.

## Finalizando

O *shadcn/ui* é incrível, mas só se você usá-lo direito. Ele oferece uma base sólida — cabe a você torná-la única. Não use como uma biblioteca pronta. Edite componentes, ajuste o `globals.css` e explore o Radix UI.
