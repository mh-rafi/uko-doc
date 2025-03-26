import React from "react";
// import { DocsThemeConfig } from "nextra-theme-docs";

const config = {
  logo: (
    <>
      <img src="/logo.svg" width="40px" alt="Onion Logo" />
      <span className="nx-text-primary nx-font-medium nx-ml-2">Onion Documentation</span>
    </>
  ),
  docsRepositoryBase: "https://support.ui-lib.com",
  feedback: { content: null },
  editLink: { component: () => null },
  sidebar: { defaultMenuCollapseLevel: 1 },
  footer: {
    text: <p className="nx-mx-auto">{new Date().getFullYear()} © UI Lib</p>
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Onion Admin Template"
    };
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <title>Onion - Client & Admin Dashboard Documentation</title>
    </>
  ),

  navbar: {
    extraContent: (
      <a
        target="_blank"
        href="https://onionui.com"
        style={{
          fontSize: 14,
          padding: ".6rem .8rem",
          background: "#6950E8",
          border: "none",
          color: "#fff",
          borderRadius: 8,
          lineHeight: 1
        }}>
        View Demo
      </a>
    )
  }
};

export default config;
