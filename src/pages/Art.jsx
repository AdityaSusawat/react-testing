import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

//add empty array error
//hard coded artworks.config.iiif_url for now

export function Art() {
  const [artworks, setArtworks] = useState(null); //1

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(
          "https://api.artic.edu/api/v1/artworks?fields=id,title,image_id&limit=100"
        ); //https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id
        const data = await response.json(); //set of 12 artworks
        setArtworks(data);
        console.log("ARTWORKS REFRESHED");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchArtworks();
  }, []);

  console.log(artworks);
  return (
    <>
      <Navbar />
      <h1>ART</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          border: "1px solid red",
          alignItems: "flex-start",
        }}
      >
        {artworks === null && (
          <div>Please wait while we retrieve some artworks for you</div>
        )}
        {artworks?.data?.length > 0 &&
          artworks?.data?.map((e) => {
            {
              const { id, title, image_id } = e;
              return (
                image_id != null && (
                  <div
                    key={id}
                    className="art-container"
                    style={{
                      width: "25%",
                      display: "flex",
                      padding: "4px",
                      overflow: "hidden",
                      alignContent: "flex-start",
                    }}
                  >
                    {artworks ? (
                      <div className="art-item">
                        <img
                          src={
                            "https://www.artic.edu/iiif/2" +
                            "/" +
                            image_id +
                            "/full/843,/0/default.jpg"
                          }
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                        <div className="overlay" style={{ fontSize: "18px" }}>
                          {title}
                        </div>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                )
              );
            }
          })}
      </div>
    </>
  );
}
