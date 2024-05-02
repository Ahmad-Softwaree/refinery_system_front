/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.50rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.50rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.50rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.50rem",
        27: "6.75rem",
        28: "7rem",
        29: "7.25rem",
        30: "7.50rem",
        31: "7.75rem",
        32: "8rem",
        33: "8.25rem",
        34: "8.50rem",
        35: "8.75rem",
        36: "9rem",
        37: "9.25rem",
        38: "9.50rem",
        39: "9.75rem",
        40: "10rem",
        41: "10.25rem",
        42: "10.50rem",
        43: "10.75rem",
        44: "119.2px",
        45: "11.25rem",
        46: "11.50rem",
        47: "11.75rem",
        48: "12rem",
        49: "12.25rem",
        50: "12.50rem",
        51: "12.75rem",
        52: "13rem",
        53: "13.25rem",
        54: "13.50rem",
        55: "13.75rem",
        56: "14rem",
        57: "14.25rem",
        58: "14.50rem",
        59: "14.75rem",
        60: "15rem",
      },
      fontSize: {
        "heading-bold": [
          "83px",
          {
            lineHeight: "99.6px",
            fontWeight: "600",
          },
        ],
        "heading-semibold": [
          "83px",
          {
            lineHeight: "99.6px",
            fontWeight: "500",
          },
        ],
        "heading-light": [
          "83px",
          {
            lineHeight: "99.6px",
            fontWeight: "400",
          },
        ],
        "heading1-bold": [
          "67px",
          {
            lineHeight: "80.4px",
            fontWeight: "600",
          },
        ],
        "heading1-semibold": [
          "67px",
          {
            lineHeight: "80.4px",
            fontWeight: "500",
          },
        ],
        "heading1-light": [
          "67px",
          {
            lineHeight: "80.4px",
            fontWeight: "400",
          },
        ],

        "heading2-bold": [
          "53px",
          {
            lineHeight: "63.6px",
            fontWeight: "600",
          },
        ],
        "heading2-semibold": [
          "53px",
          {
            lineHeight: "63.6px",
            fontWeight: "500",
          },
        ],
        "heading2-light": [
          "53px",
          {
            lineHeight: "63.6px",
            fontWeight: "400",
          },
        ],

        "heading3-bold": [
          "43px",
          {
            lineHeight: "51.6px",
            fontWeight: "600",
          },
        ],
        "heading3-semibold": [
          "43px",
          {
            lineHeight: "51.6px",
            fontWeight: "500",
          },
        ],
        "heading3-light": [
          "43px",
          {
            lineHeight: "51.6px",
            fontWeight: "400",
          },
        ],

        "sub-heading1-bold": [
          "34px",
          {
            lineHeight: "40.8px",
            fontWeight: "600",
          },
        ],
        "sub-heading1-semibold": [
          "34px",
          {
            lineHeight: "40.8px",
            fontWeight: "500",
          },
        ],
        "sub-heading1-light": [
          "34px",
          {
            lineHeight: "40.8px",
            fontWeight: "400",
          },
        ],

        "sub-heading2-bold": [
          "27px",
          {
            lineHeight: "32.4px",
            fontWeight: "600",
          },
        ],
        "sub-heading2-semibold": [
          "27px",
          {
            lineHeight: "32.4px",
            fontWeight: "500",
          },
        ],
        "sub-heading2-light": [
          "27px",
          {
            lineHeight: "32.4px",
            fontWeight: "400",
          },
        ],

        "body1-bold": [
          "22px",
          {
            lineHeight: "26.4px",
            fontWeight: "600",
          },
        ],
        "body1-semibold": [
          "22px",
          {
            lineHeight: "26.4px",
            fontWeight: "500",
          },
        ],
        "body1-light": [
          "22px",
          {
            lineHeight: "26.4px",
            fontWeight: "400",
          },
        ],

        "body2-bold": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "600",
          },
        ],
        "body2-semibold": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "500",
          },
        ],
        "body2-light": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "400",
          },
        ],

        "text1-bold": [
          "16px",
          {
            lineHeight: "19.2px",
            fontWeight: "600",
          },
        ],
        "text1-semibold": [
          "16px",
          {
            lineHeight: "19.2px",
            fontWeight: "500",
          },
        ],
        "text1-light": [
          "16px",
          {
            lineHeight: "19.2px",
            fontWeight: "400",
          },
        ],

        "text2-bold": [
          "14px",
          {
            lineHeight: "16.8px",
            fontWeight: "600",
          },
        ],
        "text2-semibold": [
          "14px",
          {
            lineHeight: "16.8px",
            fontWeight: "500",
          },
        ],
        "text2-light": [
          "14px",
          {
            lineHeight: "16.8px",
            fontWeight: "400",
          },
        ],

        "caption1-bold": [
          "11px",
          {
            lineHeight: "13.2px",
            fontWeight: "600",
          },
        ],
        "caption1-semibold": [
          "11px",
          {
            lineHeight: "13.2px",
            fontWeight: "500",
          },
        ],
        "caption1-light": [
          "11px",
          {
            lineHeight: "13.2px",
            fontWeight: "400",
          },
        ],

        "caption2-bold": [
          "9px",
          {
            lineHeight: "10.8px",
            fontWeight: "600",
          },
        ],
        "caption2-semibold": [
          "9px",
          {
            lineHeight: "10.8px",
            fontWeight: "500",
          },
        ],
        "caption2-light": [
          "9px",
          {
            lineHeight: "10.8px",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        primary: {
          100: "#cdcfcf",
          200: "#9b9ea0",
          300: "#6a6e70",
          400: "#383d41",
          500: "#060d11",
          600: "#050a0e",
          700: "#04080a",
          800: "#020507",
          900: "#010303",
        },
        secondary: {
          100: "#d0d4d6",
          200: "#a1a9ad",
          300: "#717f83",
          400: "#42545a",
          500: "#132931",
          600: "#0f2127",
          700: "#0b191d",
          800: "#081014",
          900: "#04080a",
        },
        tertiary: {
          100: "#e7f3f5",
          200: "#cfe6eb",
          300: "#b8dae1",
          400: "#a0cdd7",
          500: "#88c1cd",
          600: "#6d9aa4",
          700: "#52747b",
          800: "#364d52",
          900: "#1b2729",
        },
        error: "#C84444",
      },

      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
