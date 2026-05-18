import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  sandboxId: undefined,
  agentName: "pragni-agent",
  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,
  startButtonText: 'Chat with Agent',
  companyName: 'Pragni',
  accent: '#002cf2',
  accentDark: '#1fd5f9',
  logo: '/lk-logo.svg',
  logoDark: '/lk-logo-dark.svg',
};
