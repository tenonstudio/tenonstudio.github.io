import type { App, Localized } from './apps';

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

export function privacyFor(app: App): LegalDocument {
  const network = {
    flip: {
      en: 'Flip itself does not send analytics. Controls that use macOS automation, Bluetooth, or location do so only when you activate them. Purchase and license activation use Lemon Squeezy.',
      zh: 'Flip 本身不发送分析数据。使用 macOS 自动化、蓝牙或位置的控制项只会在你主动启用时访问相应系统能力。购买和授权激活使用 Lemon Squeezy。'
    },
    porthole: {
      en: 'Porthole loads the window or web page you ask it to mirror. That source may make network requests according to its own policy. Captured frames are processed locally and are never uploaded.',
      zh: 'Porthole 会加载你要求镜像的窗口或网页；来源可能按其自身策略发起网络请求。捕获的画面只在本机处理，不会上传。'
    },
    tessera: {
      en: 'Tessera itself does not send analytics. A wallpaper script may access the network only when its manifest declares the network capability.',
      zh: 'Tessera 本身不发送分析数据。只有壁纸脚本声明 network capability 时才可能访问网络。'
    }
  }[app.slug];

  return {
    title: { en: 'Privacy Policy', zh: '隐私政策' },
    lead: {
      en: `${app.name} is designed to keep your content on your Mac.`,
      zh: `${app.name} 的设计目标是让你的内容留在本机。`
    },
    updated,
    sections: [
      {
        title: { en: 'What is stored', zh: '存储的内容' },
        body: {
          en: 'Preferences, app settings, local scripts, and license state are stored on this Mac. We do not provide accounts or cloud sync.',
          zh: '偏好设置、应用设置、本地脚本以及授权状态都保存在这台 Mac 上。我们不提供账号或云同步。'
        }
      },
      {
        title: { en: 'Your content', zh: '你的内容' },
        body: {
          en: `Content handled by ${app.name} stays local. We do not upload your screen, windows, scripts, or other working material.`,
          zh: `${app.name} 处理的内容都留在本机。我们不会上传你的屏幕、窗口、脚本或其他工作内容。`
        }
      },
      {
        title: { en: 'Network access', zh: '网络访问' },
        body: network ?? { en: 'The app does not upload your content.', zh: 'App 不会上传你的内容。' }
      },
      {
        title: { en: 'Purchases and licensing', zh: '购买与授权' },
        body: {
          en: 'License activation and purchases are processed by Lemon Squeezy. Payment details and billing information are handled by Lemon Squeezy under its own privacy policy; we receive only the license information needed to activate the app.',
          zh: '授权激活和购买由 Lemon Squeezy 处理。支付与账单信息由 Lemon Squeezy 按其隐私政策处理；我们只接收激活 App 所需的授权信息。'
        }
      },
      {
        title: { en: 'Analytics and contact', zh: '分析数据与联系' },
        body: {
          en: 'The app does not include third-party analytics or advertising SDKs. Questions about this policy can be sent through the Tenon Studio website.',
          zh: 'App 不包含第三方分析或广告 SDK。如对隐私政策有疑问，可通过 Tenon Studio 网站联系。'
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
