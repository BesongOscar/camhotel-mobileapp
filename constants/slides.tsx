import { Image } from "expo-image";
import i18n from "@/locales/i18n";
const placeholder = undefined;

export const slides = [
  {
    id: "1",
    title: i18n.t("onBoardingSlide1.title"),
    description: i18n.t("onBoardingSlide1.description"),
    image: (
      <Image
        source={placeholder}
        style={{ height: 100, width: 100, backgroundColor: "Grey" }}
      />
    ),
  },
  {
    id: "2",
    title: i18n.t("onBoardingSlide2.title"),
    description: "",
    image: (
      <Image
        source={placeholder}
        style={{ height: 100, width: 100, backgroundColor: "Grey" }}
      />
    ),
  },
  {
    id: "3",
    title: i18n.t("onBoardingSlide3.title"),
    description: "",
    image: <Image source={placeholder} />,
  },
  {
    id: "4",
    title: i18n.t("onBoardingSlide4.title"),
    description: "",
    image: (
      <Image
        source={placeholder}
        style={{ height: 100, width: 100, backgroundColor: "Grey" }}
      />
    ),
  },
];
