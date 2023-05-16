export const COLOR_VAR_KEYS = [
  { key: "--primary-color", label: "Primary" },
  { key: "--secondary-color", label: "Secondary" },
  { key: "--accent-color", label: "Accent" },
  { key: "--bg-color-main", label: "Background primary" },
  { key: "--bg-color-sec", label: "Background secondary" },
  { key: "--bg-color-accent", label: "Background accent" },
  { key: "--hover-color", label: "Hover color" },
  { key: "--title-color", label: "Title" },
  { key: "--text-color", label: "Text" },
  { key: "--phonetic-color", label: "Phonetic" },
];

export const VOICE_KEYS = {
  LS_KEY: 'voice',
};

export const DEFAULTS = {
  VOICE_URI: 'Google US English',
  VOICE_SPEED: 1,
  VOICE_VOLUME: 1,
};

export const THEME_KEYS = {
  PALETTE_KEY: 'palettes',
};

export const ROUTES = {
  HOME: "/home",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  LISTENING_TOPICS: "/listening/topic",
  GRAMMAR_LEVELS: "/grammar/level",
  WORD_TOPIC: "/word",
  IPA_LIST: "/ipa",
  TEST: "/test",
  GAMES_HOME: "/games",
};

export const UX = {
  DELAY_TIME: 1500,
  DELAY_ANSWER: 3000,
};
