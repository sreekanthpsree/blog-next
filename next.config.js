const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "cnct2sree",
        mongodb_password: "WgxBebNZHs95zN2f",
        mongodb_clusterName: "cluster0",
        mongodb_database: "message-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "cnct2sree",
      mongodb_password: "WgxBebNZHs95zN2f",
      mongodb_clusterName: "cluster0",
      mongodb_database: "message",
    },
  };
};
