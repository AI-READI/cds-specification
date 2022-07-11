const { releasercConfig } = require('@fairdataihub/config');

const config = releasercConfig(
  'default',
  'fairdataihub',
  'dev.fairdataihub.org',
  false,
);

module.exports = config;
