import React from "react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles, Theme } from "@stylexjs/stylex/lib/StyleXTypes";
import { buttonTokens } from "./ButtonTokens.stylex";

const styles = stylex.create({
  base: {
    appearance: "none",
    borderWidth: 0,
    borderStyle: "none",
    backgroundColor: buttonTokens.bgColor,
    color: buttonTokens.textColor,
    borderRadius: buttonTokens.cornerRadius,
    paddingBlock: buttonTokens.paddingBlock,
    paddingInline: buttonTokens.paddingInline,
    ":hover": { backgroundColor: "darkblue" },
  },
  emphasis: { fontWeight: "bold" },
});

function Button({
  onClick,
  children,
  style,
  theme,
  emphasized,
}: Readonly<{
  onClick?: () => void;
  children: React.ReactNode;
  style?: StyleXStyles<{ backgroundColor?: string; color?: string }>;
  theme?: Theme<typeof buttonTokens>;
  emphasized?: boolean;
}>) {
  return (
    <button
      {...stylex.props(
        theme,
        styles.base,
        style,
        emphasized && styles.emphasis
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
