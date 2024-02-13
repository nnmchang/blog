import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'NNMLog',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'ja-JP',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'nnmchang',
    bio: '楽したい系プログラマ',
    metadata: [
      {
        icon: 'i-ri-github-fill',
        link: 'https://github.com/nnmchang'
      },
      {
        icon: 'i-ri-twitter-x-fill',
        link: 'https://x.com/nnmchang_ai'
      }
    ]
  },
  themeColor: '#3D4451'
}
