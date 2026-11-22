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
        title: { en: 'Scope', zh: '适用范围' },
        body: {
          en: 'This policy applies to the app, this website, and our support email. It does not cover third-party websites, apps, or services you open from the app; those are governed by their own policies.',
          zh: '本政策适用于 App、本网站以及我们的支持邮箱。它不覆盖你从 App 打开的第三方网站、应用或服务；这些由各自的政策约束。'
        }
      },
      {
        title: { en: 'Information we collect', zh: '我们收集的信息' },
        body: {
          en: 'We do not require an account and the app does not include third-party analytics or advertising SDKs. The app does not collect your name, email address, clipboard content, keystrokes, or files. If you email support, we receive your email address and the message you send. If you choose to share crash reports with Apple, Apple may make those reports available to us under its own policy.',
          zh: '我们不需要账号，App 也不包含第三方分析或广告 SDK。App 不会收集你的姓名、邮箱地址、剪贴板内容、按键输入或文件。如果你发邮件给支持，我们会收到你的邮箱地址和邮件内容。如果你选择向 Apple 共享崩溃报告，Apple 可能按其政策让我们看到这些报告。'
        }
      },
      {
        title: { en: 'Data stored on your device', zh: '保存在设备上的数据' },
        body: profile.storage
      },
      {
        title: { en: 'How your content is handled', zh: '你的内容如何处理' },
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
        title: { en: 'Sharing', zh: '共享' },
        body: {
          en: 'We do not sell personal data. Depending on the app and how you obtained it, we share data only with the providers involved: Apple for App Store distribution, StoreKit purchases, and crash reports you choose to share; Dodo Payments for license purchases; RevenueCat for Follow Pro; and update hosting for Sparkle. These providers process data under their own privacy policies and may process it in other countries. We may also disclose data when required by law.',
          zh: '我们不会出售个人数据。视 App 和获取渠道而定，我们只会与相关服务商共享数据：Apple（App Store 分发、StoreKit 购买，以及你选择共享的崩溃报告）、Dodo Payments（授权购买）、RevenueCat（Follow Pro）和 Sparkle 更新托管。这些服务商按各自隐私政策处理数据，可能在其它国家处理。法律要求时，我们也可能披露数据。'
        }
      },
      {
        title: { en: 'Retention and deletion', zh: '保留与删除' },
        body: {
          en: `${profile.choices.en} Support emails are kept only as long as needed to resolve the request. Purchase records are retained by the payment provider under its policy.`,
          zh: `${profile.choices.zh} 支持邮件只在处理请求所需的时间内保留。购买记录由支付服务商按其政策保留。`
        }
      },
      {
        title: { en: 'Security', zh: '安全' },
        body: {
          en: 'App data stays on your device and is protected by the device’s security. Protect your device with a passcode and keep your Apple ID secure. No method of storage or transmission is completely secure.',
          zh: 'App 数据保存在你的设备上，并由设备的安全机制保护。请使用密码保护设备，并妥善保管 Apple ID。没有任何存储或传输方式是绝对安全的。'
        }
      },
      {
        title: { en: 'Your rights', zh: '你的权利' },
        body: {
          en: 'Depending on where you live, you may have the right to access, correct, delete, or port your personal data, or to object to processing. Email us to exercise these rights. You may also contact your local data protection authority. For App Store purchases, Apple handles purchase data and refunds under its own policy.',
          zh: '根据你所在地区的法律，你可能有权访问、更正、删除或导出个人数据，或反对处理。请发邮件给我们行使这些权利。你也可以联系当地的数据保护机构。通过 App Store 购买的数据和退款由 Apple 按其政策处理。'
        }
      },
      {
        title: { en: 'Children', zh: '儿童' },
        body: {
          en: 'The apps are not directed to children under 13, or the minimum age required in your country. We do not knowingly collect personal data from children.',
          zh: '这些 App 不面向 13 岁以下（或你所在国家规定的最低年龄以下）的儿童。我们不会有意收集儿童的个人数据。'
        }
      },
      {
        title: { en: 'Changes', zh: '变更' },
        body: {
          en: 'We may update this policy as the apps evolve. The date at the top of this page will change, and material changes will be announced on this page or in the app.',
          zh: '随着 App 发展，我们可能更新本政策。页面顶部的日期会更新；重大变更会在本页或 App 内说明。'
        }
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
        title: { en: 'Agreement', zh: '协议' },
        body: {
          en: `These terms govern your use of ${app.name}. By installing or using the app, you agree to them. If you do not agree, do not install or use the app.`,
          zh: `这些条款适用于你对 ${app.name} 的使用。安装或使用 App 即表示你同意这些条款；如果不同意，请不要安装或使用。`
        }
      },
      {
        title: { en: 'License', zh: '授权' },
        body: {
          en: `We grant you a personal, limited, non-exclusive, non-transferable, revocable license to install and use ${app.name} on the devices covered by your purchase or license, for lawful purposes and in accordance with these terms.`,
          zh: `我们授予你一项个人、有限、非独占、不可转让且可撤销的授权，允许你在购买或授权所覆盖的设备上，为合法目的并按照这些条款安装和使用 ${app.name}。`
        }
      },
      {
        title: { en: 'Restrictions', zh: '限制' },
        body: {
          en: 'Do not reverse engineer, decompile, or disassemble the app except where the law permits it. Do not redistribute, rent, lend, sublicense, resell, or host the app. Do not modify it, create derivative works, remove proprietary notices, or use it for unlawful purposes.',
          zh: '除法律允许的情况外，不得对 App 进行逆向工程、反编译或反汇编。不得重新分发、出租、出借、再授权、转售或托管 App。不得修改 App、创建衍生作品、移除所有权声明，或将其用于非法目的。'
        }
      },
      {
        title: { en: 'Ownership', zh: '所有权' },
        body: {
          en: `Tenon Studio and its licensors own the app, its design, documentation, and trademarks. The app is licensed, not sold; these terms do not transfer ownership of any part of it.`,
          zh: `Tenon Studio 及其许可方拥有 App、其设计、文档和商标。App 是授权使用，而非出售；这些条款不转移 App 任何部分的所有权。`
        }
      },
      {
        title: { en: 'Privacy', zh: '隐私' },
        body: {
          en: 'Our Privacy Policy explains how the app handles data and forms part of these terms. Please read it together with these terms.',
          zh: '我们的隐私政策说明了 App 如何处理数据，并构成本条款的一部分。请与这些条款一起阅读。'
        }
      },
      {
        title: { en: 'Minors', zh: '未成年人' },
        body: {
          en: 'You must be old enough to enter into a contract in your country. If you are below the age of majority, use the app only with the consent of a parent or legal guardian.',
          zh: '你必须达到所在国家订立合同的年龄。如果尚未成年，请在父母或法定监护人同意的情况下使用 App。'
        }
      },
      {
        title: { en: 'Trials and purchases', zh: '试用与购买' },
        body: {
          en: 'Trials are provided for evaluation. Paid licenses are one-time unless stated otherwise at checkout. App Store purchases are processed by Apple; Dodo Payments purchases are processed by Dodo Payments. We do not receive or store your card details.',
          zh: '试用版仅供评估。除结账页另有说明外，付费授权为一次买断。App Store 购买由 Apple 处理；Dodo Payments 购买由 Dodo Payments 处理。我们不会接收或存储你的银行卡信息。'
        }
      },
      {
        title: { en: 'Refunds', zh: '退款' },
        body: {
          en: 'Refunds for App Store purchases are handled by Apple under its policy. For Dodo Payments purchases, refunds follow the terms shown at checkout, or contact us. Nothing in these terms limits rights you have under mandatory consumer law.',
          zh: 'App Store 购买的退款由 Apple 按其政策处理。Dodo Payments 购买的退款按结账页所示条款处理，也可以联系我们。这些条款不限制你依强制性消费者法律享有的权利。'
        }
      },
      {
        title: { en: 'Updates and availability', zh: '更新与可用性' },
        body: {
          en: 'We may provide updates, but we are not obligated to do so. Updates may change or remove features, and older versions may stop working with newer systems. Keep your own backups of important data.',
          zh: '我们可能提供更新，但没有义务这样做。更新可能改变或移除功能，旧版本可能无法在新系统上继续工作。请自行备份重要数据。'
        }
      },
      {
        title: { en: 'Third-party services and components', zh: '第三方服务与组件' },
        body: {
          en: 'The app may include open-source components, each governed by its own license. Links to third-party websites or services are governed by their own terms and privacy policies; we are not responsible for them.',
          zh: 'App 可能包含开源组件，各自受其许可证约束。第三方网站或服务的链接受其自身条款和隐私政策约束；我们不对它们负责。'
        }
      },
      {
        title: { en: 'Disclaimer', zh: '免责声明' },
        body: {
          en: 'The app is provided “as is” and “as available,” without warranties of merchantability, fitness for a particular purpose, or non-infringement, to the extent permitted by law. Some jurisdictions do not allow certain exclusions, so parts of this section may not apply to you.',
          zh: '在法律允许的范围内，App 按“现状”和“现有可用”状态提供，不附带适销性、特定用途适用性或不侵权保证。部分司法辖区不允许某些排除条款，因此本节部分内容可能不适用于你。'
        }
      },
      {
        title: { en: 'Limitation of liability', zh: '责任限制' },
        body: {
          en: 'To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or consequential damages, or for lost data, profits, or business. Our total liability for claims relating to the app will not exceed the amount you paid for it in the twelve months before the claim. This does not limit liability that cannot be limited by law.',
          zh: '在法律允许的最大范围内，我们不对间接、附带、特殊或后果性损害负责，也不对数据、利润或业务损失负责。对于与 App 相关的索赔，我们的总责任不超过你在索赔前十二个月内为 App 支付的金额。法律不允许限制的责任不受本节限制。'
        }
      },
      {
        title: { en: 'Termination', zh: '终止' },
        body: {
          en: 'You may stop using the app and uninstall it at any time. We may suspend or terminate your license if you materially breach these terms. On termination, stop using the app and delete your copies.',
          zh: '你可以随时停止使用并卸载 App。如果你严重违反这些条款，我们可以暂停或终止你的授权。终止后，请停止使用 App 并删除所有副本。'
        }
      },
      {
        title: { en: 'Apple App Store terms', zh: 'Apple App Store 条款' },
        body: {
          en: 'If you downloaded the app from the Apple App Store, Apple is not a party to these terms and has no obligation to provide maintenance or support. Apple is a third-party beneficiary of these terms and may enforce them. You must also comply with the App Store Terms of Service. Apple’s refund policy applies to App Store purchases.',
          zh: '如果你从 Apple App Store 下载 App，Apple 不是这些条款的当事方，也没有义务提供维护或支持。Apple 是这些条款的第三方受益人，可以执行这些条款。你还必须遵守 App Store 服务条款。App Store 购买适用 Apple 的退款政策。'
        }
      },
      {
        title: { en: 'Changes', zh: '变更' },
        body: {
          en: 'We may update these terms as the app evolves. The date at the top of this page will change, and material changes will be announced on this page or in the app. Continued use after the changes take effect means you accept the updated terms.',
          zh: '随着 App 发展，我们可能更新这些条款。页面顶部的日期会更新；重大变更会在本页或 App 内说明。变更生效后继续使用即表示你接受更新后的条款。'
        }
      },
      {
        title: { en: 'Governing law and consumer rights', zh: '适用法律与消费者权利' },
        body: {
          en: 'These terms are governed by the laws of the jurisdiction where Tenon Studio is established, without regard to conflict-of-law rules. If you are a consumer, you also keep the protection of mandatory laws in your country of residence. Please contact us first so we can try to resolve any dispute.',
          zh: '这些条款受 Tenon Studio 所在司法辖区的法律管辖，不考虑法律冲突规则。如果你是消费者，你仍然享有居住国强制性法律赋予的保护。请先联系我们，以便尝试解决争议。'
        }
      },
      {
        title: { en: 'Severability and entire agreement', zh: '可分割性与完整协议' },
        body: {
          en: 'If any provision of these terms is found unenforceable, the remaining provisions stay in effect. These terms, the Privacy Policy, and any checkout terms form the entire agreement between you and us regarding the app.',
          zh: '如果这些条款中的任何规定被认定不可执行，其余规定仍然有效。这些条款、隐私政策以及任何结账条款构成你与我们之间关于 App 的完整协议。'
        }
      },
      {
        title: { en: 'Contact', zh: '联系' },
        body: {
          en: `Questions about these terms can be emailed to ${SITE.email}.`,
          zh: `如对这些条款有疑问，请发邮件至 ${SITE.email}。`
        }
      }
    ]
  };
}
