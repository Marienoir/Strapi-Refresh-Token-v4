module.exports = ({ env }) => ({
    'users-permissions': {
      enabled: true,
      config: {
        jwt: {
          expiresIn: '5m',
        },
      },
    },
  });
  