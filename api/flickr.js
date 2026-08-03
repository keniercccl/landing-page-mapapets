// Funcion serverless de Vercel: consulta Flickr desde el servidor para no
// exponer la API key en el bundle publico (antes vivia en VITE_FLICKR_API_KEY,
// visible para cualquiera en el JS del navegador).
//
// Variables de entorno requeridas en Vercel (Settings -> Environment Variables),
// SIN prefijo VITE_ para que no se filtren al cliente:
//   FLICKR_API_KEY
//   FLICKR_ALBUM_ID

const buildPhotoUrl = (photo) =>
  `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;

export default async function handler(req, res) {
  try {
    const endpoint =
      `https://www.flickr.com/services/rest/` +
      `?method=flickr.photosets.getPhotos` +
      `&api_key=${process.env.FLICKR_API_KEY}` +
      `&photoset_id=${process.env.FLICKR_ALBUM_ID}` +
      `&extras=description,tags,url_b` +
      `&format=json` +
      `&nojsoncallback=1`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Error obteniendo fotos desde Flickr");
    }

    const data = await response.json();

    const photos = data.photoset.photo.map((photo) => ({
      id: photo.id,
      title: photo.title || "Mascota viajera",
      description:
        photo.description?._content || "Una nueva historia junto a su familia.",
      image: photo.url_b || buildPhotoUrl(photo),
      tags: photo.tags?.split(" ") || [],
    }));

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json(photos);
  } catch (error) {
    console.error("Flickr Error:", error);
    res.status(500).json({ error: "Error obteniendo fotos desde Flickr" });
  }
}
