import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "@/locales/i18n";

type LanguageType = "system" | "en" | "fr";

type LanguageContextType = {
  language: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>("system");

  //  Apply language to i18n
  const applyLanguage = (lang: LanguageType) => {
    if (lang === "system") {
      const locales = Localization.getLocales();
      i18n.locale =
        locales.length > 0 && locales[0].languageCode
          ? locales[0].languageCode
          : "en";
    } else {
      i18n.locale = lang;
    }
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
    <LanguageContext.Provider value={{ language, changeLanguage }}>
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
