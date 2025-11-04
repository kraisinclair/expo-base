import { i18n } from "@lingui/core";

import { type Locale } from "@/types";

const activateLanguage = async (locale: Locale) => {
  const { messages: en } = await import("./en.po" as string);
  const { messages: es } = await import("./es.po" as string);

  switch (locale) {
    case "en":
      i18n.load(locale, en);
      break;
    case "es":
      i18n.load(locale, es);
      break;
    default:
      i18n.load(locale, en);
      break;
  }

  i18n.activate(locale);
};

export default activateLanguage;
