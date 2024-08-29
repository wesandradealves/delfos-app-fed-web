export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: false, // Set to true if this is a permanent redirect
        },
      ];
    },
  };