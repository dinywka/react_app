import React from "react";
import * as navbars from "./navbar";
import * as footers from "./footer";

export function Base1({ children }: any): any {
  return (
    <div className="">
      <navbars.Navbar1 />
      <main>{children}</main>
      <footers.Footer1 />
    </div>
  );
}

export function Base2({ children }: any): any {
  return (
    <div className="">
      <main>{children}</main>
      <footers.Footer1 />
    </div>
  );
}