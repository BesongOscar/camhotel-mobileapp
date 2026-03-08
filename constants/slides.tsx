import { Image } from "expo-image";

const placeholder = undefined;

export const getSlides = (t: any) => [
 
  {
    id: "1",
    title: t("onBoardingSlide1.title"),
    description: t("onBoardingSlide1.description"),
    image: (
      <Image
        source={placeholder}
        style={{ height: 100, width: 100, backgroundColor: "Grey" }}
      />
    ),
  },
  {
    id: "2",
    title: t("onBoardingSlide2.title"),
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
    title: t("onBoardingSlide3.title"),
    description: "",
    image: <Image source={placeholder} />,
  },
  {
    id: "4",
    title: t("onBoardingSlide4.title"),
    description: "",
    image: (
      <Image
        source={placeholder}
        style={{ height: 100, width: 100, backgroundColor: "Grey" }}
      />
    ),
  },
];
