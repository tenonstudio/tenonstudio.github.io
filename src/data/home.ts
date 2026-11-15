import { SITE } from './site';

export const homeMeta = {
  title: `${SITE.name} — Crafting Ideas Into Polished Products`,
  titleZh: `${SITE.nameZh} — 把想法打磨成产品`,
  description: `${SITE.name} — a small but passionate team crafting ideas into polished products for the Mac. Makers of Flip, Porthole, Tessera, Launchpad, and Bubble.`,
  descriptionZh: `${SITE.nameZh} — 一支小而专注的团队，为 Mac 把想法打磨成产品。Flip、Porthole、Tessera、Launchpad 与 Bubble 的创造者。`,
  greeting: 'Hello there!',
  greetingZh: '你好呀！',
  intro: `We are ${SITE.name} — a small but passionate team crafting ideas into polished products for the Mac. Craft is part of our DNA. When it comes to marketing… well, let’s just say our apps probably speak louder than our tweets 😅.`,
  introZh: `我们是${SITE.nameZh}（${SITE.name}）——一支小而专注的团队，为 Mac 把想法打磨成产品。对细节的讲究刻在我们的 DNA 里。至于营销……嗯，大概我们的 App 比我们的推文更会说话 😅。`,
  ctaLead: 'If you enjoy what we create, don’t be shy,',
  ctaLeadZh: '如果你喜欢我们做的东西，别害羞，',
  ctaLink: 'get in touch!',
  ctaLinkZh: '联系我们！',
  copyPress: 'Press',
  copyPressZh: '按',
  copyHint: 'to copy our email',
  copyHintZh: '复制我们的邮箱',
  workTitle: 'WORK',
  workTitleZh: '作品',
  workSubtitle: 'A Selection of Our Recent Works and Products',
  workSubtitleZh: '近期作品与产品精选',
  contactTitle: 'CONTACT',
  contactTitleZh: '联系',
  contactSubtitle: 'If you enjoy what we create, don’t be shy 😊',
  contactSubtitleZh: '如果你喜欢我们做的东西，别害羞 😊'
} as const;

export const work = {
  flip: {
    href: '/apps/flip/',
    title: 'Flip - Mac Control Panel',
    titleZh: 'Flip - Mac 控制面板',
    tags: ['macOS 12+']
  },
  tessera: {
    href: '/apps/tessera/',
    title: 'Tessera - Live Wallpaper',
    titleZh: 'Tessera - 动态壁纸',
    tags: ['macOS 12+']
  },
  launchpad: {
    href: '/apps/launchpad/',
    title: 'Launchpad - The Launcher',
    titleZh: 'Launchpad - 应用启动台',
    tags: ['macOS 26+'],
    badge: 'Free',
    badgeZh: '免费'
  },
  porthole: {
    href: '/apps/porthole/',
    title: 'Porthole - Window Mirror',
    titleZh: 'Porthole - 窗口镜像',
    tags: ['macOS 13+']
  },
  bubble: {
    href: '/apps/bubble/',
    title: 'Bubble - Selection Actions',
    titleZh: 'Bubble - 划词操作',
    tags: ['macOS 12+'],
    badge: 'Free',
    badgeZh: '免费'
  }
} as const;

export const contacts = [
  {
    kind: 'email',
    label: 'Email',
    labelZh: '邮箱',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    copy: true
  },
  {
    kind: 'github',
    label: 'GitHub',
    labelZh: 'GitHub',
    value: SITE.github.handle,
    href: SITE.github.url
  },
  {
    kind: 'x',
    label: 'X',
    labelZh: 'X',
    value: `@${SITE.x.handle}`,
    href: SITE.x.url
  }
] as const;

export const appTiles = [
  { label: 'Flip', icon: '/assets/flip-icon.png' },
  { label: 'Porthole', icon: '/assets/porthole-icon.png' },
  { label: 'Tessera', icon: '/assets/tessera-icon.png' },
  { label: 'Launchpad', icon: '/assets/launchpad-icon.png' },
  { label: 'Bubble', icon: '/assets/bubble-icon.png' },
  { label: 'Files', glyph: 'files' },
  { label: 'Terminal', glyph: 'terminal' },
  { label: 'Notes', glyph: 'notes' },
  { label: 'Music', glyph: 'music' },
  { label: 'Settings', glyph: 'settings' }
] as const;
