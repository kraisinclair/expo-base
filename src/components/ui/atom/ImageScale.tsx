import { useWindowDimensions } from "react-native";

import { Image as ExpoImage, type ImageProps as ExpoImageProps, useImage } from "expo-image";

import { cssInterop } from "nativewind";

interface ImageScaleProps extends Omit<ExpoImageProps, "source"> {
  uri: string;
  width?: number;
}

cssInterop(ExpoImage, { className: "style" });

const ImageScale = ({ ...props }: ImageScaleProps) => {
  const { uri, width, ...restProps } = props;

  const { width: deviceWidth } = useWindowDimensions();
  const image = useImage(uri, { maxWidth: deviceWidth });

  const ratio = image?.width ? image.width / image.height : 1;
  const imageWidth = width ?? image?.width ?? 0;
  const imageHeight = imageWidth / ratio;

  return <ExpoImage {...restProps} source={{ uri }} style={{ width: imageWidth, height: imageHeight }} />;
};

export default ImageScale;
