// ```javascript
// /***********************************************************************
//  * useFlickrPhotos.js
//  *
//  * Hook encargado de:
//  *
//  * - Consultar Flickr.
//  * - Manejar loading.
//  * - Manejar errores.
//  * - Detectar dispositivo.
//  ***********************************************************************/

import { useEffect, useState } from "react";
import { getAlbumPhotos } from "../services/flickrService";

export const useFlickrPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        setLoading(true);

        const data = await getAlbumPhotos();

        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  return {
    photos,
    loading,
    error,
    isMobile,
  };
};
