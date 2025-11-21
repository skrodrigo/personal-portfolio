---
title: "You're Using shadcn/ui the Wrong Way."
date: "2025-05-29"
author: "Rodrigo Carvalho"
summary: "Learn how to properly customize and create unique and memorable interfaces."
---

Modern websites are beautiful, clean, and accessible, but many look... the same. The reason? Default use of *shadcn/ui*. Just like Bootstrap in the past, *shadcn/ui* is creating generic interfaces. But it's not the problem — the problem is how it's being used.

Here, I'll show you why this happens and how to use *shadcn/ui* correctly to create unique interfaces.

## Why Does Everything Look the Same?

Websites built with *shadcn/ui* often follow the same template: standardized buttons, cards, and forms. This reminds us of the Bootstrap era, when all websites looked like copies. The mistake? People use *shadcn/ui* without customizing or customize it incorrectly, keeping the default styles.

## What is Shadcn/UI?

Unlike Bootstrap or MUI, *shadcn/ui* **is not a library**. It's a tool for you to build **your own component library**. Based on **Radix UI** (accessible primitives, without styling) and styled with **Tailwind CSS**, it delivers the complete source code of components. You can edit and shape them however you want.

### Comparison with Bootstrap and MUI

- **Bootstrap**: Generic interfaces, difficult to customize without extra CSS.
- **MUI**: Code abstracted in `node_modules`. Customization via `sx` or `disablePortal`, but without full control.
- **Shadcn/UI**: Open source, editable, and yours. A button is just a function with Radix UI and Tailwind, ready for adjustments.

## Why Do Websites Look the Same?

Lack of customization. Many developers:
- Use default components without changes.
- Only change colors in the *shadcn/ui* theme.
- Ignore the potential for deep customization.

Changing colors isn't enough. Width, height, fonts, and animations need to be adjusted to create a unique identity.

## How to Do It Right

### 1. Start with `globals.css`
Define global styles in `globals.css`. For example, adjust the `border-radius` of all components with one line:

```css
:root {
  --radius: 0.75rem;
}
```

This simple change already transforms the overall appearance.

### 2. Customize Beyond Colors
The *shadcn/ui* theme changes colors, but not sizes, fonts, or animations. For something unique, adjust:
- **Sizes**: Width, height, padding.
- **Fonts**: Choose typography that represents your brand.
- **Styles**: Add shadows, gradients, or transitions.

### 3. Understand Radix UI
*shadcn/ui* uses **Radix UI**, which offers accessible primitives. Study them to customize behavior and appearance with precision.

### 4. Create Your Own Library
Copy the *shadcn/ui* components to your project and edit them. Want a button with a unique animation? Modify the code. Want a different card? Adjust the Tailwind classes.

## Extra Tips

- **Tweak CN**: Facilitates advanced customizations.
- **Other libraries**: Explore `21est`, `magicui`, and `accertinity` for inspiration.
- **Tailwind CSS**: Master its classes for quick adjustments.

## Wrapping Up

*shadcn/ui* is amazing, but only if you use it right. It offers a solid foundation — it's up to you to make it unique. Don't use it as a ready-made library. Edit components, adjust `globals.css`, and explore Radix UI.
