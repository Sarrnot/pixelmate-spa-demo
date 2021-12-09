import { CardLayout } from "components/Card/CardLayout/";
import { Card } from "components/Card/Card/";
import { DesignerPreview } from "components/Designer/DesignerPreview";
import { useEffect, useState } from "react";
import axios from "axios";

export function DesignersPage() {
  const [designersList, setDesignersList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setDesignersList(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError("Něco se pokazilo...");
      });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <CardLayout>
      {designersList.map((item) => (
        <Card key={item.id}>
          <DesignerPreview
            name={item.name}
            username={item.username}
            email={item.email}
            address={item.address}
            website={item.website}
          />
        </Card>
      ))}
    </CardLayout>
  );
}
