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
        },{id: "news-a-little-belated-but-i-m-excited-to-share-that-after-moving-from-ibm-research-to-amazon-s-agi-team-i-ve-joined-hanyang-university-erica-as-an-assistant-professor-this-september-i-m-excited-to-return-to-my-home-country-and-begin-this-new-chapter-my-time-at-amazon-was-brief-but-incredibly-meaningful-and-i-m-grateful-for-the-experiences-and-especially-for-the-wonderful-people-i-had-the-chance-to-meet-and-work-with-️",
          title: 'A little belated, but I’m excited to share that, after moving from IBM...',
          description: "",
          section: "News",},{id: "projects-ai-disclosure",
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
