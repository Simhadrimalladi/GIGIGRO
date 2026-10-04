import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DIJIGRO — Digital Marketing, Web Design & Development',
    short_name: 'DIJIGRO',
    description: 'DIJIGRO helps businesses grow online through digital marketing, SEO, web design, web development, social media and performance marketing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
