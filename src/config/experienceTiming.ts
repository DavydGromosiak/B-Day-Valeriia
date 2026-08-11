/**
 * The first chorus of "golden hour (Ruel Remix)" starts with "Shine".
 * The loader and the first heart reveal share this cue so they cannot drift.
 */
export const HEART_REVEAL_CUE_SECONDS = 45.97;

export const LOADER_FINAL_SEQUENCE_MS = 9100;
export const LOADER_PROGRESS_INTERVAL_MS = Math.round(
  (HEART_REVEAL_CUE_SECONDS * 1000 - LOADER_FINAL_SEQUENCE_MS) / 100
);

export const HEART_REVEAL_EVENT = "birthday-heart-reveal";
export const SYNC_MUSIC_TO_HEART_EVENT = "birthday-sync-music-to-heart";

