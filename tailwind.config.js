/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: { sans: ["Inter", "sans-serif"] },
    fontSize: {
      xsm: ["12px", "20px"],
      sm: ["14px", "20px"],
      msm: ["16px", "20px"],
      base: ["16px", "24px"],
      midl: ["18px", "24px"],
      lg: ["20px", "24px"],
      sxl: ["24px", "30px"],
      xl: ["24px", "32px"],
      xxl: ["32px", "32px"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
//   theme: {
//     container: {
//       center: true,
//     },

//     extend: {
//       maxHeight: {
//         850: "850px",
//         74: "74px",
//       },
//       height: {
//         850: "850px",
//         472: "472px",
//         485: "485px",
//         408: "408px",
//         316: "316px",
//         281: "281px",
//         256: "256px",
//         74: "74px",
//         50: "50px",
//       },
//       width: {
//         579: "579px",
//         350: "350px",
//         337: "337px",
//         335: "335px",
//         295: "295px",
//         287: "287px",
//         218: "218px",
//         192: "192px",
//         180: "180px",
//         100: "100px",
//       },
//     },
//   },
//   plugins: [],
// };
