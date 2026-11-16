import type { Localized } from './apps';

export type CheckoutTier = {
  id: 'solo' | 'duo' | 'family';
  name: Localized;
  devices: number;
  price: string;
  saving?: Localized;
  cta: Localized;
};

export const checkoutMode: 'test' | 'live' =
  import.meta.env.PUBLIC_DODO_MODE === 'test' ? 'test' : 'live';

const testProductIDs: Record<CheckoutTier['id'], string> = {
  solo: 'pdt_0Ns4X4Vp2x7T821IT9Ydx',
  duo: 'pdt_0Ns4XrUyOvwM9hC8ILeef',
  family: 'pdt_0Ns4YAlVT5JSxrrdBCtjX',
};

const liveProductIDs: Record<CheckoutTier['id'], string> = {
  solo: import.meta.env.PUBLIC_DODO_SOLO_ID ?? '',
  duo: import.meta.env.PUBLIC_DODO_DUO_ID ?? '',
  family: import.meta.env.PUBLIC_DODO_FAMILY_ID ?? '',
};

export const flipCheckoutTiers: CheckoutTier[] = [
  {
    id: 'solo',
    name: { en: 'Flip Solo', zh: 'Flip 单机版' },
    devices: 1,
    price: '$4.99',
    cta: { en: 'Buy Solo', zh: '购买单机版' },
  },
  {
    id: 'duo',
    name: { en: 'Flip Duo', zh: 'Flip 双机版' },
    devices: 2,
    price: '$7.99',
    saving: { en: 'Save 20%', zh: '省 20%' },
    cta: { en: 'Buy Duo', zh: '购买双机版' },
  },
  {
    id: 'family',
    name: { en: 'Flip Family', zh: 'Flip 家庭版' },
    devices: 5,
    price: '$16.99',
    saving: { en: 'Save 32%', zh: '省 32%' },
    cta: { en: 'Buy Family', zh: '购买家庭版' },
  },
];

export function tiersFor(slug: string): CheckoutTier[] {
  return slug === 'flip' ? flipCheckoutTiers : [];
}

export function checkoutURL(tier: CheckoutTier): string | null {
  const productID = checkoutMode === 'live' ? liveProductIDs[tier.id] : testProductIDs[tier.id];
  if (!productID) return null;
  const host = checkoutMode === 'live'
    ? 'https://checkout.dodopayments.com'
    : 'https://test.checkout.dodopayments.com';
  const success = new URL('https://tenonstudio.github.io/apps/flip/buy/success/');
  const url = new URL(`${host}/buy/${productID}`);
  url.searchParams.set('redirect_url', success.toString());
  return url.toString();
}
