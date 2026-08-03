/***********************************************************************
 * flickrService.js
 *
 * Consulta el proxy serverless (api/flickr.js) en vez de llamar a Flickr
 * directo desde el navegador, para no exponer la API key en el bundle.
 ***********************************************************************/

/**
 * Obtiene todas las fotos del álbum configurado.
 */
export const getAlbumPhotos = async () => {
  try {
    const response = await fetch("/api/flickr");

    if (!response.ok) {
      throw new Error("Error obteniendo fotos desde Flickr");
    }

    return await response.json();
  } catch (error) {
    console.error("Flickr Error:", error);

    throw error;
  }
};
