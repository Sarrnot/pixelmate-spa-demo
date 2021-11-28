import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { IndexPage } from "pages/IndexPage";
import { DesignersPage } from "pages/DesignersPage";
import { NotFoundPage } from "pages/NotFoundPage";

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' element={<IndexPage />} />
      <Route exact path='/designeri' element={<DesignersPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Switch>
  );
}
