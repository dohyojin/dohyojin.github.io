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
          section: "News",},{id: "projects-ai-disclosure",
          title: 'AI Disclosure',
          description: "Exploring designs of AI disclosure, informing consumers whether and how AI-generated content are produced.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/disclosure/";
            },},{id: "projects-llm-as-a-judge",
          title: 'LLM-as-a-Judge',
          description: "Designing and building LLM-based evaluation tool for human-AI alignment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/evalassist/";
            },},{id: "projects-explainability",
          title: 'Explainability',
          description: "Exploring methods for explaining factuality and source attribution of language model outputs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/explainability/";
            },},{id: "projects-ai-governance",
          title: 'AI Governance',
          description: "Understanding Industry Practitioners&#39; Experiences in Generative AI Governance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/governance/";
            },},{id: "projects-conversational-interface",
          title: 'Conversational Interface',
          description: "Designing conversational interfaces for a workflow automation system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/grounding/";
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
