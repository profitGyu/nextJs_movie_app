/** @type {import('next').NextConfig} */
const API_KEY = "37819790f34c4eaa4a79f8c47e794ab0";


const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
    },{
      source: "/api/movies/:id",
      destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko-KR`
    },{
      source:"/api/movies/credits/:id",
      destination: `https://api.themoviedb.org/3/movie/:id/credits?api_key=${API_KEY}&language=ko-KR`
    },{
      source:"/api/movies/image/:path",
      destination: `https://image.tmdb.org/t/p/w500/:path`
    }];
  },
};

module.exports = nextConfig;
