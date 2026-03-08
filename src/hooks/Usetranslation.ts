import i18n from "@/locales/i18n";
import { useLanguage } from "@/src/context/languageContext";

/**
 * Drop-in replacement for calling i18n.t() directly.
 *
 * Because `locale` comes from LanguageContext state, any component that
 * calls useTranslation() will automatically re-render when the language
 * changes — so translated strings update instantly without a reload.
 *
 * Usage:
 *   const { t } = useTranslation();
 *   <Text>{t("someScreen.title")}</Text>
 */
export function useTranslation() {
  const { locale } = useLanguage();
  const t = (key: string, options?: Record<string, unknown>) =>
    i18n.t(key, { locale, ...options });
  return { t, locale };
}