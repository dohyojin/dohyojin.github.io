// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-selected-publications",
          title: "Selected Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-chiwork-2025-workshop-on-navigating-generative-ai-disclosure-ownership-and-accountability-in",
      
        title: 'CHIWORK 2025 Workshop on Navigating Generative AI Disclosure, Ownership, and Accountability in… <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/human-centered-ai/chiwork-2025-workshop-on-navigating-generative-ai-disclosure-ownership-and-accountability-in-0527c128b6d0?source=rss-8e0a27b31a6------2", "_blank");
        
      },
    },{id: "post-when-users-and-ai-systems-don-t-understand-each-other",
      
        title: 'When Users and AI Systems Don’t Understand Each Other <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/acm-cscw/when-users-and-ai-systems-dont-understand-each-other-f23cdd3fd57a?source=rss-8e0a27b31a6------2", "_blank");
        
      },
    },{id: "post-why-you-should-evaluate-what-others-say-about-ai",
      
        title: 'Why You Should Evaluate What Others Say About AI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/acm-cscw/why-you-should-evaluate-what-others-say-about-ai-625d727bfd2d?source=rss-8e0a27b31a6------2", "_blank");
        
      },
    },{id: "news-i-will-be-attending-chi-this-year-in-japan-4-26-5-1-️",
          title: 'I will be attending CHI this year in Japan (4/26-5/1)! ✈️',
          description: "",
          section: "News",},{id: "news-excited-to-co-organize-navigating-generative-ai-disclosure-ownership-and-accountability-in-co-creative-domains-workshop-at-chiwork-2025-6-23",
          title: 'Excited to co-organize “Navigating Generative AI Disclosure, Ownership, and Accountability in Co-Creative Domains”...',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-chiwork-in-amsterdam-the-netherlands-6-23-25",
          title: 'I will be attending CHIWORK in Amsterdam, The Netherlands (6/23-25)! 🇳🇱',
          description: "",
          section: "News",},{id: "news-i-ll-be-at-uist-in-busan-south-korea-9-28-10-1-and-aies-in-madrid-spain-10-20-22-️",
          title: 'I’ll be at UIST in Busan, South Korea (9/28-10/1) and AIES in Madrid,...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
