/**
 * Paleta visual do template.
 *
 * Personalize as cores apenas neste objeto. O layout expõe-as como variáveis CSS,
 * o Tailwind consome essas variáveis e os templates de email podem reutilizar os
 * valores hexadecimais diretamente.
 */
export const siteTheme = {
  colors: {
    /** Cor principal para texto, botões e elementos estruturais. */
    primary: "#1b343d",
    /** Cor escura para superfícies de alto contraste. */
    secondary: "#002030",
    /** Cor de destaque sobre superfícies claras. */
    accent: "#a9522c",
    /** Cor de destaque com contraste AA sobre `secondary`. */
    accentOnDark: "#d88760",
    /** Texto secundário sólido com contraste AA sobre fundos claros. */
    mutedText: "#617277",
    /** Fundo principal da página. */
    canvas: "#fcfcf6",
    /** Fundo alternativo de secções. */
    surface: "#ecf4ee",
    /** Fundo subtil de cartões e elementos de apoio. */
    surfaceSoft: "#f7faf4",
    /** Cor do atalho de WhatsApp e estados de sucesso. */
    success: "#127946",
    /** Estado hover da cor de sucesso. */
    successHover: "#036035",
    /** Branco da marca, usado também em transparências. */
    white: "#ffffff",
  },
} as const;

/** Variáveis injetadas no elemento `<html>` pelo layout raiz. */
export const siteThemeCssVariables = {
  "--site-color-primary": siteTheme.colors.primary,
  "--site-color-secondary": siteTheme.colors.secondary,
  "--site-color-accent": siteTheme.colors.accent,
  "--site-color-accent-on-dark": siteTheme.colors.accentOnDark,
  "--site-color-muted-text": siteTheme.colors.mutedText,
  "--site-color-canvas": siteTheme.colors.canvas,
  "--site-color-surface": siteTheme.colors.surface,
  "--site-color-surface-soft": siteTheme.colors.surfaceSoft,
  "--site-color-success": siteTheme.colors.success,
  "--site-color-success-hover": siteTheme.colors.successHover,
  "--site-color-white": siteTheme.colors.white,
} as const;
