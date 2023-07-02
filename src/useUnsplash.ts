import { useEffect, useState } from 'react';

const URL = 'https://api.unsplash.com';

type Photo = {
  alt_description: string;
  urls: Record<'raw' | 'full' | 'regular' | 'small' | 'thumb', string>;
};

const getPhotos = async (page: number) => {
  try {
    const res = await fetch(`${URL}/photos?page=${page}`, {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (res.ok) {
      const data: Photo[] = await res.json();
      return data;
    } else {
      return Promise.reject(new Error('Error fetching'));
    }
  } catch (error) {
    return new Error(JSON.stringify(error));
  }
};

const useUnsplash = ({ pagination }: { pagination: number }) => {
  const [page, setPage] = useState<Photo[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getPhotos(pagination);

      if (res instanceof Error) {
        console.error(res);
      } else {
        setPage(res);
      }
    })();
  }, [pagination]);

  return {
    page,
  };
};

export default useUnsplash;
