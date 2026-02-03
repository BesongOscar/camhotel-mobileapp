import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

type Props = {
  imgSource: any;
  selectedImage?: string;
  width: number;
  height: number;
};

export default function ImageViewer({
  imgSource,
  selectedImage,
  width,
  height,
}: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return (
    <View style={styles.imageContainer}>
      <Image
        source={imageSource}
        style={[styles.image, { width }, { height }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
});
