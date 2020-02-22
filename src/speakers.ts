export interface Speaker {
  name: string;
  social?: {
    twitter?: string;
  };
  slide?: {
    title: string;
    link?: string;
    mirror?: string;
    download?: string;
  };
}

export const speakers: Speaker[] = [
  {
    name: "Evan You",
    social: { twitter: "youyuxi" },
    slide: {
      title: "State of the Vuenion 2020"
    }
  },
  {
    name: "Sarah Drasner",
    social: { twitter: "sarah_edo" },
    slide: {
      title: "An Animated Guide to Vue 3 Reactivity and Internals",
      link:
        "https://github.com/sdras/animated-guide-vue3/blob/master/reactivity-vue3.pdf",
      download: "reactivity-vue3.pdf"
    }
  },
  {
    name: "Natalia Tepluhina",
    social: { twitter: "n_tepluhina" },
    slide: {
      title: "You might not need Vuex"
    }
  },
  {
    name: "Guillaume Chau",
    social: { twitter: "akryum" },
    slide: {
      title: "What's new in Vue CLI",
      link: "https://slides.com/akryum/guijs#/"
    }
  },
  {
    name: "Damian Dulisz",
    social: { twitter: "DamianDulisz" },
    slide: {
      title: "Validations in The Composition Age"
    }
  },
  {
    name: "Eduardo San Martin Morote",
    social: { twitter: "posva" },
    slide: {
      title: "vue-router and its techniques"
    }
  },
  {
    name: "Thorsten Lünborg",
    social: { twitter: "Linus_Borg" },
    slide: {
      title: "Composition API Best Practices",
      link:
        "https://github.com/LinusBorg/talks/blob/master/2020-02-20%20Vuejs%20Amsterdam/Composition%20API%20-%20Emerging%20Patterns%20and%20Best%20Practices%20(optimized).pdf",
      download:
        "Composition API - Emerging Patterns and Best Practices (optimized).pdf"
    }
  },
  {
    name: "Maya Shavin",
    social: { twitter: "MayaShavin" },
    slide: {
      title: "Performant Components through Customization",
      link:
        "https://slides.com/mayashavin/performant-components-customization-vue-ams#/  "
    }
  },
  {
    name: "Rahul Kadyan",
    social: { twitter: "znck0" },
    slide: {
      title: "New Vue. New Compiler. Let’s unbox",
      link: "https://speakerdeck.com/znck/new-vue-new-compiler-lets-unpack",
      download: "Vue_Amsterdam_2020.pdf"
    }
  },
  {
    name: "Divya Sasidharan",
    social: { twitter: "shortdiv" }
  },
  {
    name: "Sébastien Chopin",
    social: { twitter: "Atinux" },
    slide: {
      title: "What is Nuxt 2020?!"
    }
  },
  {
    name: "Pooya Parsa",
    social: { twitter: "_pi0_" },
    slide: {
      title: "Deep Dive into Nuxt.js"
    }
  },
  {
    name: "Filip Rakowski",
    social: { twitter: "filrakowski" },
    slide: {
      title:
        "Making eCommerce sexy again with Vue Storefront and Composition API"
    }
  },
  {
    name: "Maria Lamardo",
    social: { twitter: "MariaLamardo" },
    slide: {
      title: "Vue Announcer - Content Loading That Isn't Broken",
      link:
        "https://docs.google.com/presentation/d/1IBygfnoKyGfKc--XtTCmP6NLzplUkBv1M_Yj8SmuGbE/edit#slide=id.p",
      download: "Content Loading.pdf"
    }
  },
  {
    name: "John Leider ",
    social: { twitter: "zeroskillz" },
    slide: {
      title: "Vuetify 2+"
    }
  },
  {
    name: "Sarah Dayan",
    social: { twitter: "frontstuff_io" },
    slide: {
      title: "Test-Driven Development with Vue.js"
    }
  },
  {
    name: "Gregg Pollack",
    social: { twitter: "greggpollack" },
    slide: {
      title: "Introduction into the Composition API"
    }
  },
  {
    name: "Adam Jahr",
    social: { twitter: "adamjahr" },
    slide: {
      title: "Authentication from Scratch"
    }
  },
  {
    name: "Roman Kuba",
    social: { twitter: "Codebryo" },
    slide: {
      title: "Serverless with Vue and Node.js",
      link:
        "https://speakerdeck.com/codebryo/serverless-static-sites-with-vue-and-node",
      download: "servless_with_vue_and_node.pdf"
    }
  },
  {
    name: "Callum Macrae",
    social: { twitter: "callumacrae" },
    slide: {
      title: "Climate change and the tech community"
    }
  },
  {
    name: "Kia King",
    social: { twitter: "KiaKing85" },
    slide: {
      title: "Vuex ORM – Relational data management in Vue"
    }
  },
  {
    name: "Debbie O'Brien",
    social: { twitter: "debs_obrien" },
    slide: {
      title: "Full Static with Nuxt"
    }
  },
  {
    name: "Tim Benniks",
    social: { twitter: "timbenniks" },
    slide: {
      title: "Team First"
    }
  },
  {
    name: "Yoav Yanovski",
    social: { twitter: "yanovskiyoav" },
    slide: {
      title: "Micro Frontends: composing a greater whole"
    }
  },
  {
    name: "Jessica Sachs",
    social: { twitter: "_JessicaSachs" },
    slide: {
      title: "The Future of Vue's Test Utils"
    }
  },
  {
    name: "Jake Dohm",
    social: { twitter: "JakeDohm" },
    slide: {
      title: "Building Blazing Fast Sites with Gridsome"
    }
  },
  {
    name: "Jacob Muller",
    social: { twitter: "jackmu95" },
    slide: {
      title: "BootstrapVue - The road to 2.0 and Beyond"
    }
  },
  {
    name: "Dima Vishnevetsky",
    social: { twitter: "dimshik100" },
    slide: {
      title: "Scalable Vue Graphics for the Modern Web",
      link:
        "https://slides.com/dimshik/scalable-vue-graphics-for-the-modern-web"
    }
  }
];
