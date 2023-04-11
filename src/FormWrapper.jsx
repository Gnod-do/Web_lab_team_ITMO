import { ReactNode } from "react";

export function FormWrapper({ title, children }) {
  return (
    <div className={"form_wrap"}>
      {/* <h2
        style={{
          textAlign: "center",
          // margin: 0,
          // marginBottom: "2rem",
          marginTop: "5rem",
        }}
      >
        {title}
      </h2> */}
      {children}
      {/* <div
        style={{
          display: "inline-block",
          gap: "1rem .5rem",
          // justifyContent: "flex-start",
          // gridTemplateColumns: "auto minmax(auto, 100px)",
        }}
      >
      
      </div> */}
    </div>
  );
}
