import { Button, Text, View } from "react-native";

import { useLingui } from "@lingui/react/macro";

import { ImageScale } from "@/components/ui";
import { useLocale } from "@/lib/hooks";

export default function Index() {
  const { t } = useLingui();
  const { locale, setLocale } = useLocale();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Change Locale" onPress={() => setLocale(locale === "en" ? "es" : "en")} />
      <Text className="text-red-600">{t`Hello, world!`}</Text>
      <ImageScale
        uri="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Epic_Systems.svg/250px-Epic_Systems.svg.png"
        width={100}
      />
    </View>
  );
}
