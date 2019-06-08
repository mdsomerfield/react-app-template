import config from './client-config.json';

export const environmentConfig = config[environment || 'development'];