import nextra from "nextra";
import { remarkCodeHike } from "@code-hike/mdx";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          lineNumbers: true,
          showCopyButton: true,
          theme: "dracula",
        },
      ],
    ],
  },
});

export default withNextra();
