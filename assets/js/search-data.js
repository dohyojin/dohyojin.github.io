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
          section: "News",},{id: "projects-llm-explainability",
          title: 'LLM Explainability',
          description: "Exploring methods for explaining factuality and attributions of LLM outputs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-llm-as-a-judge",
          title: 'LLM-as-a-Judge',
          description: "Designing and building LLM-based evaluation tool for human-AI alignment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-facilitator-agent",
          title: 'Facilitator Agent',
          description: "Designing conversational agents for facilitating online group discussions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ai-disclosure",
          title: 'AI Disclosure',
          description: "Understanding governance practices and designing tools",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
