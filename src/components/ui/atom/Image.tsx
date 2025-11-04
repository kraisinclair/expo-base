import { Image as ExpoImage, type ImageProps as ExpoImageProps } from "expo-image";

import { cssInterop } from "nativewind";

interface ImageProps extends ExpoImageProps {}

cssInterop(ExpoImage, { className: "style" });

const Image = ({ ...props }: ImageProps) => <ExpoImage {...props} />;

export default Image;
