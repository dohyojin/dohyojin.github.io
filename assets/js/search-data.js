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
    },{id: "news-this-website-is-currently-under-construction-stay-tuned",
          title: 'This website is currently under construction. Stay tuned!',
          description: "",
          section: "News",},];
