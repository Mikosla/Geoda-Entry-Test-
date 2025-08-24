import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";



// Mount the app
const root = createRoot(document.getElementById("root"));
root.render(      
  <StrictMode>
    <arcgis-map
      item-id="1992827de390443fb6331f4e2cbb2920">        
      </arcgis-map>
  
  </StrictMode>,
);
