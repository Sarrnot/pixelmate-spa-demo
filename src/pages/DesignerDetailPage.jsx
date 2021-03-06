import { AppHeader } from "components/AppHeader";
import { AppFooter } from "components/AppFooter";
import { DesignerDetail } from "components/Designer/DesignerDetail";
import { Viewport } from "components/Viewport";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function DesignerDetailPage() {
  const { slug } = useParams();
  const [designerDetails, setDesignerDetails] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${slug}`)
      .then(({ data }) => {
        setDesignerDetails(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const requestStatus = (
    <>
      {loading && <p>Loading spinner placeholder</p>}
      {error && <p>Something went wrong placeholder</p>}
    </>
  );

  return (
    <>
      <AppHeader />
      <Viewport>
        {loading || error ? (
          requestStatus
        ) : (
          <DesignerDetail
            name={designerDetails.name}
            username={designerDetails.username}
            email={designerDetails.email}
            address={designerDetails.address}
            website={designerDetails.website}
            company={designerDetails.company}
          />
        )}
      </Viewport>
      <AppFooter />
    </>
  );
}
