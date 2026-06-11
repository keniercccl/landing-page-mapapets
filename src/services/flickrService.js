// ```javascript
// /***********************************************************************
//  * flickrService.js
//  *
//  * Servicio encargado de consultar Flickr y transformar los datos
//  * para que sean consumidos fácilmente por React.
//  *
//  * Fuente:
//  * https://www.flickr.com/services/api/
//  ***********************************************************************/

const API_KEY = import.meta.env.VITE_FLICKR_API_KEY;
const ALBUM_ID = import.meta.env.VITE_FLICKR_ALBUM_ID;

// /**
//  * Construye la URL pública de Flickr.
//  */
const buildPhotoUrl = (photo) => {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
};

/**
 * Obtiene todas las fotos del álbum configurado.
 */
export const getAlbumPhotos = async () => {
  try {
    const endpoint =
      `https://www.flickr.com/services/rest/` +
      `?method=flickr.photosets.getPhotos` +
      `&api_key=${import.meta.env.VITE_FLICKR_API_KEY}` +
      `&photoset_id=${import.meta.env.VITE_FLICKR_ALBUM_ID}` +
      `&extras=description,tags,url_b` +
      `&format=json` +
      `&nojsoncallback=1`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Error obteniendo fotos desde Flickr");
    }

    const data = await response.json();

    return data.photoset.photo.map((photo) => ({
      id: photo.id,
      title: photo.title || "Mascota viajera",
      description:
        photo.description?._content || "Una nueva historia junto a su familia.",
      image: photo.url_b || buildPhotoUrl(photo),
      tags: photo.tags?.split(" ") || [],
    }));
  } catch (error) {
    console.error("Flickr Error:", error);

    throw error;
  }
};
