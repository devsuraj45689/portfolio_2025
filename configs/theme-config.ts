export const theme = {
  colors: {
    primary: "#C6A667",
    primaryLight: "#E3D6B1",
    primaryDark: "#9A8450",

    text: {
      heading: "#1B1B1C",
      body: "#666666",
      inverse: "#FFFFFF",
    },

    background: {
      base: "#FCFCFC",
      surface: "#FFFFFF",
      muted: "#EDEDED",
    },

    border: {
      default: "#E5E5E5",
    },

    overlay: {
      soft: "rgba(198, 166, 103, 0.1)",
    }
  },

  typography: {
    fontFamily: `Inter, sans-serif`,
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
  },

  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },

  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    full: "9999px",
  },

  shadows: {
    soft: "0 4px 10px rgba(0,0,0,0.06)",
    medium: "0 8px 20px rgba(0,0,0,0.08)",
    strong: "0 10px 30px rgba(0,0,0,0.12)",
  },

  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.15s ease",
  },

  layout: {
    container: "max-width: 1280px; margin: 0 auto; padding: 0 24px;",
    sectionPadding: "80px 0",
  },

  components: {
    button: {
      primary: {
        bg: "#C6A667",
        color: "#FFFFFF",
        hoverShadow: "0 8px 20px rgba(198,166,103,0.35)",
      },
      outline: {
        border: "2px solid #EDEDED",
        color: "#1B1B1C",
      },
    },

    badge: {
      base: {
        bg: "#EDEDED",
        color: "#C6A667",
      }
    },

    card: {
      surface: "#FFFFFF",
      shadow: "0 8px 16px rgba(0,0,0,0.06)",
      radius: "16px",
    },

    navbar: {
      bgScrolled: "rgba(255,255,255,0.95)",
      blur: "backdrop-blur-lg",
      shadow: "0 2px 10px rgba(0,0,0,0.06)",
    },
  },
};
