import platform from '@/platform'

export const featureFlags = {
  mcp: true,
  knowledgeBase: platform.isDesktopLike,
  skills: platform.isDesktopLike,
  agentMode: true,
}
