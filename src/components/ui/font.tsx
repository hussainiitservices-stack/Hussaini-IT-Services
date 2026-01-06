// font.tsx
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { useEffect } from "react";

const Font = () => {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      /* Absolute override – no survivors */
      *,
      *::before,
      *::after {
        font-family: "Inter", system-ui, -apple-system,
          BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      }

      /* Headings */
      h1 {
        font-weight: 700;
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.2;
      }

      h2 {
        font-weight: 600;
        font-size: clamp(1.75rem, 3vw, 2.4rem);
      }

      h3 {
        font-weight: 600;
        font-size: 1.6rem;
      }

      /* Sub-headings */
      h4, h5, h6 {
        font-weight: 500;
        letter-spacing: 0.2px;
      }

      /* Body text */
      p, span, li, a, label, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6;
      }

      small {
        font-size: 0.875rem;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default Font;
