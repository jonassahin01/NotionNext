const CONFIG = {
  // First screen information banner button text
  MAGZINE_HOME_BANNER_ENABLE: true, // Display the banner in the top right corner
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/about',
  MAGZINE_HOME_BUTTON_TEXT: 'Learn More',

  MAGZINE_HOME_HIDDEN_CATEGORY: 'Erotica', // Hide specific categories on the homepage (comma-separated in English)

  MAGZINE_HOME_TITLE: 'Embrace Confidence and Passion – Join My Journey.',
  MAGZINE_HOME_DESCRIPTION:
    'Step into my world of gaming, cooking, and exclusive content. Real, natural, and confidently me – this is more than just a page, it’s a lifestyle.',
  MAGZINE_HOME_TIPS:
    'Confidence comes with age, and I’m here to show you what experience can truly offer. 🌟',

  // Recommended articles tags (max six), leave blank for latest posts
  MAGZINE_RECOMMEND_POST_TAG: 'Recomended',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: 'Recommended Content',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // Sort by last updated time if true

  // Style settings
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false, // Dark mode for right panel

  MAGZINE_POST_LIST_COVER: true, // Show post cover images
  MAGZINE_POST_LIST_PREVIEW: true, // Show preview of articles
  MAGZINE_POST_LIST_CATEGORY: true, // Show post categories
  MAGZINE_POST_LIST_TAG: true, // Show post tags

  MAGZINE_POST_DETAIL_CATEGORY: true, // Show category on post detail page
  MAGZINE_POST_DETAIL_TAG: true, // Show tags on post detail page

  // Article page contact card
  MAGZINE_SOCIAL_CARD: true, // Show contact/social community button on the side
  MAGZINE_SOCIAL_CARD_TITLE_1: 'Connect with Me',
  MAGZINE_SOCIAL_CARD_TITLE_2: null,
  MAGZINE_SOCIAL_CARD_TITLE_3: 'Click to connect and get closer!',
  MAGZINE_SOCIAL_CARD_URL: 'https://onlyfans.com/sofiaavallone', // Replace with your actual social community link

  // Footer menu links
  MAGZINE_FOOTER_LINKS: [
    {
      name: 'My Content',
      menus: [
        {
          title: 'About Me',
          href: '/about' // Update to your about page URL
        },
        {
          title: 'Cooking & Recipes',
          href: '/cooking' // Link to your cooking posts or content
        },
        {
          title: 'Gaming',
          href: '/gaming' // Link to your gaming posts or streams
        },
        {
          title: 'My OnlyFans',
          href: 'https://onlyfans.com/sofiaavallone' // Update with your actual OnlyFans link
        }
      ]
    },
    {
      name: 'Social Media',
      menus: [
        {
          title: 'Instagram',
          href: 'https://www.instagram.com/sofiaavallone22/'
        },
        { title: 'Twitter', href: 'https://x.com/AvalloneSofia1' },
        { title: 'TikTok', href: 'https://www.tiktok.com/@sofiaavallone' },
        { title: 'Facebook', href: 'https://www.facebook.com/yourprofile' }
      ]
    },
    {
      name: 'Support',
      menus: [
        {
          title: 'Join My Community',
          href: 'https://onlyfans.com/sofiaavallone'
        },
        {
          title: 'Exclusive Content',
          href: 'https://onlyfans.com/sofiaavallone' // Update with your exclusive content link
        },
        {
          title: 'FAQs',
          href: '/faq' // Link to your FAQs page
        },
        {
          title: 'Contact Me',
          href: '/contact' // Link to your contact page
        }
      ]
    }
  ],

  // Old version top menu
  MAGZINE_MENU_CATEGORY: true, // Display categories
  MAGZINE_MENU_TAG: true, // Display tags
  MAGZINE_MENU_ARCHIVE: true, // Display archive
  MAGZINE_MENU_SEARCH: true, // Display search

  MAGZINE_WIDGET_TO_TOP: true // Show back-to-top button
}
export default CONFIG
