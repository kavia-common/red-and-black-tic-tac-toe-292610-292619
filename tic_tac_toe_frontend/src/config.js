const {
  REACT_APP_API_BASE,
  REACT_APP_BACKEND_URL,
  REACT_APP_FRONTEND_URL,
  REACT_APP_WS_URL,
  REACT_APP_NODE_ENV,
  REACT_APP_ENABLE_SOURCE_MAPS,
  REACT_APP_PORT,
  REACT_APP_LOG_LEVEL,
  REACT_APP_HEALTHCHECK_PATH,
  REACT_APP_FEATURE_FLAGS,
  REACT_APP_EXPERIMENTS_ENABLED
} = process.env || {};

// PUBLIC_INTERFACE
const config = {
  /** Base URLs */
  apiBase: REACT_APP_API_BASE || '',
  backendUrl: REACT_APP_BACKEND_URL || '',
  frontendUrl: REACT_APP_FRONTEND_URL || '',
  wsUrl: REACT_APP_WS_URL || '',

  /** Environment and flags */
  nodeEnv: REACT_APP_NODE_ENV || process.env.NODE_ENV || 'development',
  enableSourceMaps: /^(true|1)$/i.test(REACT_APP_ENABLE_SOURCE_MAPS || '') || false,
  port: Number(REACT_APP_PORT) || 3000,
  logLevel: REACT_APP_LOG_LEVEL || 'info',
  healthcheckPath: REACT_APP_HEALTHCHECK_PATH || '/healthz',
  featureFlags: (REACT_APP_FEATURE_FLAGS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  experimentsEnabled:
    /^(true|1)$/i.test(REACT_APP_EXPERIMENTS_ENABLED || '') || false
};

export default config;
