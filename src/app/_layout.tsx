import { useEffect, useState } from "react";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { useLocale } from "@/lib/hooks";
import activateLanguage from "@/lib/translations";

import "../../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { locale } = useLocale();

  const [loadedLocale, setLoadedLocale] = useState(false);

  useEffect(() => {
    const initializeLocale = async () => {
      await activateLanguage(locale);
      setLoadedLocale(true);
    };

    initializeLocale();
  }, [locale]);

  useEffect(() => {
    if (loadedLocale) {
      SplashScreen.hideAsync();
    }
  }, [loadedLocale]);

  if (!loadedLocale) {
    return null;
  }

  return (
    <I18nProvider i18n={i18n}>
      <Stack />
    </I18nProvider>
  );
}
