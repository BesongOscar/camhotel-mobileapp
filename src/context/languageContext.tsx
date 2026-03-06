import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "@/locales/i18n";

type LanguageType = "system" | "en" | "fr";

type LanguageContextType = {
  language: LanguageType;
  locale: string;
  changeLanguage: (lang: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Resolves a LanguageType to a concrete BCP-47 locale string /
const resolveLocale = (lang: LanguageType): string => {
  if (lang !== "system") return lang;
  const locales = Localization.getLocales();
  return locales.length > 0 && locales[0].languageCode
    ? locales[0].languageCode
    : "en";
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>("system");
  const [locale, setLocale] = useState<string>(() => resolveLocale("system"));


  //  Apply language to i18n
  const applyLanguage = (lang: LanguageType) => {
    const resolved = resolveLocale(lang);
    i18n.locale = resolved;
    setLocale(resolved); // triggers re-render in all useLanguage() consumers
  };

  //  Change language (UI → Context)
  const changeLanguage = async (lang: LanguageType) => {
    setLanguage(lang);
    applyLanguage(lang);
    await AsyncStorage.setItem("APP_LANGUAGE", lang);
  };

  //  Load language on app start
  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = (await AsyncStorage.getItem(
        "APP_LANGUAGE"
      )) as LanguageType | null;

      const langToUse = storedLang ?? "system";
      setLanguage(langToUse);
      applyLanguage(langToUse);
    };

    loadLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

//  Custom hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}