import FacebookIcon from "@/app/assets/icons/facebook-icon";
import TiktokIcon from "@/app/assets/icons/tiktok-icon";
import YoutubeIcon from "@/app/assets/icons/youtube-icon";

export const nav_items = [
  {
    id: 0,
    label: 'about',
    path: '/about',

  },
  {
    id: 1,
    label: 'ministries',
    path: '/ministries',

  },
  {
    id: 2,
    label: 'give',
    path: '/give',

  },
  {
    id: 3,
    label: 'connect',
    path: '/connect',
  },
  {
    id: 4,
    label: 'watch',
    path: '/watch',
  },
]


export const images = {
  app_logo: "/assets/jlc-logo.png",
  app_logo_bold: "/assets/jlc-logo-bold.png",
};

export const footer_elements = {

  copyright: '&copy; 2026 All rights reserved - Jesus Legacy Church',
  social_links: [
    {
      label: 'facebook',
      path: 'https://www.facebook.com/profile.php?id=61572949148818',
      icon: FacebookIcon
    },
    {
      label: 'tiktok',
      path: 'https://www.tiktok.com/@jesus.legacy',
      icon: TiktokIcon
    },
    {
      label: 'youtube',
      path: 'https://www.youtube.com/@jesuslegacy07',
      icon: YoutubeIcon
    },
  ],
  footer_links: [
    {
      header: 'About',
      links: [
        { label: 'Who we are', path: '/ministries/youth' },
        { label: 'What we do', path: '/ministries/music' },
        { label: 'Our Vision', path: '/ministries/outreach' },
        { label: 'Our Mission', path: '/ministries/outreach' },
      ],
    },
    {
      header: 'Join us',
      links: [
        { label: 'Find our Churches', path: '/ministries/youth' },
        { label: 'Join a Ministry', path: '/ministries/music' },
        { label: 'Give', path: '/ministries/outreach' },
      ],
    },
    {
      header: 'Ministries',
      links: [
        { label: 'Youth Ministry', path: '/ministries/youth' },
        { label: 'Music Ministry', path: '/ministries/music' },
        { label: 'Outreach', path: '/ministries/outreach' },
      ],
    },

  ],
  contact_email: 'jesuslegacy07@gmail.com',
}


