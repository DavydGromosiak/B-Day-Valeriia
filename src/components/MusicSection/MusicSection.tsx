import { LocalizedString } from "../../data/translations";
import { PlaylistPreview } from "../MusicPlayer/PlaylistPreview";

type Props = { tr: (value: LocalizedString) => string };

const musicLabel: LocalizedString = {
  ru: "Музыка наших воспоминаний",
  en: "Music for our memories",
  de: "Musik für unsere Erinnerungen"
};

export function MusicSection({ tr }: Props) {
  return (
    <section id="music" className="page-section content-section music-section" aria-label={tr(musicLabel)}>
      <PlaylistPreview tr={tr} />
    </section>
  );
}
