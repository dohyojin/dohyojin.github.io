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
        },{id: "news-announcement-1",
          title: 'Announcement_1',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "projects-ai-disclosure",
          title: 'AI Disclosure',
          description: "Exploring designs of AI disclosure, informing consumers whether and how AI-generated content are produced.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/disclosure/";
            },},{id: "projects-llm-based-evaluation",
          title: 'LLM-based Evaluation',
          description: "Designing and building LLM-based evaluation tool for human-AI alignment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/evalassist/";
            },},{id: "projects-ai-hallucination",
          title: 'AI Hallucination',
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
