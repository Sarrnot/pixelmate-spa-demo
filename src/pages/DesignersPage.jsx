import { AppHeader } from "components/AppHeader";
import { AppFooter } from "components/AppFooter";
import { CardLayout } from "components/Card/CardLayout/";
import { Card } from "components/Card/Card/";
import { DesignerPreview } from "components/Designer/DesignerPreview";
import { DesignerSearchBar } from "components/Designer/DesignerSearchBar";
import { WhiteHeader } from "components/WhiteHeader";
import { useEffect, useState } from "react";
import axios from "axios";

export function DesignersPage() {
  const [designersList, setDesignersList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");

  const filteredDesignersList = designersList.filter(({ name }) =>
    name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setDesignersList(data);
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
      <WhiteHeader>
        <DesignerSearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </WhiteHeader>
      <CardLayout>
        {loading || error
          ? requestStatus
          : filteredDesignersList.map((item) => (
              <Card key={item.id}>
                <DesignerPreview
                  name={item.name}
                  username={item.username}
                  email={item.email}
                  address={item.address}
                  website={item.website}
                  id={item.id}
                />
              </Card>
            ))}
      </CardLayout>
      <AppFooter />
    </>
  );
}
