/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    typescript: {
        ignoreBuildErrors: true,
    },
    images:{
        domains:['lh3.googleusercontent.com']
    }
};

export default nextConfig;
