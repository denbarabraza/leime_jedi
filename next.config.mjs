import path from 'path';

const __filename = import.meta.url;
const __dirname = path.dirname(new URL(__filename).pathname);

const sassOptions = {
  includePaths: [path.join(__dirname, 'styles')],
};

const nextConfig = {
  sassOptions,
};

export default nextConfig;
