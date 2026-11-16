import type { Localized } from './apps';

export type TierID = 'solo' | 'duo' | 'family';

export type CheckoutTier = {
  id: TierID;
  name: Localized;
  devices: number;
  price: string;
  saving?: Localized;
  cta: Localized;
};

type ProductMap = Record<TierID, string>;

export const checkoutMode: 'test' | 'live' =
  import.meta.env.PUBLIC_DODO_MODE === 'test' ? 'test' : 'live';

const testProducts: Record<string, ProductMap> = {
  flip: {
    solo: 'pdt_0Ns4X4Vp2x7T821IT9Ydx',
    duo: 'pdt_0Ns4XrUyOvwM9hC8ILeef',
    family: 'pdt_0Ns4YAlVT5JSxrrdBCtjX',
  },
  porthole: {
    solo: 'pdt_0Ns4lSsaB8q1bBqDMfiiy',
    duo: 'pdt_0Ns4lTHG15eaRdTBaQ6r6',
    family: 'pdt_0Ns4lTVsZk4RNETE5zXAw',
  },
  tessera: {
    solo: 'pdt_0Ns4lTr5ptWPLGYqhRErF',
    duo: 'pdt_0Ns4lU3Rt8FkRBSVQDDm4',
    family: 'pdt_0Ns4lUGXH9gomhE6u1aRc',
  },
  launchpad: {
    solo: 'pdt_0Ns4lUZMSx4baAHelHBYk',
    duo: 'pdt_0Ns4lUlCm9itdJmN2gOsl',
    family: 'pdt_0Ns4lV4WzhGGUl0L3T9sb',
  },
  bubble: {
    solo: 'pdt_0Ns4lVVcONwlqmrYCTU77',
    duo: 'pdt_0Ns4lVjO4gNwIo2F3h6ux',
    family: 'pdt_0Ns4lVwlZ8E7eyQSthRn2',
  },
  crate: {
    solo: 'pdt_0Ns4lWFwgQ8STQHy8ubr2',
    duo: 'pdt_0Ns4lWSd73mPjUuJpmhhs',
    family: 'pdt_0Ns4lWezwI9TUvBMDLaSi',
  },
};

const liveProducts: Record<string, ProductMap> = {
  flip: {
    solo: 'pdt_0Ns4lXideO20jw0fVExs8',
    duo: 'pdt_0Ns4lXz9KE2KdFqe2EzBz',
    family: 'pdt_0Ns4lYCQ1mgblEYXlt4mQ',
  },
  // Porthole live products are not published in Dodo yet. Leave the map empty
  // so the buy page shows "Checkout opening soon" instead of a 404.
  porthole: {
    solo: '',
    duo: '',
    family: '',
  },
  tessera: {
    solo: 'pdt_0Ns4lZEtENl3Ekj94zg3c',
    duo: 'pdt_0Ns4lZTicfmbbOzHlyfNB',
    family: 'pdt_0Ns4lZfXQqeVeuvn5eXbI',
  },
  launchpad: {
    solo: 'pdt_0Ns4lZxn6njNef8sqVNkf',
    duo: 'pdt_0Ns4laA6AAemu9M6KqMl3',
    family: 'pdt_0Ns4laN3yPziFZdpk6Dyg',
  },
  bubble: {
    solo: 'pdt_0Ns4lagfWx64OVVPwEoft',
    duo: 'pdt_0Ns4latXHfCYGueg0JkgO',
    family: 'pdt_0Ns4lbAqpJHfVaYistnCp',
  },
  crate: {
    solo: 'pdt_0Ns4lbUEltNIeg0XABzue',
    duo: 'pdt_0Ns4lbjJHZRUXJBIsjY7i',
    family: 'pdt_0Ns4lbwrNVc6L5snw6X5I',
  },
};

const appNames: Record<string, Localized> = {
  flip: { en: 'Flip', zh: 'Flip' },
  porthole: { en: 'Porthole', zh: 'Porthole' },
  tessera: { en: 'Tessera', zh: 'Tessera' },
  launchpad: { en: 'Launchpad', zh: 'Launchpad' },
  bubble: { en: 'Bubble', zh: 'Bubble' },
  crate: { en: 'Crate', zh: 'Crate' },
};

export function tiersFor(slug: string): CheckoutTier[] {
  const name = appNames[slug];
  if (!name) return [];
  return [
    {
      id: 'solo',
      name: { en: `${name.en} Solo`, zh: `${name.zh} 单机版` },
      devices: 1,
      price: '$4.99',
      cta: { en: 'Buy Solo', zh: '购买单机版' },
    },
    {
      id: 'duo',
      name: { en: `${name.en} Duo`, zh: `${name.zh} 双机版` },
      devices: 2,
      price: '$7.99',
      saving: { en: 'Save 20%', zh: '省 20%' },
      cta: { en: 'Buy Duo', zh: '购买双机版' },
    },
    {
      id: 'family',
      name: { en: `${name.en} Family`, zh: `${name.zh} 家庭版` },
      devices: 5,
      price: '$16.99',
      saving: { en: 'Save 32%', zh: '省 32%' },
      cta: { en: 'Buy Family', zh: '购买家庭版' },
    },
  ];
}

export function checkoutURL(slug: string, tier: CheckoutTier): string | null {
  const productMap = checkoutMode === 'live' ? liveProducts[slug] : testProducts[slug];
  const productID = productMap?.[tier.id];
  if (!productID) return null;
  const host = checkoutMode === 'live'
    ? 'https://checkout.dodopayments.com'
    : 'https://test.checkout.dodopayments.com';
  const success = new URL(`https://tenonstudio.github.io/apps/${slug}/buy/success/`);
  const url = new URL(`${host}/buy/${productID}`);
  url.searchParams.set('redirect_url', success.toString());
  return url.toString();
}
