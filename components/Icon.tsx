import {ReactElement} from "react";
type IconProps = {
  children: ReactElement;
  text: string | null;
  size: "medium" | "small";
};

export const Icon = ({children, text, size}: IconProps) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
      <div
        style={{
          width: size == "small" ? "75px" : "100px",
          height: size == "small" ? "75px" : "100px",
          borderRadius: size == "small" ? "24px" : "32px",
          border: "1px solid #FFF",
          background: "#FFF",
          boxShadow: "0px 4px 40px 0px rgba(9, 9, 12, 0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <p
        style={{
          margin: "0",
          color: " #111827",

          fontSize: "18px",
          fontStyle: " normal",
          fontWeight: "500",
          lineHeight: "16.6px",
        }}
      >
        {text}
      </p>
    </div>
  );
};
