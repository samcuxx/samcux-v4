/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                pathname: '/samuelamoah/**'
            }
        ]
    }
};

export default nextConfig;
