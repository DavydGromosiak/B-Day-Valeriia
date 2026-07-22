import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export function SmartImage({ src, alt, objectPosition = "center" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="photo-placeholder" role="img" aria-label={alt}><span>Добавь фотографию сюда</span></div>;
  }
  return <img src={src} alt={alt} loading="lazy" style={{ objectPosition }} onError={() => setFailed(true)} />;
}
