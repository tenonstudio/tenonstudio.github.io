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
  status?: 'available' | 'in-development';
  download?: string;
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
      { title: { en: 'Native and private', zh: '原生且本地' }, body: { en: 'Built with SwiftUI and AppKit. No account, no ads, and your layout stays on your Mac.', zh: 'SwiftUI + AppKit 原生实现。无需账号、无广告，布局保存在本机。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 26+\nUniversal', zh: 'macOS 26+\nUniversal' } },
      { label: { en: 'License', zh: '授权' }, value: { en: 'From $4.99\nLifetime license', zh: 'US$4.99 起\n买断授权' } },
      { label: { en: 'Updates', zh: '更新' }, value: { en: 'Sparkle\nSelf-updating', zh: 'Sparkle\n自动更新' } }
    ],
    tags: [{ en: 'Native launcher', zh: '原生启动台' }, { en: 'Pinyin search', zh: '拼音搜索' }, { en: 'Folders', zh: '文件夹' }],
    icon: '/assets/launchpad-icon.png',
    accent: '#4f7cff',
    accentSoft: '#e8efff',
    appcast: '/apps/launchpad/appcast.xml',
    buy: '/apps/launchpad/buy/'
  },
  {
    slug: 'bubble',
    index: '05',
    name: 'Bubble',
    category: { en: 'Selection actions', zh: '划词操作栏' },
    platform: 'macOS 12+',
    tagline: { en: 'Your favourite actions, right where you select.', zh: '选中文本，操作就在指尖。' },
    description: {
      en: 'Bubble brings a compact native action bar to any selected text. Search, cut, copy, paste, open links, or run your own JavaScript actions without leaving the app you are already in. Actions can open rich result windows, stream AI or translation output, and receive messages from forms and buttons.',
      zh: 'Bubble 把一条紧凑的原生操作栏带到选中的文字旁边。搜索、剪切、复制、粘贴、打开链接，或运行自己的 JavaScript 操作，不用离开当前 App。操作可以打开富结果窗口、流式显示 AI 或翻译输出，并接收来自表单和按钮的消息。'
    },
    deck: {
      en: 'A selection bar with a JavaScript extension ecosystem, interactive result windows, global shortcut, app and website rules, and a bar you can make your own.',
      zh: '划词操作栏，配 JavaScript 扩展生态、可交互结果窗口、全局快捷键、App/网站规则，以及可以按自己喜好调整的外观。'
    },
    features: [
      { title: { en: 'Immediate actions', zh: '即选即用' }, body: { en: 'Search, Cut, Copy, Paste, Open Link, Dictionary, Reveal in Finder, and spelling live in a small bar beside the selection.', zh: '搜索、剪切、复制、粘贴、打开链接、词典、在访达中显示和拼写检查都在选区旁的小栏里。' } },
      { title: { en: 'One JavaScript format', zh: '单一 JavaScript 格式' }, body: { en: 'A single .js action module contains definition and perform(). Static submenus, dynamic actions, ESM imports, and the usual browser APIs are supported.', zh: '一个 .js 文件同时包含 definition 和 perform()。支持静态子菜单、动态操作、ESM 导入和常用浏览器 API。' } },
      { title: { en: 'Interactive result windows', zh: '可交互结果窗口' }, body: { en: 'Show translation or AI output in an HTML window, stream updates with append(), and receive form or button messages back in the action.', zh: '在 HTML 窗口中显示翻译或 AI 输出，用 append() 流式更新，并把表单或按钮消息送回 action。' } },
      { title: { en: 'App and website rules', zh: 'App 与网站规则' }, body: { en: 'Exclude apps or domains where Bubble should stay quiet. The global shortcut still works when you need it.', zh: '排除不希望 Bubble 自动出现的 App 或域名；需要时全局快捷键仍然可用。' } },
      { title: { en: 'Extension trust', zh: '扩展信任' }, body: { en: 'Installed extensions are fingerprinted, changed packages are blocked until reviewed, and permissions are enforced by the runtime.', zh: '已安装扩展会记录指纹，改动后的包在确认前会被阻止，权限由运行时强制执行。' } },
      { title: { en: 'Local by default', zh: '本地优先' }, body: { en: 'Extensions, settings, and action history stay on your Mac. No account and no subscription.', zh: '扩展、设置和操作记录都保存在本机。无需账号、不订阅。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 12+\nUniversal', zh: 'macOS 12+\nUniversal' } },
      { label: { en: 'License', zh: '授权' }, value: { en: 'From $4.99\nLifetime license', zh: 'US$4.99 起\n买断授权' } },
      { label: { en: 'Updates', zh: '更新' }, value: { en: 'Sparkle\nSelf-updating', zh: 'Sparkle\n自动更新' } }
    ],
    tags: [{ en: 'Selection bar', zh: '划词操作栏' }, { en: 'JavaScript extensions', zh: 'JavaScript 扩展' }, { en: 'Result windows', zh: '结果窗口' }],
    icon: '/assets/bubble-icon.png',
    accent: '#5f6dff',
    accentSoft: '#e8eaff',
    appcast: '/apps/bubble/appcast.xml',
    buy: '/apps/bubble/buy/'
  },  {
    slug: 'crate',
    index: '06',
    name: 'Crate',
    category: { en: 'Disk image builder', zh: '磁盘映像工具' },
    platform: 'macOS 12+',
    tagline: { en: 'Turn anything into a polished disk image.', zh: '把任何东西做成一张漂亮的磁盘映像。' },
    description: {
      en: 'Crate turns apps, folders, and files into polished disk images. Drop something into the crate, pick a preset, and Crate handles the Finder layout, background, Applications shortcut, license agreement, encryption, signing, and checksum.',
      zh: 'Crate 把应用、文件夹和文件做成精致的 DMG。拖进 Crate，选一个预设，窗口布局、背景、Applications 快捷方式、许可协议、加密、签名和校验和都会自动完成。'
    },
    deck: {
      en: 'A native DMG builder for the Mac — Finder layouts, Retina backgrounds, licenses, encryption, signing, and verification.',
      zh: '为 Mac 打造的原生 DMG 工具——Finder 布局、Retina 背景、许可协议、加密、签名和校验。'
    },
    features: [
      { title: { en: 'Drop and build', zh: '拖入即构建' }, body: { en: 'Drop in an app, folder, file, archive, or existing disk image. Queue several items and build them in order.', zh: '拖入应用、文件夹、文件、压缩包或现有磁盘映像，可排队依次构建。' } },
      { title: { en: 'Finder layouts', zh: 'Finder 布局' }, body: { en: 'Set window size, icon and label size, background picture, and exact icon positions. Crate applies the layout through Finder.', zh: '设置窗口大小、图标与标签尺寸、背景图以及精确的图标位置，由 Finder 应用布局。' } },
      { title: { en: 'Installer or archive', zh: '安装包或归档' }, body: { en: 'Apps get an Applications symlink and installer layout; folders use an adaptive grid; files are packed as single items.', zh: '应用自动加入 Applications 快捷方式和安装布局；文件夹使用自适应网格；单个文件直接打包。' } },
      { title: { en: 'Presets and options', zh: '预设与选项' }, body: { en: 'Format, compression, HFS+ or APFS, naming, layout, license, encryption, signing, and verification can be saved as presets.', zh: '格式、压缩、HFS+/APFS、命名、布局、许可、加密、签名和校验都可以保存为预设。' } },
      { title: { en: 'License agreements', zh: '许可协议' }, body: { en: 'Embed a plain-text agreement in the image. macOS shows the Agree / Disagree dialog before mounting.', zh: '在映像中嵌入纯文本许可协议，macOS 挂载前会显示同意/不同意对话框。' } },
      { title: { en: 'Native and local', zh: '原生且本地' }, body: { en: 'Built with Swift and AppKit. No account, no cloud upload, and no source files leave your Mac.', zh: 'Swift + AppKit 原生实现。无需账号、不上传云端，源文件不会离开本机。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 12+\nApple silicon and Intel', zh: 'macOS 12+\nApple 芯片和 Intel' } },
      { label: { en: 'License', zh: '授权' }, value: { en: 'From $4.99\nLifetime license', zh: 'US$4.99 起\n买断授权' } },
      { label: { en: 'Privacy', zh: '隐私' }, value: { en: 'Local builds\nNo account', zh: '本地构建\n无需账号' } }
    ],
    tags: [{ en: 'DMG builder', zh: 'DMG 构建' }, { en: 'Finder layouts', zh: 'Finder 布局' }, { en: 'Signing', zh: '签名' }],
    icon: '/assets/crate-icon.png',
    accent: '#b47a4f',
    accentSoft: '#f5e9dd',
    buy: '/apps/crate/buy/'
  },
  {
    slug: 'clippet',
    index: '07',
    name: 'Clippet',
    category: { en: 'Clipboard manager', zh: '剪贴板管理' },
    platform: 'macOS 14+',
    tagline: { en: 'Copy once. Find it forever.', zh: '复制过的，都找得回来。' },
    description: {
      en: 'Clippet keeps a searchable history of everything you copy — text, links, images, files, colors, and rich text — in a keyboard-first panel that docks to any screen edge. Search by type, source, or the text inside an image; pin the clips you reuse on boards, queue several items into a paste stack, and annotate a screenshot before it goes out.',
      zh: 'Clippet 把复制过的文字、链接、图片、文件、颜色和富文本收进一个可搜索的历史面板，吸附在屏幕任意边缘，键盘优先操作。可以按类型、来源或图片里的文字搜索，把常用内容钉在图板上，把多条内容排进 Paste Stack，发出图片前还能直接标注。'
    },
    deck: {
      en: 'A local-first clipboard history with OCR search, pinboards, a paste stack, and image annotation — all behind one shortcut.',
      zh: '本地优先的剪贴板历史：OCR 搜索、图板、Paste Stack 和图片标注，都在一个快捷键后面。'
    },
    features: [
      { title: { en: 'Every copy, kept', zh: '复制过的，都留着' }, body: { en: 'Text, links, images, files, colors, and rich text land in one history. Full-text search and OCR find a clip even when the words were only inside a screenshot.', zh: '文字、链接、图片、文件、颜色和富文本都收在同一份历史里。全文搜索和 OCR 连截图里的字也能找到。' } },
      { title: { en: 'Pinboards', zh: '图板' }, body: { en: 'Pin the links, snippets, and images you reuse onto boards, then jump back to them without searching again. Lock the ones that should not be seen.', zh: '把反复用到的链接、片段和图片钉在图板上，下次直接打开，不用重新搜索。不该被看到的内容可以锁定。' } },
      { title: { en: 'Paste Stack', zh: 'Paste Stack' }, body: { en: 'Queue several clips and paste them one after another with a single shortcut — handy for forms, checklists, and long replies.', zh: '把多条内容排进队列，用一个快捷键按顺序依次粘贴——填表单、对清单、写长回复都很顺手。' } },
      { title: { en: 'Quick paste', zh: '快速粘贴' }, body: { en: 'Press a number key to paste the matching clip, or open the panel from anywhere with the global shortcut. It docks to any edge of the screen.', zh: '按数字键直接粘贴对应的条目，或用全局快捷键在任何地方打开面板。面板可以吸附在屏幕四边。' } },
      { title: { en: 'Annotate first', zh: '先标注再发出' }, body: { en: 'Rotate, crop, draw arrows, highlight, add shapes, mosaic, or blur an image before it leaves your Mac.', zh: '图片发出之前，可以先旋转、裁剪、画箭头、高亮、加形状、打马赛克或高斯模糊。' } },
      { title: { en: 'Local by default', zh: '本地优先' }, body: { en: 'History lives in a local SQLite database. No account, no sync, no analytics; the optional MCP server only listens on 127.0.0.1.', zh: '历史保存在本机 SQLite 数据库里。无需账号、不同步、不做分析；可选的 MCP 服务只监听 127.0.0.1。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 14+\nUniversal', zh: 'macOS 14+\nUniversal' } },
      { label: { en: 'Availability', zh: '可用性' }, value: { en: 'In development\nPlanned for the Mac App Store', zh: '开发中\n计划上架 Mac App Store' } },
      { label: { en: 'Privacy', zh: '隐私' }, value: { en: 'Local SQLite\nNo account', zh: '本地 SQLite\n无需账号' } }
    ],
    tags: [{ en: 'Clipboard history', zh: '剪贴板历史' }, { en: 'OCR search', zh: 'OCR 搜索' }, { en: 'Paste stack', zh: '粘贴队列' }],
    icon: '/assets/clippet-icon.png',
    accent: '#ff8d28',
    accentSoft: '#fff0e0',
    status: 'in-development'
  },
  {
    slug: 'clutch',
    index: '08',
    name: 'Clutch',
    category: { en: 'Mouse gestures', zh: '鼠标手势' },
    platform: 'macOS 15+',
    tagline: { en: 'Your mouse, with a clutch.', zh: '给鼠标装一个离合器。' },
    description: {
      en: 'Clutch turns the way you already move into commands. Hold a mouse button and draw a stroke, rest the pointer in a screen corner, swipe the trackpad, or map a side button — each trigger can run a shortcut, open an app, type text, arrange a window, or fire a macOS Shortcut. Per-app overrides let one gesture mean something different in the app in front of you.',
      zh: 'Clutch 把你已经习惯的动作变成命令：按住鼠标键画一笔、把指针停在屏幕边角、在触控板上滑动，或按一下侧键，都能触发快捷键、打开 App、输入文字、排列窗口或运行「快捷指令」。按 App 覆盖让同一个手势在不同应用里做不同的事。'
    },
    deck: {
      en: 'Mouse strokes, hot zones, trackpad swipes, and a Finder menu — one native trigger layer for the actions you repeat.',
      zh: '鼠标手势、触发角、触控板滑动和 Finder 菜单——把重复操作收进一层原生触发器。'
    },
    features: [
      { title: { en: 'Draw a stroke', zh: '画一笔' }, body: { en: 'Hold the trigger button and draw. Clutch matches the shape and direction, ignores size and speed, and replays a plain click when you did not mean a gesture.', zh: '按住触发键画一笔。Clutch 识别形状和方向，不在乎大小与速度；如果只是普通点击，它会把点击原样还给应用。' } },
      { title: { en: 'Screen hot zones', zh: '屏幕热区' }, body: { en: 'Rest the pointer in a corner or at the middle of an edge. A dwell delay and cooldown keep it deliberate, and every zone can run any action.', zh: '把指针停在四个角或每条边的中间。停留时间和冷却时间让触发保持刻意，每个区域都能绑定任意动作。' } },
      { title: { en: 'Trackpad and buttons', zh: '触控板与按键' }, body: { en: 'Map three- or four-finger swipes, middle and side buttons, and a clutch modifier for fine scrolling or latching a drag.', zh: '映射三指或四指滑动、中键和侧键，还有一个离合器修饰键，用来精细滚动或锁住拖动。' } },
      { title: { en: 'Finder menu', zh: 'Finder 菜单' }, body: { en: 'Right-click in Finder to copy paths, names, or file URLs, send a selection to an app, open a terminal, or jump to a Quick Folder.', zh: '在 Finder 里右键，就能复制路径、文件名或文件 URL，把选中项发给某个 App，在终端打开，或跳到常用文件夹。' } },
      { title: { en: 'Per-app overrides', zh: '按 App 覆盖' }, body: { en: 'Give one app a different command for a gesture, or switch that trigger off while the app is frontmost. Everything else keeps inheriting the global setup.', zh: '可以为某个 App 的手势换一个命令，或在该 App 前置时关掉这个触发器。其余设置继续继承全局配置。' } },
      { title: { en: 'Local and reversible', zh: '本地且可迁移' }, body: { en: 'Export every gesture, zone, and mapping to JSON, restore it on another Mac, and keep the configuration on this machine. No account.', zh: '把手势、区域和映射全部导出成 JSON，在另一台 Mac 上恢复，配置始终留在本机。无需账号。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 15+', zh: 'macOS 15+' } },
      { label: { en: 'Availability', zh: '可用性' }, value: { en: 'In development\nDirect download', zh: '开发中\n直接下载' } },
      { label: { en: 'Permission', zh: '权限' }, value: { en: 'Accessibility\nNo account', zh: '辅助功能\n无需账号' } }
    ],
    tags: [{ en: 'Mouse gestures', zh: '鼠标手势' }, { en: 'Screen hot zones', zh: '屏幕热区' }, { en: 'Finder menu', zh: 'Finder 菜单' }],
    icon: '/assets/clutch-icon.png',
    accent: '#3b8cff',
    accentSoft: '#e7f1ff',
    status: 'in-development'
  },
  {
    slug: 'follow',
    index: '09',
    name: 'Follow',
    category: { en: 'Follower tracker', zh: '关注者追踪' },
    platform: 'iPhone · iOS 26+',
    tagline: { en: 'All your followers, in one calm place.', zh: '所有关注者，一处管理。' },
    description: {
      en: 'Follow keeps the numbers from every channel you care about in one quiet list. Add a site and a handle, and it brings back follower counts, daily history, and a total across everything — GitHub, YouTube, Instagram, TikTok, Twitch, Bluesky, Mastodon, and more. Categories, drag-to-reorder, widgets, and a private on-device store keep the overview yours.',
      zh: 'Follow 把你关心的每个频道的数据收进一份安静的列表。选一个站点、填一个账号，就能看到关注者数量、每日历史和全部频道的总数——GitHub、YouTube、Instagram、TikTok、Twitch、Bluesky、Mastodon 等等。分类、拖动排序、小组件和本机存储，让这份概览完全属于你。'
    },
    deck: {
      en: 'One list for every channel you publish on, with daily follower history, categories, widgets, and no account.',
      zh: '一份列表收好所有频道，带每日关注者历史、分类、小组件，不需要账号。'
    },
    features: [
      { title: { en: '18 sites, one list', zh: '18 个站点，一份列表' }, body: { en: 'Add a handle for GitHub, YouTube, Instagram, TikTok, Twitch, Bluesky, Mastodon, and more; Follow keeps the counts together.', zh: '为 GitHub、YouTube、Instagram、TikTok、Twitch、Bluesky、Mastodon 等站点添加账号，Follow 会把数字收在一起。' } },
      { title: { en: 'Daily history', zh: '每日历史' }, body: { en: 'See how each channel and the total moved over time, with a line or bar chart and a daily snapshot.', zh: '用折线图或柱状图查看每个频道和总数的变化，每天留下一份快照。' } },
      { title: { en: 'Categories and order', zh: '分类与排序' }, body: { en: 'Group channels into categories, drag them into the order you think in, and filter the list to one category.', zh: '把频道分进不同类别，按你的思路拖动排序，也可以只看某一个类别。' } },
      { title: { en: 'Widgets', zh: '小组件' }, body: { en: 'Keep the total on the Home Screen or Lock Screen with a widget that updates from the same on-device snapshot.', zh: '用小组件把总数放在主屏幕或锁屏上，数据来自同一份本机快照。' } },
      { title: { en: 'Private by design', zh: '隐私优先' }, body: { en: 'Channels, history, and login cookies stay on the device. There is no account and no server of ours in the middle.', zh: '频道、历史和登录 Cookie 都留在设备上。不需要账号，也没有我们的服务器夹在中间。' } },
      { title: { en: 'Pro when you need it', zh: '需要时再解锁 Pro' }, body: { en: 'The free list holds three channels. A one-time Pro purchase unlocks unlimited channels, categories, and reordering.', zh: '免费版可以放三个频道。一次买断 Pro 即可解锁无限频道、分类和排序。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'iPhone · iOS 26+', zh: 'iPhone · iOS 26+' } },
      { label: { en: 'Availability', zh: '可用性' }, value: { en: 'In development\nPlanned for the App Store', zh: '开发中\n计划上架 App Store' } },
      { label: { en: 'Privacy', zh: '隐私' }, value: { en: 'On-device\nNo account', zh: '本机存储\n无需账号' } }
    ],
    tags: [{ en: '18 sites', zh: '18 个站点' }, { en: 'Follower history', zh: '关注者历史' }, { en: 'Widgets', zh: '小组件' }],
    icon: '/assets/follow-icon.png',
    accent: '#0a84ff',
    accentSoft: '#e5f2ff',
    status: 'in-development'
  },
  {
    slug: 'gridly',
    index: '10',
    name: 'Gridly',
    category: { en: 'Window management', zh: '窗口管理' },
    platform: 'macOS 14+',
    tagline: { en: 'Every window, exactly where it belongs.', zh: '每个窗口，都在该在的位置。' },
    description: {
      en: 'Gridly is a grid-first window manager. Snap a window to a half, a third, a quarter, or any cell of a custom grid; press the same shortcut again to cycle through sizes; save a whole workspace and bring it back later. Shortcuts, drag-to-edge snapping, a layout palette, and multi-display recovery all share the same declarative grid model.',
      zh: 'Gridly 是一个网格优先的窗口管理器。把窗口吸附到一半、三分之一、四分之一，或自定义网格里的任意单元格；重复按同一个快捷键还能循环尺寸；把整套工作区保存下来，需要时再恢复。快捷键、拖到边缘吸附、布局面板和多显示器恢复，共用同一套声明式网格模型。'
    },
    deck: {
      en: '52 window actions, drag-to-edge snapping, saved workspaces, and a custom grid — without leaving the keyboard.',
      zh: '52 个窗口动作、拖拽吸附、工作区保存和自定义网格——手不用离开键盘。'
    },
    features: [
      { title: { en: '52 actions', zh: '52 个动作' }, body: { en: 'Halves, thirds, quarters, sixths, ninths, 2/3, maximize, center, restore, and move across displays — all from one grid model.', zh: '半屏、三分、四分、六分、九宫格、2/3、最大化、居中、恢复和跨显示器移动——都由同一套网格模型算出来。' } },
      { title: { en: 'Cycle and restore', zh: '循环与恢复' }, body: { en: 'Press the same half-screen shortcut again to cycle 1/2 → 1/3 → 2/3. Restore returns a window to the size it had before Gridly touched it.', zh: '重复按同一个半屏快捷键，会在 1/2 → 1/3 → 2/3 之间循环。Restore 会把窗口恢复到 Gridly 调整之前的大小。' } },
      { title: { en: 'Drag to snap', zh: '拖拽吸附' }, body: { en: 'Drag a window to an edge or corner for a preview, then let go. Multi-display edges, shared edges, and minimum window sizes are handled.', zh: '把窗口拖到边缘或角落，看到预览后松手即可。多显示器边缘、共享边和窗口最小尺寸都会处理。' } },
      { title: { en: 'Saved layouts', zh: '保存布局' }, body: { en: 'Save every window as a named workspace, bind a shortcut, import or export JSON, and apply a layout automatically for an app.', zh: '把所有窗口保存成命名工作区，绑定快捷键，导入或导出 JSON，还能按 App 自动应用布局。' } },
      { title: { en: 'Custom grids', zh: '自定义网格' }, body: { en: 'Draw any rectangle on a configurable 12×8 grid, name it, and trigger it from a shortcut, the menu bar, or a gridly:// URL.', zh: '在可配置的 12×8 网格上拖出任意矩形，命名保存，然后用快捷键、菜单栏或 gridly:// URL 触发。' } },
      { title: { en: 'Displays and automation', zh: '显示器与自动化' }, body: { en: 'Recover window positions after a display is reconnected, keep per-display profiles, and call Gridly from Raycast or Alfred through its URL scheme.', zh: '显示器重新连接后恢复窗口位置，保存每块屏幕的配置，也能通过 URL scheme 从 Raycast 或 Alfred 调用 Gridly。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 14+', zh: 'macOS 14+' } },
      { label: { en: 'Availability', zh: '可用性' }, value: { en: 'In development\nDirect download', zh: '开发中\n直接下载' } },
      { label: { en: 'Permission', zh: '权限' }, value: { en: 'Accessibility only\nNo screen recording', zh: '仅需辅助功能\n不录屏' } }
    ],
    tags: [{ en: '52 actions', zh: '52 个动作' }, { en: 'Saved layouts', zh: '保存布局' }, { en: 'Drag to snap', zh: '拖拽吸附' }],
    icon: '/assets/gridly-icon.png',
    accent: '#6d4aff',
    accentSoft: '#eee9ff',
    status: 'in-development'
  },
  {
    slug: 'tickly',
    index: '11',
    name: 'Tickly',
    category: { en: 'Keyboard sounds', zh: '按键音效' },
    platform: 'macOS 13+',
    tagline: { en: 'Every keystroke, with sound.', zh: '每一次击键，都有声音。' },
    description: {
      en: 'Tickly brings the feel of a mechanical keyboard to every app. It listens for key events, plays a sound for each press and release, and stays out of the way in the menu bar. Three built-in packs — mechanical, bubble, drums — plus custom profiles, per-key mapping, mouse clicks, scroll ticks, haptics, and spatial audio make the sound yours.',
      zh: 'Tickly 把机械键盘的手感带到每个 App。它监听按键事件，为每次按下和抬起播放声音，安安静静地待在菜单栏。机械键盘、气泡、架子鼓三套内置音效，加上自定义音色包、逐键映射、鼠标点击、滚轮滴答、触感反馈和空间音频，声音完全由你决定。'
    },
    deck: {
      en: 'Mechanical, bubble, or drum sounds for every key — with custom packs, per-key mapping, and spatial audio.',
      zh: '机械键盘、气泡或鼓点，为每次敲击配音——支持自定义音色包、逐键映射和空间音频。'
    },
    features: [
      { title: { en: 'Three sound packs', zh: '三套内置音效' }, body: { en: 'Mechanical, bubble, and drum kits ship with the app, each with press and release samples. Pick one and start typing.', zh: '机械键盘、气泡和架子鼓随 App 内置，每套都有按下与抬起的采样。选一套就能开始打字。' } },
      { title: { en: 'Make it yours', zh: '调成自己的声音' }, body: { en: 'Edit a profile per key, import or export a ZIP, and adjust pitch, volume, tone, and room reverb.', zh: '逐个键位编辑音色包，导入或导出 ZIP，调整音高、音量、均衡和房间混响。' } },
      { title: { en: 'More than keys', zh: '不只是按键' }, body: { en: 'Add mouse-click sounds, scroll ticks, and haptics; choose an output device and place sounds in space with HRTF.', zh: '还能加上鼠标点击、滚轮滴答和触感反馈；选择输出设备，用 HRTF 把声音放进空间里。' } },
      { title: { en: 'Per-app rules', zh: '按 App 静音' }, body: { en: 'Silence Tickly in chosen apps, or run it only in an exclusive list. Secure input, screen sharing, Focus, and meetings can mute it automatically.', zh: '可以在指定 App 里静音，或只在白名单里发声。安全输入、屏幕共享、专注模式和会议中还能自动静音。' } },
      { title: { en: 'Menu bar and shortcuts', zh: '菜单栏与快捷键' }, body: { en: 'Open the popover from the menu bar, record a global shortcut, and control Tickly from App Intents, AppleScript, tickly://, or Raycast.', zh: '从菜单栏打开浮窗，录制全局快捷键，也能用 App Intents、AppleScript、tickly:// 或 Raycast 控制。' } },
      { title: { en: 'Private by design', zh: '隐私优先' }, body: { en: 'Tickly reads key codes with a listen-only event tap. It does not record what you type, and the sound engine runs locally.', zh: 'Tickly 用只读事件监听读取按键码，不记录你输入的内容，音效引擎完全在本机运行。' } }
    ],
    specs: [
      { label: { en: 'Platform', zh: '平台' }, value: { en: 'macOS 13+', zh: 'macOS 13+' } },
      { label: { en: 'Availability', zh: '可用性' }, value: { en: 'In development\nDirect download', zh: '开发中\n直接下载' } },
      { label: { en: 'Privacy', zh: '隐私' }, value: { en: 'Read-only key events\nNo recording', zh: '只读按键事件\n不记录输入' } }
    ],
    tags: [{ en: '3 sound packs', zh: '3 套音效' }, { en: 'Per-key mapping', zh: '逐键映射' }, { en: 'Spatial audio', zh: '空间音频' }],
    icon: '/assets/tickly-icon.png',
    accent: '#0a9bff',
    accentSoft: '#e2f4ff',
    status: 'in-development'
  }

];

export const appBySlug = Object.fromEntries(apps.map((app) => [app.slug, app]));
