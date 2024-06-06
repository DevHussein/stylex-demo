import stylex from "@stylexjs/stylex";
import Button from "./components/Button";
import { buttonTokens } from "./components/ButtonTokens.stylex";
const DARK_MODE = "@media (prefers-color-scheme: dark)";
const corporateTheme = stylex.createTheme(buttonTokens, {
  bgColor: { default: "black", [DARK_MODE]: "white" },
  textColor: { default: "white", [DARK_MODE]: "black" },
  cornerRadius: "4px",
  paddingBlock: "4px",
  paddingInline: "8px",
});
const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 20,
    justifyContent: "center",
    height: "100vh",
  },
  heading: { fontSize: 99, color: "#89CFF0", textShadow: "0 0 10px #89CFF0" },
});

const buttonStyles = stylex.create({
  red: { backgroundColor: "red", color: "white" },
});

export default function Home() {
  return (
    <main className={stylex(s.main)}>
      <h1 className={stylex(s.heading)}>Hello Boys</h1>
      <Button>Button</Button>
      <Button style={buttonStyles.red}>Red Button</Button>
      <Button theme={corporateTheme}>Corporate Button</Button>
      <Button theme={corporateTheme} emphasized>
        Emphasized Button
      </Button>
    </main>
  );
}
