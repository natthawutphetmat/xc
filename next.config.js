// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/socket.io/:path*",
        destination: "/api/socket", // ส่งไปที่ API route
      },
    ];
  },
};
