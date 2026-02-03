import { I18n } from "i18n-js";
import * as Localization from "expo-localization";
import en from "./en";
import fr from "./fr";

const i18n = new I18n({
  en,
  fr,
});

const locales = Localization.getLocales();

i18n.locale =
  locales.length > 0 && locales[0].languageCode
    ? locales[0].languageCode
    : "en";

i18n.enableFallback = true;

export default i18n;
