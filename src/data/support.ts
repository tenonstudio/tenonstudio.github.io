import type { App, Localized } from './apps';

export type SupportTopic = {
  question: Localized;
  answer: Localized;
};

export type SupportProfile = {
  topics: SupportTopic[];
  permission: Localized;
  updates: Localized;
  data: Localized;
};

const profiles: Record<string, SupportProfile> = {
  flip: {
    topics: [
      {
        question: { en: 'A control does nothing', zh: '某个控制项没有反应' },
        answer: {
          en: 'Some controls use the separate Flip System Helper or a macOS permission. Open Flip → Settings → System Helper and follow the prompt. Bluetooth, automation, and location are only requested when you use a control that needs them.',
          zh: '部分控制项需要独立的 Flip System Helper 或 macOS 权限。打开 Flip → 设置 → System Helper，按提示操作。蓝牙、自动化和位置只会在你使用相关控制项时请求。'
        }
      },
      {
        question: { en: 'My custom command is missing', zh: '自定义命令不见了' },
        answer: {
          en: 'Check that the command is enabled in Settings → Custom. Custom commands are plain scripts stored in ~/.config/flip/commands. Flip passes FLIP_ACTION, FLIP_CHOICE, FLIP_STATE_DIR, and FLIP_COMMAND_ID to the script.',
          zh: '检查「设置 → 自定义」里命令是否启用。自定义命令是普通脚本，保存在 ~/.config/flip/commands；Flip 会向脚本传入 FLIP_ACTION、FLIP_CHOICE、FLIP_STATE_DIR 和 FLIP_COMMAND_ID。'
        }
      },
      {
        question: { en: 'How do I add a command?', zh: '怎么添加命令？' },
        answer: {
          en: 'Create one in Settings → Custom, choose a type (action, toggle, or choice), then edit the script. The editor shows the environment variables passed to the command.',
          zh: '在「设置 → 自定义」中新建，选择类型（一次性动作、开关或选项），再编辑脚本。编辑器会显示传给命令的环境变量。'
        }
      }
    ],
    permission: {
      en: 'System Helper handles privileged controls. Automation, Bluetooth, and location prompts appear only when a command needs them.',
      zh: '特权控制由 System Helper 处理。自动化、蓝牙和位置权限只会在命令需要时出现。'
    },
    updates: {
      en: 'Flip updates through Sparkle. The app includes a 14-day trial; a lifetime license is available from the Flip buy page and is activated in the License section.',
      zh: 'Flip 通过 Sparkle 更新。App 包含 14 天试用；可在 Flip 购买页获取终身授权，并在「许可证」区域激活。'
    },
    data: {
      en: 'Settings and custom commands stay on your Mac. No account is required.',
      zh: '设置和自定义命令都保存在本机，无需账号。'
    }
  },
  porthole: {
    topics: [
      {
        question: { en: 'The mirror is black', zh: '镜像窗口是黑的' },
        answer: {
          en: 'Porthole needs Screen Recording access. Enable it in System Settings → Privacy & Security → Screen Recording, then reopen Porthole. Windows that use protected content may stay black by design.',
          zh: 'Porthole 需要「屏幕录制」权限。在系统设置 → 隐私与安全性 → 屏幕录制中启用，然后重新打开 Porthole。使用受保护内容的窗口可能按系统限制保持黑色。'
        }
      },
      {
        question: { en: 'Clicks do not pass through', zh: '点击不能穿透' },
        answer: {
          en: 'Turn on click-through for the mirror and lower its opacity if needed. Click-through is a per-mirror setting so you can keep controls on the mirrors that need them.',
          zh: '为镜像打开「点击穿透」，必要时降低透明度。点击穿透是每个镜像独立设置，方便需要操作的镜像保留点击。'
        }
      },
      {
        question: { en: 'Can I mirror a web page?', zh: '可以镜像网页吗？' },
        answer: {
          en: 'Porthole mirrors any window on your Mac, including a browser window. If you want a page without the browser chrome, the Porthole for Chrome extension opens a dedicated window that Porthole can mirror.',
          zh: 'Porthole 可以镜像 Mac 上的任意窗口，包括浏览器窗口。如果不想带上浏览器工具栏，可以使用 Porthole for Chrome 扩展打开独立窗口，再让 Porthole 镜像它。'
        }
      }
    ],
    permission: {
      en: 'Screen Recording is required to read the window you choose. Frames are processed locally and are never uploaded.',
      zh: '读取你选择的窗口需要「屏幕录制」权限。画面只在本机处理，不会上传。'
    },
    updates: {
      en: 'Porthole updates through Sparkle. The app includes a 14-day trial; a lifetime license is available from the Porthole buy page and is activated in the License section.',
      zh: 'Porthole 通过 Sparkle 更新。App 包含 14 天试用；可在 Porthole 购买页获取终身授权，并在「许可证」区域激活。'
    },
    data: {
      en: 'Mirrors and preferences stay on your Mac. Captured frames are not stored or uploaded.',
      zh: '镜像和偏好设置保存在本机。捕获的画面不会被存储或上传。'
    }
  },
  tessera: {
    topics: [
      {
        question: { en: 'The wallpaper is black', zh: '壁纸是黑的' },
        answer: {
          en: 'Open the menu bar item and reload the wallpaper. If the sketch has a JavaScript error, Tessera keeps the desktop blank; open the sketch source and check the console output in the editor.',
          zh: '从菜单栏重新载入壁纸。如果草图有 JavaScript 错误，Tessera 会保持桌面空白；打开草图源码，在编辑器中查看控制台输出。'
        }
      },
      {
        question: { en: 'How do I edit a wallpaper?', zh: '怎么编辑壁纸？' },
        answer: {
          en: 'Each built-in theme is a p5.js sketch. Open the Wallpaper Script project, edit the source, save, then reload from the Tessera menu.',
          zh: '每个内置主题都是一段 p5.js 草图。打开 Wallpaper Script 项目，修改源码并保存，然后从 Tessera 菜单重新载入。'
        }
      },
      {
        question: { en: 'Does it work on multiple displays?', zh: '支持多显示器吗？' },
        answer: {
          en: 'Yes. The wallpaper covers every connected display and rebuilds when the display layout changes.',
          zh: '支持。壁纸会覆盖所有已连接的显示器，并在显示器布局变化时重建。'
        }
      }
    ],
    permission: {
      en: 'No special permission is normally required. A wallpaper script can access the network only when its manifest declares that capability.',
      zh: '通常不需要特殊权限。只有壁纸脚本在 manifest 中声明网络能力时，才可能访问网络。'
    },
    updates: {
      en: 'Tessera updates through Sparkle. The app includes a 14-day trial; a lifetime license is available from the Tessera buy page.',
      zh: 'Tessera 通过 Sparkle 更新。App 包含 14 天试用；可在 Tessera 购买页获取终身授权。'
    },
    data: {
      en: 'Themes, scripts, and settings stay on your Mac. No account is required.',
      zh: '主题、脚本和设置都保存在本机，无需账号。'
    }
  },
  launchpad: {
    topics: [
      {
        question: { en: 'The shortcut does not open Launchpad', zh: '快捷键打不开启动台' },
        answer: {
          en: 'Check the shortcut in Settings → General, and make sure it is not used by another app. If you use the optional global pinch gesture, grant Accessibility access in System Settings → Privacy & Security.',
          zh: '在「设置 → 通用」中检查快捷键，确认没有被其他 App 占用。如果使用可选的全局捏合手势，需要在系统设置 → 隐私与安全性中授予辅助功能权限。'
        }
      },
      {
        question: { en: 'An app is missing from the grid', zh: '网格里少了一个 App' },
        answer: {
          en: 'Launchpad reads the applications installed on your Mac. Search for the app first; if you hid it, show hidden apps in Settings → Applications. Apps in non-standard folders may not be indexed.',
          zh: 'Launchpad 会读取本机安装的应用。先搜索一下；如果被隐藏了，可在「设置 → 应用」中显示隐藏的应用。放在非标准目录中的 App 可能不会被索引。'
        }
      },
      {
        question: { en: 'How do I reset the layout?', zh: '怎么重置布局？' },
        answer: {
          en: 'Open Settings → Applications and choose Reset Layout. This restores the default order and folders. You can also reset from the launcher menu.',
          zh: '打开「设置 → 应用」，选择「重置布局」。这会恢复默认顺序和文件夹，也可以从启动台菜单中重置。'
        }
      }
    ],
    permission: {
      en: 'Accessibility is only needed for the optional global pinch gesture. Shortcuts, hot corners, the Dock, and the menu bar do not require it.',
      zh: '只有可选的全局捏合手势需要辅助功能权限。快捷键、触发角、Dock 和菜单栏都不需要。'
    },
    updates: {
      en: 'Launchpad updates through Sparkle. The app includes a 14-day trial; a lifetime license is available from the Launchpad buy page.',
      zh: 'Launchpad 通过 Sparkle 更新。App 包含 14 天试用；可在 Launchpad 购买页获取终身授权。'
    },
    data: {
      en: 'Pages, folders, and hidden apps are stored on your Mac. No account is required.',
      zh: '分页、文件夹和隐藏应用都保存在本机，无需账号。'
    }
  },
  bubble: {
    topics: [
      {
        question: { en: 'The selection bar does not appear', zh: '划词操作栏不出现' },
        answer: {
          en: 'Grant Accessibility access in System Settings → Privacy & Security, then reopen Bubble. Also check the app or website exclusion rules; the global shortcut still opens the bar when automatic display is disabled.',
          zh: '在系统设置 → 隐私与安全性中授予辅助功能权限，然后重新打开 Bubble。也请检查 App 或网站排除规则；即使关闭自动显示，全局快捷键仍然可以打开操作栏。'
        }
      },
      {
        question: { en: 'An extension stopped working', zh: '扩展突然不能用了' },
        answer: {
          en: 'Bubble fingerprints installed extensions. If an extension package changed, review and approve it again in Settings. If it still fails, check the action log for the error returned by the script.',
          zh: 'Bubble 会记录已安装扩展的指纹。如果扩展包发生变化，需要在设置中重新确认。如果仍然失败，请查看操作日志中脚本返回的错误。'
        }
      },
      {
        question: { en: 'How do I write an action?', zh: '怎么编写操作？' },
        answer: {
          en: 'An action is a single .js module with a definition and a perform() function. It can show result windows, stream output, and receive messages from forms and buttons. Start from Settings → Extensions and duplicate an example.',
          zh: '一个操作就是一个 .js 模块，包含 definition 和 perform()。它可以显示结果窗口、流式输出，并接收表单和按钮消息。可以在「设置 → 扩展」中复制一个示例开始。'
        }
      }
    ],
    permission: {
      en: 'Accessibility is required to read the selection and place the bar. Extensions run with the permissions they request when you run them.',
      zh: '读取选区并放置操作栏需要辅助功能权限。扩展运行时使用其声明的权限。'
    },
    updates: {
      en: 'Bubble updates through Sparkle. The app includes a 14-day trial; a lifetime license is available from the Bubble buy page.',
      zh: 'Bubble 通过 Sparkle 更新。App 包含 14 天试用；可在 Bubble 购买页获取终身授权。'
    },
    data: {
      en: 'Extensions, settings, and action history stay on your Mac. No account is required.',
      zh: '扩展、设置和操作记录都保存在本机，无需账号。'
    }
  },
  crate: {
    topics: [
      {
        question: { en: 'The build fails', zh: '构建失败' },
        answer: {
          en: 'Check that the source still exists, the output folder is writable, and there is enough free disk space. Try a small folder first; if signing is enabled, make sure the selected identity is available in your keychain.',
          zh: '检查源文件是否还在、输出目录是否可写，以及磁盘空间是否充足。先用一个小文件夹试一下；如果启用了签名，确认所选身份在钥匙串中可用。'
        }
      },
      {
        question: { en: 'The window layout looks wrong', zh: '打开的窗口布局不对' },
        answer: {
          en: 'Crate applies the Finder layout through Finder. Make sure Finder is running, eject and remount the image, or rebuild it. Finder can ignore saved positions if the desktop is busy with another disk image operation.',
          zh: 'Crate 会通过 Finder 应用窗口布局。确认 Finder 正在运行，弹出并重新挂载映像，或重新构建。如果桌面正在处理其他磁盘映像操作，Finder 可能忽略保存的位置。'
        }
      },
      {
        question: { en: 'Can I code-sign the image?', zh: '可以给映像签名吗？' },
        answer: {
          en: 'Yes. Choose a signing identity in the build options, or use the default ad-hoc signature. For distribution, use a Developer ID identity and verify the result with codesign and spctl.',
          zh: '可以。在构建选项中选择签名身份，或使用默认的 ad-hoc 签名。对外分发时请使用 Developer ID 身份，并用 codesign 和 spctl 验证结果。'
        }
      }
    ],
    permission: {
      en: 'Crate reads the files and folders you choose and writes the image to the output you select. It does not record your screen or upload your files.',
      zh: 'Crate 只读取你选择的文件和文件夹，并写入你指定的输出位置。它不会录屏，也不会上传你的文件。'
    },
    updates: {
      en: 'Crate is a one-time purchase. Keep the license key from your purchase email; it is also shown on the checkout success page.',
      zh: 'Crate 为一次买断。请保存购买邮件中的许可证密钥；结账成功页也会显示。'
    },
    data: {
      en: 'Presets and build settings stay on your Mac. Source files and finished images remain wherever you chose to save them.',
      zh: '预设和构建设置保存在本机。源文件与完成的映像保留在你选择的位置。'
    }
  },
  clippet: {
    topics: [
      {
        question: { en: 'Nothing new appears in history', zh: '历史里没有新内容' },
        answer: {
          en: 'Clippet needs clipboard access on macOS 15.4 and later. Open System Settings → Privacy & Security → Clipboard and enable Clippet, then relaunch the app. Some apps mark their copies as transient or secret and Clippet will skip those by design.',
          zh: 'Clippet 在 macOS 15.4 及更高版本上需要剪贴板访问权限。打开系统设置 → 隐私与安全性 → 剪贴板，启用 Clippet，然后重新启动 App。部分 App 会把复制内容标记为临时或机密，Clippet 会按设计跳过。'
        }
      },
      {
        question: { en: 'OCR does not find text in an image', zh: 'OCR 找不到图片里的文字' },
        answer: {
          en: 'OCR runs on-device and needs the image to finish processing. Wait a moment and search again, or open the image and use the OCR result directly. Very small or low-contrast text may not be recognized.',
          zh: 'OCR 在本机运行，需要等图片处理完成。稍等片刻再搜索，或打开图片直接查看 OCR 结果。过小或对比度太低的文字可能无法识别。'
        }
      },
      {
        question: { en: 'The paste shortcut does not work', zh: '粘贴快捷键没有反应' },
        answer: {
          en: 'The default shortcut is ⌃⌘V. Check for a conflict in Settings → Shortcuts, and grant Accessibility access if you use automatic paste. Quick-paste number keys work from the open panel.',
          zh: '默认快捷键是 ⌃⌘V。在「设置 → 快捷键」中检查冲突；如果使用自动粘贴，需要授予辅助功能权限。面板打开时，数字键可以快速粘贴。'
        }
      }
    ],
    permission: {
      en: 'Clipboard access is required to capture copies. Accessibility is optional and only used for automatic paste. OCR, search, and storage run locally.',
      zh: '捕获复制内容需要剪贴板权限。辅助功能权限是可选的，仅用于自动粘贴。OCR、搜索和存储都在本机完成。'
    },
    updates: {
      en: 'The App Store build updates through the Mac App Store. The 14-day trial and one-time purchase use StoreKit; use Restore Purchases in the paywall after reinstalling.',
      zh: 'App Store 版本通过 Mac App Store 更新。14 天试用和一次买断由 StoreKit 处理；重新安装后可在付费墙中使用「恢复购买」。'
    },
    data: {
      en: 'History is stored in a local SQLite database. The optional MCP server is off by default and only listens on 127.0.0.1. No account or cloud sync is used.',
      zh: '历史保存在本机 SQLite 数据库。可选的 MCP 服务默认关闭，只监听 127.0.0.1。不需要账号，也不同步到云端。'
    }
  },
  clutch: {
    topics: [
      {
        question: { en: 'A gesture does not trigger', zh: '手势没有触发' },
        answer: {
          en: 'Check that Clutch is listening in the menu bar and that Accessibility access is granted. Hold the trigger button while drawing; a plain click is replayed to the app. Also check App Overrides for the frontmost app.',
          zh: '确认菜单栏中的 Clutch 正在监听，并且已授予辅助功能权限。画手势时要按住触发键；普通点击会原样传给应用。也请检查当前 App 的覆盖设置。'
        }
      },
      {
        question: { en: 'Right-click opens a menu instead of drawing', zh: '右键弹出菜单，而不是画手势' },
        answer: {
          en: 'That is intentional. A plain right-click is passed through immediately so context menus keep working. If gestures use the right button, configure a modifier or use a middle or side button as the trigger.',
          zh: '这是有意的设计。普通右键会立即传给系统，保证右键菜单正常。如果手势使用右键，可以配置一个修饰键，或改用中键/侧键作为触发键。'
        }
      },
      {
        question: { en: 'The Finder menu is missing', zh: 'Finder 菜单不见了' },
        answer: {
          en: 'Open System Settings → General → Login Items & Extensions → Finder and enable Clutch. The app must be running for the menu to work. If the menu still does not appear, relaunch Finder.',
          zh: '打开系统设置 → 通用 → 登录项与扩展 → Finder，启用 Clutch。App 需要保持运行，菜单才可用。如果仍然不出现，请重新启动 Finder。'
        }
      }
    ],
    permission: {
      en: 'Accessibility is required to observe mouse buttons, draw gestures, move windows, and send shortcuts. Gesture templates are only the strokes you choose to save.',
      zh: '监听鼠标按键、绘制手势、移动窗口和发送快捷键需要辅助功能权限。手势模板只包含你主动保存的笔画。'
    },
    updates: {
      en: 'Clutch updates through Sparkle. The app includes a 14-day trial; a lifetime license is available from the Clutch buy page and is activated in Settings → License.',
      zh: 'Clutch 通过 Sparkle 更新。App 包含 14 天试用；可在 Clutch 购买页获取终身授权，并在「设置 → 许可证」中激活。'
    },
    data: {
      en: 'Configuration lives in the app container; license state is kept in the Keychain. Export your gestures, zones, and mappings as JSON for backup.',
      zh: '配置保存在 App 容器中，授权状态保存在钥匙串。可以把手势、区域和映射导出为 JSON 备份。'
    }
  },
  follow: {
    topics: [
      {
        question: { en: 'A channel shows an error', zh: '某个频道显示错误' },
        answer: {
          en: 'The site may have changed its page, made the profile private, or rate-limited requests. Check the handle, wait a moment, and refresh. Some sites need you to sign in before their follower count is visible.',
          zh: '网站可能改版、把主页设为私密，或限制了请求频率。检查账号、稍等片刻再刷新。部分网站需要登录后才能看到关注者数量。'
        }
      },
      {
        question: { en: 'The follower count did not update', zh: '关注者数量没有更新' },
        answer: {
          en: 'Follow refreshes on the schedule in Settings → Update frequency. Some sites cache counts for a while, so the number can lag behind the website. Pull to refresh to check immediately.',
          zh: 'Follow 会按「设置 → 更新频率」中的计划刷新。部分网站会缓存关注者数量，所以数字可能比网页慢一些。下拉刷新可以立即检查。'
        }
      },
      {
        question: { en: 'My Pro purchase did not unlock', zh: 'Pro 购买没有解锁' },
        answer: {
          en: 'Open Settings → Upgrades → Restore purchases. If it still does not unlock, make sure you are signed in with the same Apple Account used for the purchase.',
          zh: '打开「设置 → 升级 → 恢复购买」。如果仍未解锁，请确认登录的是购买时使用的同一个 Apple 账户。'
        }
      }
    ],
    permission: {
      en: 'Follow does not need special system permissions. It only requests the sites you add and stores their data on your iPhone.',
      zh: 'Follow 不需要特殊系统权限。它只访问你添加的网站，并把数据保存在你的 iPhone 上。'
    },
    updates: {
      en: 'Follow updates through the App Store. Pro is a one-time purchase handled by Apple and RevenueCat; use Restore purchases after reinstalling.',
      zh: 'Follow 通过 App Store 更新。Pro 为一次买断，由 Apple 与 RevenueCat 处理；重新安装后可使用「恢复购买」。'
    },
    data: {
      en: 'Channels, history, and login cookies stay on your device. There is no account and no Tenon server in the middle.',
      zh: '频道、历史和登录 Cookie 都保存在你的设备上。不需要账号，也没有 Tenon 的服务器夹在中间。'
    }
  },
  gridly: {
    topics: [
      {
        question: { en: 'Shortcuts do not move windows', zh: '快捷键不能移动窗口' },
        answer: {
          en: 'Grant Accessibility access in System Settings → Privacy & Security → Accessibility, then reopen Gridly. Without it, Gridly can read the window list but cannot change window frames.',
          zh: '在系统设置 → 隐私与安全性 → 辅助功能中授予权限，然后重新打开 Gridly。没有该权限时，Gridly 能读取窗口列表，但不能修改窗口位置和大小。'
        }
      },
      {
        question: { en: 'Gridly fights macOS window tiling', zh: 'Gridly 和 macOS 自带的窗口平铺冲突' },
        answer: {
          en: 'Turn off the built-in window tiling in System Settings → Desktop & Dock → Windows, then try the shortcut again. Gridly detects the conflict and shows a warning in Settings.',
          zh: '在系统设置 → 桌面与程序坞 → 窗口中关闭系统自带的窗口平铺，然后重试快捷键。Gridly 会检测到这个冲突，并在设置中提示。'
        }
      },
      {
        question: { en: 'A saved layout did not launch my apps', zh: '保存的布局没有启动我的 App' },
        answer: {
          en: 'Layouts restore the position and size of windows that already exist. Gridly does not launch applications for you; open the apps first, then apply the layout.',
          zh: '布局只恢复已经存在的窗口的位置和大小。Gridly 不会替你启动 App；先打开应用，再应用布局。'
        }
      }
    ],
    permission: {
      en: 'Gridly only needs Accessibility to read and set other apps’ windows. It does not use Screen Recording or read window contents.',
      zh: 'Gridly 只需要辅助功能权限来读取和设置其他 App 的窗口。它不使用屏幕录制，也不读取窗口内容。'
    },
    updates: {
      en: 'Gridly is distributed directly. Updates use Sparkle; license details are available in the app’s Settings and About sections.',
      zh: 'Gridly 采用直接分发。更新使用 Sparkle；授权信息可在 App 的设置和「关于」中查看。'
    },
    data: {
      en: 'Layouts are stored in Application Support/Gridly/layouts.json. Window contents, screen recordings, and telemetry are never collected.',
      zh: '布局保存在 Application Support/Gridly/layouts.json。不会收集窗口内容、屏幕录制或遥测数据。'
    }
  },
  tickly: {
    topics: [
      {
        question: { en: 'There is no sound', zh: '没有声音' },
        answer: {
          en: 'Grant Input Monitoring in System Settings → Privacy & Security, then relaunch Tickly. Check that key sounds are enabled, the volume is up, the right output device is selected, and the frontmost app is not excluded by an app rule.',
          zh: '在系统设置 → 隐私与安全性中授予「输入监控」权限，然后重新启动 Tickly。检查按键音已启用、音量没有静音、输出设备正确，并且当前 App 没有被应用规则排除。'
        }
      },
      {
        question: { en: 'The sound is delayed', zh: '声音有延迟' },
        answer: {
          en: 'Bluetooth headphones add latency that Tickly cannot remove. Use a wired output or the built-in speakers for the tightest timing. Tickly shows a warning when it detects a Bluetooth output.',
          zh: '蓝牙耳机会带来 Tickly 无法消除的延迟。要获得最紧凑的节奏，请使用有线输出或内置扬声器。检测到蓝牙输出时，Tickly 会显示提示。'
        }
      },
      {
        question: { en: 'It is silent in password fields', zh: '在密码框里没有声音' },
        answer: {
          en: 'Tickly mutes itself during secure input by default. You can change that behavior in Settings → General. Per-app rules can also mute Tickly in specific apps.',
          zh: 'Tickly 默认在安全输入时自动静音。可以在「设置 → 通用」中修改；按 App 规则也可以在指定应用里静音。'
        }
      }
    ],
    permission: {
      en: 'Input Monitoring is required to hear key events from other apps. Tickly uses a listen-only event tap and does not record what you type.',
      zh: '监听其他 App 的按键需要「输入监控」权限。Tickly 使用只读事件监听，不记录你输入的内容。'
    },
    updates: {
      en: 'Tickly is in development and the direct build updates through Sparkle. The App Store build is planned without a self-updater; no purchase is required for the current build.',
      zh: 'Tickly 仍在开发中，直接分发的版本通过 Sparkle 更新。计划中的 App Store 版本不带自更新；当前版本无需购买。'
    },
    data: {
      en: 'Settings, custom sound packs, and local usage counts stay on your Mac. Key codes are used to choose a sound; key content is never stored or uploaded.',
      zh: '设置、自定义音色包和本地使用统计都保存在本机。按键码只用于选择音效，按键内容不会被存储或上传。'
    }
  }
};

const fallback: SupportProfile = {
  topics: [
    {
      question: { en: 'How do I get help?', zh: '如何获得帮助？' },
      answer: {
        en: 'Email us with your app version, system version, and the steps that led to the problem. A screenshot or short screen recording helps a lot.',
        zh: '请发邮件告诉我们 App 版本、系统版本和复现步骤。截图或简短录屏会很有帮助。'
      }
    }
  ],
  permission: {
    en: 'The app only asks for the permissions it needs. You can review them in System Settings → Privacy & Security.',
    zh: 'App 只会申请它需要的权限。可以在系统设置 → 隐私与安全性中查看。'
  },
  updates: {
    en: 'Updates are delivered through the channel used to install the app. Keep your purchase email if you bought a license.',
    zh: '更新通过安装 App 时使用的渠道提供。如果购买了授权，请保留购买邮件。'
  },
  data: {
    en: 'App data stays on your device. Contact us if you need help removing it.',
    zh: 'App 数据保存在你的设备上。如需帮助清除数据，请联系我们。'
  }
};

export function supportFor(app: App): SupportProfile {
  return profiles[app.slug] ?? fallback;
}
