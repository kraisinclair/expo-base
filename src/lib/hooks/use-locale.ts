import { getLocales } from "expo-localization";

import { includes } from "es-toolkit/compat";
import { useAtom } from "jotai/react";

import { type Locale } from "@/types";

import { DEFAULT_LOCALE, STORAGE_KEYS, SUPPORTED_LOCALES } from "../constants";
import { atomWithMMKV } from "../utils/storage";

const isSupportedLocale = (code: string | null): code is Locale => includes(SUPPORTED_LOCALES, code);
const deviceLocale = getLocales()[0]?.languageCode ?? null;
const localeAtom = atomWithMMKV<Locale>(
  STORAGE_KEYS.locale,
  isSupportedLocale(deviceLocale) ? deviceLocale : DEFAULT_LOCALE,
);

export const useLocale = () => {
  const [locale, setLocale] = useAtom(localeAtom);

  return { locale, setLocale };
};
