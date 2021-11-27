import React from "react";

import { AppHeader } from "components/AppHeader";
import { AppFooter } from "components/AppFooter";

export function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
}
