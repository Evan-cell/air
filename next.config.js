/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  images: {
    domains: ['upload.wikimedia.org', 'links.papareact.com'],
  },
  env:{
    mapbox_key: 'pk.eyJ1IjoiZ2lmZWZlIiwiYSI6ImNscHMwMHZjYzBkMnQyaW8xM3E5ZTVvdHIifQ.9Q09ldjmATPNo2w4Uu7OcQ'
  }
};

