import type { App, Localized } from './apps';
import { SITE } from './site';

export type LegalSection = {
  title: Localized;
  body: Localized;
};

export type LegalDocument = {
  title: Localized;
  lead: Localized;
  updated: Localized;
  sections: LegalSection[];
};

const updated = { en: 'Last updated: November 2026', zh: '最后更新：2026 年 11 月' };

type PrivacyProfile = {
  storage: Localized;
  content: Localized;
  network: Localized;
  purchases: Localized;
  choices: Localized;
};

const privacyDefaults: PrivacyProfile = {
  storage: {
    en: 'App settings and data are stored locally on your device. We do not provide accounts or cloud sync.',
    zh: 'App 设置和数据保存在你的设备上。我们不提供账号或云同步。'
  },
  content: {
    en: 'The app handles your content locally and does not upload it.',
    zh: 'App 在本机处理你的内容，不会上传。'
  },
  network: {
    en: 'The app does not upload your content.',
    zh: 'App 不会上传你的内容。'
  },
  purchases: {
    en: 'If you purchase a license, payment is handled by the provider shown at checkout.',
    zh: '如果你购买授权，支付由结账页所示的支付服务商处理。'
  },
  choices: {
    en: 'You can reset app data from the app or by removing it from your device.',
    zh: '你可以在 App 内重置数据，或从设备中移除 App 来删除数据。'
  }
};

const privacyProfiles: Record<string, Partial<PrivacyProfile>> = {
  flip: {
    storage: {
      en: 'Flip keeps its configuration, custom commands, and control state on your Mac.',
      zh: 'Flip 的配置、自定义命令和控制状态都保存在你的 Mac 上。'
    },
    content: {
      en: 'Flip operates system controls and runs the scripts you add. It does not record your screen, clipboard, or keystrokes.',
      zh: 'Flip 操作系统控制项并运行你添加的脚本。它不会录制屏幕、剪贴板或键盘输入。'
    },
    network: {
      en: 'Flip does not upload your content. Bluetooth, automation, and location controls access those system services only when you activate them. Sparkle checks for updates.',
      zh: 'Flip 不会上传你的内容。蓝牙、自动化和位置控制项只会在你主动启用时访问相应系统服务。Sparkle 用于检查更新。'
    },
    purchases: {
      en: 'Flip purchases and license activation are processed by Dodo Payments.',
      zh: 'Flip 的购买和授权激活由 Dodo Payments 处理。'
    },
    choices: {
      en: 'You can remove custom commands and reset settings in Flip. Deleting ~/.config/flip removes local commands and state. License deactivation is available in the License section.',
      zh: '你可以在 Flip 中删除自定义命令、重置设置。删除 ~/.config/flip 会移除本地命令和状态；可在「许可证」区域停用授权。'
    }
  },
  porthole: {
    storage: {
      en: 'Mirror layouts, appearance settings, and preferences are stored on your Mac.',
      zh: '镜像布局、外观设置和偏好设置保存在你的 Mac 上。'
    },
    content: {
      en: 'Porthole reads the window or screen region you choose and draws a local mirror. Captured frames are not saved or uploaded.',
      zh: 'Porthole 读取你选择的窗口或屏幕区域，并在本机绘制镜像。捕获的画面不会被保存或上传。'
    },
    network: {
      en: 'A mirrored web page or window may make network requests according to its own policy. Porthole itself does not upload captured frames. Sparkle checks for updates.',
      zh: '被镜像的网页或窗口可能按自身策略发起网络请求。Porthole 本身不会上传捕获的画面。Sparkle 用于检查更新。'
    },
    purchases: {
      en: 'Porthole purchases and license activation are processed by Dodo Payments.',
      zh: 'Porthole 的购买和授权激活由 Dodo Payments 处理。'
    },
    choices: {
      en: 'Remove mirrors and reset preferences in Porthole. Deleting the app removes its local settings.',
      zh: '你可以在 Porthole 中移除镜像、重置偏好设置。删除 App 会移除本地设置。'
    }
  },
  tessera: {
    storage: {
      en: 'Wallpaper choices, settings, and any scripts you import are stored on your Mac.',
      zh: '壁纸选择、设置和你导入的脚本保存在你的 Mac 上。'
    },
    content: {
      en: 'Tessera renders your wallpaper locally. It does not record your screen or upload your scripts.',
      zh: 'Tessera 在本机渲染壁纸，不会录屏，也不会上传你的脚本。'
    },
    network: {
      en: 'A wallpaper script can access the network only when its manifest declares that capability. Sparkle checks for updates.',
      zh: '只有壁纸脚本在 manifest 中声明网络能力时，才可能访问网络。Sparkle 用于检查更新。'
    },
    purchases: {
      en: 'Tessera purchases and license activation are processed by Dodo Payments.',
      zh: 'Tessera 的购买和授权激活由 Dodo Payments 处理。'
    },
    choices: {
      en: 'Remove imported scripts and reset settings in Tessera. Scripts remain in your local wallpaper folder until you delete them.',
      zh: '你可以在 Tessera 中移除导入的脚本、重置设置。脚本会一直保存在本地壁纸文件夹，直到你删除。'
    }
  },
  launchpad: {
    storage: {
      en: 'Pages, folders, hidden apps, and layout settings are stored on your Mac.',
      zh: '分页、文件夹、隐藏应用和布局设置保存在你的 Mac 上。'
    },
    content: {
      en: 'Launchpad reads the list of applications installed on your Mac. It does not read app contents or upload your layout.',
      zh: 'Launchpad 读取 Mac 上已安装的应用列表，不读取应用内容，也不上传布局。'
    },
    network: {
      en: 'Launchpad does not send analytics. Sparkle checks for updates; there is no Tenon account or sync service.',
      zh: 'Launchpad 不发送分析数据。Sparkle 用于检查更新；没有 Tenon 账号或同步服务。'
    },
    purchases: {
      en: 'Launchpad purchases and license activation are processed by Dodo Payments.',
      zh: 'Launchpad 的购买和授权激活由 Dodo Payments 处理。'
    },
    choices: {
      en: 'Reset the layout in Settings → Applications. Removing the app removes its local layout.',
      zh: '可在「设置 → 应用」中重置布局。删除 App 会移除本地布局。'
    }
  },
  bubble: {
    storage: {
      en: 'Extensions, settings, and action history are stored on your Mac.',
      zh: '扩展、设置和操作记录保存在你的 Mac 上。'
    },
    content: {
      en: 'Bubble processes the text you select locally. Extensions you run may show result windows or call the network according to their own code.',
      zh: 'Bubble 在本机处理你选中的文字。你运行的扩展可能按自身代码显示结果窗口或访问网络。'
    },
    network: {
      en: 'Bubble itself does not upload your selections. A JavaScript extension can access the network when you run it; review extensions before installing. Sparkle checks for updates.',
      zh: 'Bubble 本身不会上传你的选区。JavaScript 扩展在你运行时可以访问网络；安装前请检查扩展来源。Sparkle 用于检查更新。'
    },
    purchases: {
      en: 'Bubble purchases and license activation are processed by Dodo Payments.',
      zh: 'Bubble 的购买和授权激活由 Dodo Payments 处理。'
    },
    choices: {
      en: 'Remove extensions and clear action history in Bubble’s settings. Deleting the app removes its local data.',
      zh: '你可以在 Bubble 设置中移除扩展、清除操作记录。删除 App 会移除本地数据。'
    }
  },
  crate: {
    storage: {
      en: 'Presets, build options, and recent jobs are stored on your Mac.',
      zh: '预设、构建选项和最近任务保存在你的 Mac 上。'
    },
    content: {
      en: 'Crate reads the files you add and writes the disk image to the output you choose. Source files and images are not uploaded.',
      zh: 'Crate 读取你添加的文件，并把磁盘映像写入你指定的位置。源文件和映像不会被上传。'
    },
    network: {
      en: 'Crate does not upload your files or build output. It does not include analytics.',
      zh: 'Crate 不会上传你的文件或构建产物，也不包含分析工具。'
    },
    purchases: {
      en: 'Crate purchases and license activation are processed by Dodo Payments.',
      zh: 'Crate 的购买和授权激活由 Dodo Payments 处理。'
    },
    choices: {
      en: 'Delete presets and jobs in Crate. Output images remain where you saved them until you delete them.',
      zh: '你可以在 Crate 中删除预设和任务。输出的映像会保留在你保存的位置，直到你删除。'
    }
  },
  clippet: {
    storage: {
      en: 'Clipboard history is stored in a local SQLite database inside the app container. Settings, pinboards, and license state are stored locally.',
      zh: '剪贴板历史保存在 App 容器内的本地 SQLite 数据库。设置、图板和授权状态也保存在本机。'
    },
    content: {
      en: 'Text, images, links, files, and colors you copy are processed on your Mac. OCR and search run locally. The optional MCP server is off by default and listens only on 127.0.0.1.',
      zh: '你复制的文字、图片、链接、文件和颜色都在 Mac 上处理。OCR 和搜索在本机运行。可选的 MCP 服务默认关闭，只监听 127.0.0.1。'
    },
    network: {
      en: 'Clippet does not upload clipboard content. The Mac App Store handles updates and purchases; optional MCP clients connect over localhost only.',
      zh: 'Clippet 不会上传剪贴板内容。更新和购买由 Mac App Store 处理；可选的 MCP 客户端只通过 localhost 连接。'
    },
    purchases: {
      en: 'The App Store build uses Apple StoreKit for the 14-day trial and one-time purchase. Apple handles payment; we receive only the entitlement state.',
      zh: 'App Store 版本使用 Apple StoreKit 处理 14 天试用和一次买断。支付由 Apple 处理；我们只接收授权状态。'
    },
    choices: {
      en: 'Delete individual items, clear history, or reset the database in Clippet’s settings. Locked and ignored items follow your local settings.',
      zh: '你可以在 Clippet 设置中删除单条记录、清除历史或重置数据库。锁定项和忽略规则按本地设置生效。'
    }
  },
  clutch: {
    storage: {
      en: 'Gestures, hot zones, button mappings, and app overrides are stored in the app container. License state is kept in the Keychain.',
      zh: '手势、触发区、按键映射和按 App 覆盖设置保存在 App 容器中。授权状态保存在钥匙串。'
    },
    content: {
      en: 'Clutch records only the gesture strokes you choose to save. It does not record your screen, clipboard, or the text you type.',
      zh: 'Clutch 只保存你主动记录的手势笔画，不会录制屏幕、剪贴板或你输入的文本。'
    },
    network: {
      en: 'Sparkle checks for updates and Dodo handles license activation. Clutch does not upload your gestures or activity.',
      zh: 'Sparkle 用于检查更新，Dodo 用于授权激活。Clutch 不会上传你的手势或活动。'
    },
    purchases: {
      en: 'Clutch purchases and license activation are processed by Dodo Payments.',
      zh: 'Clutch 的购买和授权激活由 Dodo Payments 处理。'
    },
    choices: {
      en: 'Delete gestures and overrides in Clutch, or export/import the configuration as JSON. Removing the app removes its container data.',
      zh: '你可以在 Clutch 中删除手势和覆盖设置，或把配置导出/导入为 JSON。删除 App 会移除容器数据。'
    }
  },
  follow: {
    storage: {
      en: 'Channels, categories, follower history, and widget snapshots are stored in a local SwiftData store on your iPhone. Login cookies are stored in the device Keychain.',
      zh: '频道、分类、关注者历史和小组件快照保存在 iPhone 上的本地 SwiftData 存储中。登录 Cookie 保存在设备的钥匙串中。'
    },
    content: {
      en: 'Follow reads the public follower counts and profile information for the channels you add. It does not upload your contacts, photos, or other content.',
      zh: 'Follow 只读取你添加的频道公开的关注者数量和主页信息，不上传你的通讯录、照片或其他内容。'
    },
    network: {
      en: 'Follow requests the sites you add and uses Apple/RevenueCat for purchases. There is no Tenon account or Tenon server storing your channel data.',
      zh: 'Follow 会访问你添加的网站，并使用 Apple/RevenueCat 处理购买。没有 Tenon 账号或 Tenon 服务器存储你的频道数据。'
    },
    purchases: {
      en: 'Follow Pro is a one-time purchase processed by Apple and RevenueCat. Apple handles payment; RevenueCat validates the entitlement.',
      zh: 'Follow Pro 为一次买断，由 Apple 和 RevenueCat 处理。支付由 Apple 完成，RevenueCat 校验授权。'
    },
    choices: {
      en: 'Delete channels and categories in the app. Removing Follow deletes its local database; login cookies are kept in the device Keychain. Contact us if you need help removing them.',
      zh: '你可以在 App 中删除频道和分类。删除 Follow 会移除本地数据库，登录 Cookie 保留在设备钥匙串中。如需帮助清除，请联系我们。'
    }
  },
  gridly: {
    storage: {
      en: 'Preferences, custom grids, and saved layouts are stored in Application Support/Gridly/layouts.json.',
      zh: '偏好设置、自定义网格和保存的布局存放在 Application Support/Gridly/layouts.json。'
    },
    content: {
      en: 'Gridly reads window positions and sizes to move and resize them. It does not read window contents or record your screen.',
      zh: 'Gridly 读取窗口的位置和大小以移动、调整窗口，不读取窗口内容，也不录屏。'
    },
    network: {
      en: 'Gridly does not send analytics. Sparkle checks for updates; no window data is uploaded.',
      zh: 'Gridly 不发送分析数据。Sparkle 用于检查更新，不会上传窗口数据。'
    },
    purchases: {
      en: 'Gridly is distributed directly. If you obtained a license, it is handled by the provider shown at checkout.',
      zh: 'Gridly 采用直接分发。如果你获得了授权，授权由结账页所示的支付服务商处理。'
    },
    choices: {
      en: 'Delete saved layouts and custom grids in Gridly, or remove Application Support/Gridly.',
      zh: '你可以在 Gridly 中删除保存的布局和自定义网格，或移除 Application Support/Gridly。'
    }
  },
  tickly: {
    storage: {
      en: 'Settings, custom sound packs, and local usage counts are stored on your Mac.',
      zh: '设置、自定义音色包和本地使用统计保存在你的 Mac 上。'
    },
    content: {
      en: 'Tickly listens for key codes to choose a sound. It does not record what you type, and sound processing runs locally.',
      zh: 'Tickly 读取按键码以选择音效，不记录你输入的内容，音效处理在本机完成。'
    },
    network: {
      en: 'Tickly only contacts its update feed when you check for updates. It does not include analytics or upload your input.',
      zh: 'Tickly 只在你检查更新时访问更新源。它不包含分析工具，也不会上传你的输入。'
    },
    purchases: {
      en: 'Tickly is in development. No purchase is required for the current build; if a paid build is offered later, the checkout page will name the payment provider.',
      zh: 'Tickly 仍在开发中，当前版本无需购买。如果以后提供付费版本，结账页会注明支付服务商。'
    },
    choices: {
      en: 'Reset statistics and settings in Tickly, or remove custom sound packs from their local folder.',
      zh: '你可以在 Tickly 中重置统计和设置，或从本地文件夹删除自定义音色包。'
    }
  }
};

export function privacyFor(app: App): LegalDocument {
  const profile = { ...privacyDefaults, ...privacyProfiles[app.slug] };

  return {
    title: { en: 'Privacy Policy', zh: '隐私政策' },
    lead: {
      en: `${app.name} is designed to keep your data on your device.`,
      zh: `${app.name} 的设计目标是让你的数据留在这台设备上。`
    },
    updated,
    sections: [
      {
        title: { en: 'What the app stores', zh: 'App 存储的内容' },
        body: profile.storage
      },
      {
        title: { en: 'Your content', zh: '你的内容' },
        body: profile.content
      },
      {
        title: { en: 'Network access', zh: '网络访问' },
        body: profile.network
      },
      {
        title: { en: 'Purchases', zh: '购买' },
        body: profile.purchases
      },
      {
        title: { en: 'Analytics', zh: '分析数据' },
        body: {
          en: 'The app does not include third-party analytics or advertising SDKs. We do not sell personal data.',
          zh: 'App 不包含第三方分析或广告 SDK。我们不会出售个人数据。'
        }
      },
      {
        title: { en: 'Your choices', zh: '你的选择' },
        body: profile.choices
      },
      {
        title: { en: 'Contact', zh: '联系' },
        body: {
          en: `Questions about this policy can be emailed to ${SITE.email}.`,
          zh: `如对本政策有疑问，请发邮件至 ${SITE.email}。`
        }
      }
    ]
  };
}

export function termsFor(app: App): LegalDocument {
  return {
    title: { en: 'Terms of Use', zh: '使用条款' },
    lead: {
      en: `These terms cover your use of ${app.name}.`,
      zh: `这些条款适用于你对 ${app.name} 的使用。`
    },
    updated,
    sections: [
      {
        title: { en: 'License', zh: '授权' },
        body: {
          en: `A valid license grants a non-exclusive, non-transferable right to use ${app.name} on the number of Macs stated at purchase. The trial is provided for evaluation.`,
          zh: `有效授权授予你在购买时注明的 Mac 数量上使用 ${app.name} 的非独占、不可转让权利。试用版仅供评估。`
        }
      },
      {
        title: { en: 'Restrictions', zh: '限制' },
        body: {
          en: 'Do not redistribute, resell, or sublicense the app or license keys. Do not remove proprietary notices.',
          zh: '不得重新分发、转售或再授权 App 或 License Key，也不得移除所有权声明。'
        }
      },
      {
        title: { en: 'Third-party components', zh: '第三方组件' },
        body: {
          en: 'The app includes third-party open-source components. Their licenses and notices are provided with the app.',
          zh: 'App 包含第三方开源组件，其许可证和声明随 App 提供。'
        }
      },
      {
        title: { en: 'No warranty', zh: '免责声明' },
        body: {
          en: 'The app is provided “as is,” without warranties of merchantability, fitness for a particular purpose, or non-infringement, to the extent permitted by law.',
          zh: '在法律允许的范围内，App 按“现状”提供，不附带适销性、特定用途适用性或不侵权保证。'
        }
      },
      {
        title: { en: 'Changes', zh: '变更' },
        body: {
          en: 'We may update these terms as the app evolves. The current version is always published on this page.',
          zh: '随着 App 发展，我们可能更新这些条款。当前版本始终发布在本页。'
        }
      }
    ]
  };
}
