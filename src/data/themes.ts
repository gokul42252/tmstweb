export interface ThemeColorPalette {
  id: string;
  paletteNumber: number;
  name: string;
  malayalamName: string;
  tagline: string;
  description: string;
  swatches: [string, string, string, string, string]; // Exact 5 hex colors from Dopely
  gradientCircles: [string, string, string, string, string]; // CSS linear gradients
  cssVariables: {
    primary: string;
    primaryDark: string;
    primaryHover: string;
    primaryLight: string;
    accent: string;
    accentGlow: string;
    secondary: string;
    surface: string;
    surfaceAlt: string;
    cardBorder: string;
    gradientStart: string;
    gradientMid: string;
    gradientEnd: string;
    bannerStart: string;
    bannerEnd: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    btnText: string;
    ringColor: string;
  };
}

export const TEMPLE_THEMES: ThemeColorPalette[] = [
  {
    id: "neelakantha",
    paletteNumber: 16,
    name: "Neelakantha Teal & Iris",
    malayalamName: "നീലകണ്ഠൻ",
    tagline: "Divine Peacock Teal, Amethyst Iris & Celestial Cyan",
    description: "Inspired by the celestial throat of Lord Shiva (Neelakantha) holding Kalakuta poison to protect the universe. Deep teal, slate iris, and ethereal turquoise.",
    swatches: [
      "#CCA8DB", // Soft Lilac / Wisteria
      "#8475A1", // Slate Iris / Amethyst
      "#46C6CA", // Ethereal Cyan
      "#09979D", // Deep Peacock Teal
      "#055B5C", // Deep Spruce Pine
    ],
    gradientCircles: [
      "linear-gradient(135deg, #CCA8DB 0%, #8475A1 100%)",
      "linear-gradient(135deg, #8475A1 0%, #46C6CA 100%)",
      "linear-gradient(135deg, #46C6CA 0%, #09979D 100%)",
      "linear-gradient(135deg, #09979D 0%, #055B5C 100%)",
      "linear-gradient(135deg, #055B5C 0%, #46C6CA 100%)",
    ],
    cssVariables: {
      primary: "#09979D",
      primaryDark: "#055B5C",
      primaryHover: "#077C81",
      primaryLight: "#46C6CA",
      accent: "#46C6CA",
      accentGlow: "rgba(70, 198, 202, 0.35)",
      secondary: "#8475A1",
      surface: "#F4FAFA",
      surfaceAlt: "#E6F3F4",
      cardBorder: "rgba(9, 151, 157, 0.22)",
      gradientStart: "#055B5C",
      gradientMid: "#09979D",
      gradientEnd: "#46C6CA",
      bannerStart: "#054D4E",
      bannerEnd: "#097E83",
      badgeBg: "rgba(9, 151, 157, 0.12)",
      badgeText: "#055B5C",
      badgeBorder: "rgba(9, 151, 157, 0.3)",
      btnText: "#FFFFFF",
      ringColor: "#09979D",
    },
  },
  {
    id: "sacred-vilvam",
    paletteNumber: 19,
    name: "Sacred Vilvam & Forest",
    malayalamName: "കൂവളവും വനവും",
    tagline: "Holy Vilva Patram, Ganga Cyan & Ancient Grove Moss",
    description: "Reflecting the sacred Bel leaf offerings (കൂവളമാല) cherished by Lord Shiva, paired with sacred grove greenery and pristine holy temple waters.",
    swatches: [
      "#31C3CC", // Bright Turquoise Ganga
      "#1E4755", // Deep Petrol Blue
      "#7EA205", // Sacred Vilva Leaf Green
      "#D1CD44", // Chartreuse Golden Lime
      "#273B02", // Deep Sacred Grove Moss
    ],
    gradientCircles: [
      "linear-gradient(135deg, #31C3CC 0%, #7EA205 100%)",
      "linear-gradient(135deg, #1E4755 0%, #D1CD44 100%)",
      "linear-gradient(135deg, #7EA205 0%, #D1CD44 100%)",
      "linear-gradient(135deg, #D1CD44 0%, #31C3CC 100%)",
      "linear-gradient(135deg, #273B02 0%, #31C3CC 100%)",
    ],
    cssVariables: {
      primary: "#1E4755",
      primaryDark: "#273B02",
      primaryHover: "#153540",
      primaryLight: "#31C3CC",
      accent: "#7EA205",
      accentGlow: "rgba(126, 162, 5, 0.35)",
      secondary: "#31C3CC",
      surface: "#F5F8F6",
      surfaceAlt: "#E8F0EA",
      cardBorder: "rgba(30, 71, 85, 0.22)",
      gradientStart: "#1E4755",
      gradientMid: "#2C6377",
      gradientEnd: "#31C3CC",
      bannerStart: "#163844",
      bannerEnd: "#235566",
      badgeBg: "rgba(126, 162, 5, 0.12)",
      badgeText: "#273B02",
      badgeBorder: "rgba(126, 162, 5, 0.35)",
      btnText: "#FFFFFF",
      ringColor: "#31C3CC",
    },
  },
  {
    id: "usha-dawn",
    paletteNumber: 17,
    name: "Usha Pooja Dawn",
    malayalamName: "ഉഷഃപൂജ പ്രഭാതം",
    tagline: "Morning Seafoam, Celadon Dew, Buttercream & Coral Blossom",
    description: "The serene serenity of dawn at Thirumarady temple, as the sanctum doors open for early morning Nirmalyam darshan amidst sandalwood mist and morning light.",
    swatches: [
      "#90E3CE", // Mint Seafoam Dew
      "#D5EAA5", // Celadon Pistachio
      "#FFEDB4", // Warm Buttercream
      "#F4957B", // Coral Blossom / Peach
      "#CCA8DB", // Wisteria Lilac
    ],
    gradientCircles: [
      "linear-gradient(135deg, #90E3CE 0%, #D5EAA5 100%)",
      "linear-gradient(135deg, #D5EAA5 0%, #FFEDB4 100%)",
      "linear-gradient(135deg, #FFEDB4 0%, #F4957B 100%)",
      "linear-gradient(135deg, #F4957B 0%, #CCA8DB 100%)",
      "linear-gradient(135deg, #CCA8DB 0%, #90E3CE 100%)",
    ],
    cssVariables: {
      primary: "#D4674B",
      primaryDark: "#9E3C24",
      primaryHover: "#BF553B",
      primaryLight: "#F4957B",
      accent: "#68C4AE",
      accentGlow: "rgba(244, 149, 123, 0.35)",
      secondary: "#A686BC",
      surface: "#FBF9F5",
      surfaceAlt: "#F4EFE6",
      cardBorder: "rgba(212, 103, 75, 0.2)",
      gradientStart: "#B24C33",
      gradientMid: "#D4674B",
      gradientEnd: "#F4957B",
      bannerStart: "#8C341F",
      bannerEnd: "#B24C33",
      badgeBg: "rgba(212, 103, 75, 0.12)",
      badgeText: "#9E3C24",
      badgeBorder: "rgba(212, 103, 75, 0.3)",
      btnText: "#FFFFFF",
      ringColor: "#D4674B",
    },
  },
  {
    id: "ananda-thandavam",
    paletteNumber: 15,
    name: "Ananda Thandavam (Midnight Sapphire)",
    malayalamName: "ആനന്ദ താണ്ഡവം",
    tagline: "Midnight Royal Blue, Deep Sapphire & Frosted Ice Cyan",
    description: "The cosmic dance of Shiva (Nataraja) beneath the starlit sky of Maha Shivaratri. Deep midnight ocean navy, sapphire radiance, and shimmering celestial frost.",
    swatches: [
      "#0A1B46", // Midnight Royal Navy
      "#0A487A", // Prussian Sapphire
      "#018ABE", // Cerulean Ocean
      "#97CADB", // Ice Mist Blue
      "#D6EEF8", // Frosted Crystal
    ],
    gradientCircles: [
      "linear-gradient(135deg, #0A1B46 0%, #0A487A 100%)",
      "linear-gradient(135deg, #0A487A 0%, #018ABE 100%)",
      "linear-gradient(135deg, #018ABE 0%, #97CADB 100%)",
      "linear-gradient(135deg, #97CADB 0%, #D6EEF8 100%)",
      "linear-gradient(135deg, #018ABE 0%, #0A1B46 100%)",
    ],
    cssVariables: {
      primary: "#018ABE",
      primaryDark: "#0A1B46",
      primaryHover: "#01709C",
      primaryLight: "#97CADB",
      accent: "#018ABE",
      accentGlow: "rgba(1, 138, 190, 0.35)",
      secondary: "#0A487A",
      surface: "#F2F7FA",
      surfaceAlt: "#E3EFF6",
      cardBorder: "rgba(1, 138, 190, 0.22)",
      gradientStart: "#0A1B46",
      gradientMid: "#0A487A",
      gradientEnd: "#018ABE",
      bannerStart: "#081538",
      bannerEnd: "#083B64",
      badgeBg: "rgba(1, 138, 190, 0.12)",
      badgeText: "#0A487A",
      badgeBorder: "rgba(1, 138, 190, 0.3)",
      btnText: "#FFFFFF",
      ringColor: "#018ABE",
    },
  },
  {
    id: "dhanu-utsavam",
    paletteNumber: 18,
    name: "Dhanu Utsavam (Saffron Terracotta)",
    malayalamName: "ധനു ഉത്സവം",
    tagline: "Festival Terracotta, Coral Flame, Saffron Sun & Jade Seafoam",
    description: "The divine warmth of Kerala temple festivals (ഉത്സവം) — Chenda melam, temple torches (தீவட்டி), saffron flags, and sacred marigold garlands.",
    swatches: [
      "#F25D49", // Crimson Terracotta
      "#F98557", // Tangerine Flame
      "#FAC352", // Saffron Gold Sun
      "#88D1C9", // Seafoam Jade
      "#A3C365", // Spring Laurel
    ],
    gradientCircles: [
      "linear-gradient(135deg, #F25D49 0%, #FAC352 100%)",
      "linear-gradient(135deg, #F98557 0%, #F25D49 100%)",
      "linear-gradient(135deg, #FAC352 0%, #88D1C9 100%)",
      "linear-gradient(135deg, #88D1C9 0%, #A3C365 100%)",
      "linear-gradient(135deg, #A3C365 0%, #F98557 100%)",
    ],
    cssVariables: {
      primary: "#DE432E",
      primaryDark: "#A62716",
      primaryHover: "#C43623",
      primaryLight: "#F98557",
      accent: "#FAC352",
      accentGlow: "rgba(222, 67, 46, 0.35)",
      secondary: "#F98557",
      surface: "#FDF8F5",
      surfaceAlt: "#FAEEE8",
      cardBorder: "rgba(222, 67, 46, 0.22)",
      gradientStart: "#B32B1A",
      gradientMid: "#DE432E",
      gradientEnd: "#F98557",
      bannerStart: "#8A1E11",
      bannerEnd: "#B32B1A",
      badgeBg: "rgba(222, 67, 46, 0.12)",
      badgeText: "#A62716",
      badgeBorder: "rgba(222, 67, 46, 0.3)",
      btnText: "#FFFFFF",
      ringColor: "#DE432E",
    },
  },
  {
    id: "nirmalyam-sandal",
    paletteNumber: 20,
    name: "Nirmalyam Sandalwood (Rose & Sandal)",
    malayalamName: "നിർമ്മാല്യം ചന്ദനം",
    tagline: "Chandanam Cream, Dusty Rose Silk, Sandal Gold & Kasavu Sage",
    description: "The subtle royal elegance of pure Malayali temple traditions — freshly ground sandalwood paste (കളഭം), auspicious kasavu silks, and soft morning rosewater.",
    swatches: [
      "#FCE3C7", // Chandanam Cream
      "#E79796", // Dusty Rose Silk
      "#FFC88B", // Warm Sandalwood Ochre
      "#FFB084", // Sunset Apricot
      "#C6C09C", // Kasavu Sage Sand
    ],
    gradientCircles: [
      "linear-gradient(135deg, #FCE3C7 0%, #FFB084 100%)",
      "linear-gradient(135deg, #E79796 0%, #C6C09C 100%)",
      "linear-gradient(135deg, #FFC88B 0%, #E79796 100%)",
      "linear-gradient(135deg, #FFB084 0%, #E79796 100%)",
      "linear-gradient(135deg, #C6C09C 0%, #FCE3C7 100%)",
    ],
    cssVariables: {
      primary: "#C86F6E",
      primaryDark: "#8E3D3C",
      primaryHover: "#B05A59",
      primaryLight: "#FFB084",
      accent: "#FFB084",
      accentGlow: "rgba(200, 111, 110, 0.35)",
      secondary: "#FFC88B",
      surface: "#FCFAF6",
      surfaceAlt: "#F7F2EB",
      cardBorder: "rgba(200, 111, 110, 0.22)",
      gradientStart: "#8E3D3C",
      gradientMid: "#C86F6E",
      gradientEnd: "#E79796",
      bannerStart: "#6F2A29",
      bannerEnd: "#8E3D3C",
      badgeBg: "rgba(200, 111, 110, 0.12)",
      badgeText: "#8E3D3C",
      badgeBorder: "rgba(200, 111, 110, 0.3)",
      btnText: "#FFFFFF",
      ringColor: "#C86F6E",
    },
  },
];

export function getDefaultTheme(): ThemeColorPalette {
  return TEMPLE_THEMES[0]; // Neelakantha Teal & Iris
}

export function getThemeById(id: string): ThemeColorPalette | undefined {
  return TEMPLE_THEMES.find((theme) => theme.id === id);
}
