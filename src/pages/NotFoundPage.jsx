import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <h1>Nenalezeno!</h1>
      <h4>Toto není stránka, kterou hledáš.</h4>
      <div className="mt-4">
        <Link to="/" className="btn btn-primary btn-lg" role="button">
          Přejít na domovskou stránku
        </Link>
      </div>
    </>
  );
}
