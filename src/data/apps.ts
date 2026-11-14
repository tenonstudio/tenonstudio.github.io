export type Localized = { en: string; zh: string };

export type Feature = {
  title: Localized;
  body: Localized;
};

export type Spec = {
  label: Localized;
  value: Localized;
};

export type App = {
  slug: string;
  index: string;
  name: string;
  category: Localized;
  platform: string;
  tagline: Localized;
  description: Localized;
  deck: Localized;
  features: Feature[];
  specs: Spec[];
  tags: Localized[];
  icon: string;
  accent: string;
  accentSoft: string;
  download: string;
  appcast?: string;
  buy?: string;
  free?: boolean;
  featured?: boolean;
};

export const apps: App[] = [
  {
    slug: 'flip',
    index: '01',
    name: 'Flip',
    category: { en: 'Menu bar utility', zh: '菜单栏效率工具' },
    platform: 'macOS 12+',
    tagline: { en: 'Every switch you reach for, in one quiet panel.', zh: '每天要用的 macOS 开关，收进一个安静的面板。' },
    description: {
      en: 'Flip lives in your menu bar and gathers the system toggles, shortcuts, and small scripts you use every day. Open it with a click or a global shortcut, move with the arrow keys, and press Return or Space to act.',
      zh: 'Flip 常驻菜单栏，把每天要用的系统开关、快捷键和小脚本收在一起。点开图标或按全局快捷键打开，方向键选择，回车或空格执行。'
    },
    deck: {
      en: 'A small control room for the Mac — low power, dark mode, keep awake, cleanup, Focus, and your own commands.',
      zh: '一个更小的 Mac 控制台——低电量、深色模式、保持唤醒、清理、专注，以及你自己的命令。'
    },
    features: [
      { title: { en: '33 controls', zh: '33 个控制项' }, body: { en: 'Low Power, Dark Mode, Keep Awake, network, Bluetooth, AirDrop, cleanup, display sleep, and more.', zh: '低电量、深色模式、保持唤醒、网络、蓝牙、隔空投送、清理、显示器休眠等。' } },
      { title: { en: 'Keyboard-first', zh: '键盘优先' }, body: { en: 'Record a shortcut to open the panel. Use the arrow keys to select, Return or Space to act.', zh: '录制打开面板的全局快捷键。方向键选择，回车或空格执行。' } },
      { title: { en: 'Custom commands', zh: '自定义命令' }, body: { en: 'Add one-shot actions, on/off scripts, or preset choices with a single .js file.', zh: '用一个 .js 文件加入一次性动作、开关脚本或预设选项。' } },
      { title: { en: 'Your order', zh: '你的顺序' }, body: { en: 'Choose what appears in the panel and drag the list into the order that matches your day.', zh: '选择面板里出现什么，再拖动成符合你工作节奏的顺序。' } },
      { title: { en: 'System Helper', zh: '系统 Helper' }, body: { en: 'Privileged controls such as Low Power and clamshell sleep use a separate System Helper.', zh: '低电量、合盖不休眠等需要特权的控制由独立的 System Helper 完成。' } },
      { title: { en: 'No account', zh: '无需账号' }, body: { en: 'Your configuration and scripts stay on your Mac. No account is needed to use Flip.', zh: '配置和脚本保存在本机，使用 Flip 不需要注册账号。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 12+\nApple silicon and Intel', zh: 'macOS 12+\nApple 芯片和 Intel' } },
      { label: { en: 'License', zh: '授权' }, value: { en: '14-day trial\nLifetime license', zh: '14 天试用\n买断授权' } },
      { label: { en: 'Privacy', zh: '隐私' }, value: { en: 'Local by default\nNo account', zh: '默认本地\n无需账号' } }
    ],
    tags: [{ en: '33 controls', zh: '33 个控制项' }, { en: 'Global shortcuts', zh: '全局快捷键' }, { en: 'Custom commands', zh: '自定义命令' }],
    icon: '/assets/flip-icon.png',
    accent: '#7b8cff',
    accentSoft: '#e8eaff',
    download: '/apps/flip/downloads/Flip-0.29.20.dmg',
    appcast: '/apps/flip/appcast.xml',
    buy: '/apps/flip/buy/',
    featured: true
  },
  {
    slug: 'porthole',
    index: '02',
    name: 'Porthole',
    category: { en: 'Window mirroring', zh: '窗口镜像' },
    platform: 'macOS 13+',
    tagline: { en: 'Any window. Always in sight.', zh: '任意窗口，始终在视线里。' },
    description: {
      en: 'Porthole turns any app window or screen region into a real-time floating mirror. Keep a chart, a chat, a video, or a reference above your work without switching spaces.',
      zh: 'Porthole 把任意应用窗口或屏幕区域变成实时悬浮镜像。行情、聊天、视频或参考资料可以一直浮在工作上方，不用来回切换桌面。'
    },
    deck: {
      en: 'A second view without a second screen. Mirror a window, pin it above your work, and let clicks pass through.',
      zh: '不接第二块屏，也能多一个视野。镜像一个窗口，置顶，点击穿透。'
    },
    features: [
      { title: { en: 'Window or region', zh: '窗口或区域' }, body: { en: 'Mirror a whole app window, or drag-select any region inside it, including a circular selection.', zh: '镜像整个应用窗口，或拖拽截取窗口内任意区域，也支持圆形选区。' } },
      { title: { en: 'Three display modes', zh: '三种展示方式' }, body: { en: 'One window per mirror, grouped by app, or several sources in one unified container.', zh: '每个镜像独立成窗、按 App 分组，或多个来源共用一个统一容器。' } },
      { title: { en: 'Click-through', zh: '点击穿透' }, body: { en: 'Adjust opacity and let clicks pass through a mirror so it never blocks the work underneath.', zh: '调整透明度，让点击穿透镜像，不会挡住下面的工作。' } },
      { title: { en: 'Scroll to zoom', zh: '滚轮缩放' }, body: { en: 'Hover and scroll to enlarge a mirror while keeping the live source crisp.', zh: '悬停滚动即可放大镜像，同时保持实时来源清晰。' } },
      { title: { en: 'Menu bar pin', zh: '驻留菜单栏' }, body: { en: 'Pin a live thumbnail to the menu bar and restore the full mirror with one click.', zh: '把实时缩略图留在菜单栏，一键恢复完整镜像。' } },
      { title: { en: 'Private by design', zh: '本地优先' }, body: { en: 'Frames are processed on your Mac. No frames are uploaded or stored.', zh: '所有画面都在本机处理，不上传、不存储画面数据。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 13+\nApple silicon', zh: 'macOS 13+\nApple 芯片' } },
      { label: { en: 'License', zh: '授权' }, value: { en: '14-day trial\nLifetime license', zh: '14 天试用\n买断授权' } },
      { label: { en: 'Privacy', zh: '隐私' }, value: { en: 'Local rendering\nNo uploads', zh: '本地渲染\n不上传' } }
    ],
    tags: [{ en: 'Live mirroring', zh: '实时镜像' }, { en: 'Click-through', zh: '点击穿透' }, { en: 'Browser extension', zh: '浏览器扩展' }],
    icon: '/assets/porthole-icon.png',
    accent: '#ff6259',
    accentSoft: '#ffe8e5',
    download: '/apps/porthole/downloads/Porthole-0.0.6.dmg',
    appcast: '/apps/porthole/appcast.xml',
    buy: '/apps/porthole/buy/'
  },
  {
    slug: 'tessera',
    index: '03',
    name: 'Tessera',
    category: { en: 'Generative wallpaper', zh: '生成艺术壁纸' },
    platform: 'macOS 12+',
    tagline: { en: 'A living desktop, written in p5.js.', zh: '用 p5.js 写成的、会呼吸的桌面。' },
    description: {
      en: 'Tessera renders generative sketches as your macOS wallpaper. Each built-in theme is a small p5.js program, and every sketch can be opened, edited, and made your own.',
      zh: 'Tessera 把生成艺术草图变成 macOS 动态壁纸。每个内置主题都是一段小型 p5.js 程序，也可以打开、修改，变成你自己的壁纸。'
    },
    deck: {
      en: 'Animated wallpaper as a program. Pick a built-in sketch or open the source and make it yours.',
      zh: '会动的壁纸也是一段程序。选一个内置草图，或者打开源码改成自己的。'
    },
    features: [
      { title: { en: 'Live p5.js', zh: '实时 p5.js' }, body: { en: 'Sketches run continuously behind your windows, with a configurable frame-rate cap for quieter power use.', zh: '草图在窗口背后持续运行，可限制帧率以降低功耗。' } },
      { title: { en: 'Three built-in themes', zh: '三个内置主题' }, body: { en: 'Ring Clock, Truchet Tiles, and Matrix Digital Rain — each with its own controls and color options.', zh: '环形时钟、Truchet 瓷砖、Matrix 数字雨，每个都有独立参数和配色。' } },
      { title: { en: 'Menu bar agent', zh: '菜单栏常驻' }, body: { en: 'Tessera lives in the menu bar, so it stays out of the Dock and keeps the desktop clear.', zh: 'Tessera 常驻菜单栏，不占 Dock，保持桌面干净。' } },
      { title: { en: 'Edit the source', zh: '直接编辑' }, body: { en: 'Open any built-in sketch in your editor, change it, save, and reload the wallpaper from the menu.', zh: '用本地编辑器打开内置草图，修改保存后从菜单重载壁纸。' } },
      { title: { en: 'Native macOS shell', zh: '原生 macOS 外壳' }, body: { en: 'AppKit windows, SwiftUI settings, a real menu bar item, and a Sparkle-powered updater.', zh: 'AppKit 窗口、SwiftUI 设置、真正的菜单栏项，以及 Sparkle 更新。' } },
      { title: { en: 'A CLI for wallpapers', zh: '壁纸命令行' }, body: { en: 'The bundled wall command creates, validates, packs, and inspects Wallpaper Script projects.', zh: '内置 wall 命令可创建、校验、打包和检查 Wallpaper Script 项目。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 12+\nAppKit + SwiftUI', zh: 'macOS 12+\nAppKit + SwiftUI' } },
      { label: { en: 'Runtime', zh: '运行时' }, value: { en: 'p5.js 1.x\nBundled locally', zh: 'p5.js 1.x\n本地内置' } },
      { label: { en: 'Updates', zh: '更新' }, value: { en: 'Sparkle\nSelf-updating', zh: 'Sparkle\n自动更新' } }
    ],
    tags: [{ en: 'Live p5.js', zh: '实时 p5.js' }, { en: 'Editable source', zh: '源码可编辑' }, { en: 'Menu bar agent', zh: '菜单栏常驻' }],
    icon: '/assets/tessera-icon.png',
    accent: '#28b8c7',
    accentSoft: '#e0f8fb',
    download: '/apps/tessera/downloads/Tessera-0.1.0.dmg',
    appcast: '/apps/tessera/appcast.xml',
    buy: '/apps/tessera/buy/'
  },
  {
    slug: 'launchpad',
    index: '04',
    name: 'Launchpad',
    category: { en: 'Application launcher', zh: '应用启动台' },
    platform: 'macOS 26+',
    tagline: { en: 'The Launchpad macOS left behind, rebuilt for macOS 26.', zh: 'macOS 26 移除的启动台，重新做回来。' },
    description: {
      en: 'Launchpad restores the full-screen app grid that macOS 26 removed. Search with pinyin, organize apps into folders, page or scroll through everything, and open it from a shortcut, hot corner, or the menu bar.',
      zh: 'Launchpad 把 macOS 26 移除的全屏应用网格重新做回来。支持拼音搜索、文件夹整理、分页或滚动浏览，也能用快捷键、触发角或菜单栏打开。'
    },
    deck: {
      en: 'A native launcher for macOS 26 — folders, pinyin search, compact glass mode, and keyboard-first navigation.',
      zh: '为 macOS 26 打造的原生启动台——文件夹、拼音搜索、小窗玻璃模式和键盘优先导航。'
    },
    features: [
      { title: { en: 'Full-screen or compact', zh: '全屏或小窗' }, body: { en: 'Use the classic full-screen grid or a rounded floating glass window with the Dock still visible.', zh: '使用经典全屏网格，或保留 Dock 的圆角浮动玻璃小窗。' } },
      { title: { en: 'Pinyin search', zh: '拼音搜索' }, body: { en: 'Search by app name, full pinyin, or pinyin initials, with instant keyboard selection.', zh: '按应用名、全拼或拼音首字母搜索，键盘即时选择。' } },
      { title: { en: 'Folders and pages', zh: '文件夹与分页' }, body: { en: 'Drag apps into folders, reorder across pages, and expand folders with a matched-geometry animation.', zh: '把应用拖进文件夹、跨页排序，文件夹以 matched-geometry 动画展开。' } },
      { title: { en: 'Multi-select', zh: '多选' }, body: { en: 'Command-click, Shift-range, or drag a box; hide apps or move them into folders in batches.', zh: '⌘ 点选、Shift 连选或拖框，批量隐藏应用或移入文件夹。' } },
      { title: { en: 'Your triggers', zh: '你的触发方式' }, body: { en: 'Open with a global shortcut, F4, a hot corner, the Dock, or the menu bar.', zh: '用全局快捷键、F4、触发角、Dock 或菜单栏打开。' } },
      { title: { en: 'Free and native', zh: '免费且原生' }, body: { en: 'Built with SwiftUI and AppKit. No account, no ads, and your layout stays on your Mac.', zh: 'SwiftUI + AppKit 原生实现。无需账号、无广告，布局保存在本机。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 26+\nUniversal', zh: 'macOS 26+\nUniversal' } },
      { label: { en: 'Price', zh: '价格' }, value: { en: 'Free', zh: '免费' } },
      { label: { en: 'Updates', zh: '更新' }, value: { en: 'Sparkle\nSelf-updating', zh: 'Sparkle\n自动更新' } }
    ],
    tags: [{ en: 'Native launcher', zh: '原生启动台' }, { en: 'Pinyin search', zh: '拼音搜索' }, { en: 'Folders', zh: '文件夹' }],
    icon: '/assets/launchpad-icon.png',
    accent: '#4f7cff',
    accentSoft: '#e8efff',
    download: '/apps/launchpad/downloads/Launchpad-0.3.10.dmg',
    appcast: '/apps/launchpad/appcast.xml',
    free: true
  },
  {
    slug: 'bubble',
    index: '05',
    name: 'Bubble',
    category: { en: 'Selection actions', zh: '划词操作栏' },
    platform: 'macOS 12+',
    tagline: { en: 'Your favourite actions, right where you select.', zh: '选中文本，操作就在指尖。' },
    description: {
      en: 'Bubble brings a compact native action bar to any selected text. Search, cut, copy, paste, open links, run shortcuts, or launch your own extensions without leaving the app you are already in. It ships with its own extension ecosystem and a one-click migration path for PopClip extensions.',
      zh: 'Bubble 把一条紧凑的原生操作栏带到选中的文字旁边。搜索、剪切、复制、粘贴、打开链接、运行快捷指令，或执行自己的扩展，不用离开当前 App。它有自己的扩展生态，也能一键迁移 PopClip 扩展。'
    },
    deck: {
      en: 'A PopClip-style selection bar with a native extension ecosystem, global shortcut, app and website rules, and a bar you can make your own.',
      zh: 'PopClip 风格的划词操作栏，配原生扩展生态、全局快捷键、App/网站规则，以及可以按自己喜好调整的外观。'
    },
    features: [
      { title: { en: 'Immediate actions', zh: '即选即用' }, body: { en: 'Search, Cut, Copy, Paste, Open Link, Dictionary, Reveal in Finder, and spelling live in a small bar beside the selection.', zh: '搜索、剪切、复制、粘贴、打开链接、词典、在访达中显示和拼写检查都在选区旁的小栏里。' } },
      { title: { en: 'Native extensions', zh: '原生扩展' }, body: { en: 'Install .bubbleext packages with declarative actions, JavaScript, shell, AppleScript, Shortcuts, or Services. Permissions are declared in the manifest.', zh: '安装 .bubbleext 扩展，支持声明式动作、JavaScript、Shell、AppleScript、快捷指令或服务。权限在清单中声明。' } },
      { title: { en: 'PopClip migration', zh: 'PopClip 迁移' }, body: { en: 'Existing .popclipext packages are detected, converted, and installed as native Bubble extensions on first use.', zh: '已有的 .popclipext 扩展会被识别、转换，并在首次使用时安装为原生 Bubble 扩展。' } },
      { title: { en: 'App and website rules', zh: 'App 与网站规则' }, body: { en: 'Exclude apps or domains where Bubble should stay quiet. The global shortcut still works when you need it.', zh: '排除不希望 Bubble 自动出现的 App 或域名；需要时全局快捷键仍然可用。' } },
      { title: { en: 'Make it yours', zh: '按你的方式' }, body: { en: 'Choose the bar size, style, and position; drag actions into your own order and hide the ones you do not use.', zh: '调整操作栏大小、样式和位置；拖动操作排序，隐藏不用的项目。' } },
      { title: { en: 'Local by default', zh: '本地优先' }, body: { en: 'Extensions, settings, and action history stay on your Mac. No account, no subscription, no in-app purchase.', zh: '扩展、设置和操作记录都保存在本机。无需账号、无订阅、无内购。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 12+\nUniversal', zh: 'macOS 12+\nUniversal' } },
      { label: { en: 'License', zh: '授权' }, value: { en: 'Free\nNo account', zh: '免费\n无需账号' } },
      { label: { en: 'Updates', zh: '更新' }, value: { en: 'Sparkle\nSelf-updating', zh: 'Sparkle\n自动更新' } }
    ],
    tags: [{ en: 'Selection bar', zh: '划词操作栏' }, { en: 'Native extensions', zh: '原生扩展' }, { en: 'PopClip migration', zh: 'PopClip 迁移' }],
    icon: '/assets/bubble-icon.png',
    accent: '#5f6dff',
    accentSoft: '#e8eaff',
    download: '/apps/bubble/downloads/Bubble-0.3.8.dmg',
    appcast: '/apps/bubble/appcast.xml',
    free: true
  }
];

export const appBySlug = Object.fromEntries(apps.map((app) => [app.slug, app]));
