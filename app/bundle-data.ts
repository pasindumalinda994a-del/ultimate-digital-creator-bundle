/**
 * Google Drive / external resource links for each bundle category.
 * `folderUrl` is the primary “Open folder” target (first collection when no single root exists).
 */

export type BundleLinkItem = {
  label: string;
  url: string;
};

export type BundleSection = {
  /** Omit or leave empty to skip a subheading (single flat list). */
  title?: string;
  links: BundleLinkItem[];
};

export type BundleCategory = {
  id: string;
  title: string;
  description: string;
  folderUrl: string;
  sections: BundleSection[];
};

/**
 * Hero thumbnails in `/public/images` — filenames match your JPEG assets.
 * Use `encodeURI(path)` when passing to `<Image src={...} />` (spaces and `&` in paths).
 */
export const categoryHeroImageById: Record<string, string> = {
  reels: "/images/Reels Collection.jpeg",
  tshirt: "/images/T-Shirt Design Collections.jpeg",
  graphic: "/images/Graphic Design Collections.jpeg",
  ebooks: "/images/E-books & digital resources.jpeg",
  video: "/images/Video Design Collection.jpeg",
  fonts: "/images/Fonts Collection.jpeg",
  courses: "/images/Education Courses.jpeg",
  ai: "/images/AI Learning & Resources.jpeg",
  software: "/images/Premium Softwares.jpeg",
  logo: "/images/Logo Design Collection.jpeg",
  "google-ads": "/images/Google Ads Templates.jpeg",
  "gold-png": "/images/Gold PNG Collection.jpeg",
  "lr-presets": "/images/Lightroom Presets.jpeg",
};

export const bundleCategories: BundleCategory[] = [
  {
    id: "reels",
    title: "Reels Collection",
    description:
      "Vertical short-form packs — motivation, earning tips, humor, learning, and more.",
    folderUrl:
      "https://drive.google.com/drive/folders/1s3HDSdjn60PtOkON6C9Pl6OrX17-IXuQ?usp=drive_link",
    sections: [
      {
        title: "Motivational reels",
        links: [
          {
            label: "Motivational pack 1",
            url: "https://drive.google.com/drive/folders/1s3HDSdjn60PtOkON6C9Pl6OrX17-IXuQ?usp=drive_link",
          },
          {
            label: "Motivational pack 2",
            url: "https://drive.google.com/drive/folders/1LauyVvtxwSexbluRFrxrq-26iHb-WToU?usp=drive_link",
          },
          {
            label: "Motivational pack 3",
            url: "https://drive.google.com/drive/folders/1iMYFvaZyXci8o7EV4NERr1wAFQgNO-WJ?usp=drive_link",
          },
        ],
      },
      {
        title: "Earning tips reels",
        links: [
          {
            label: "Earning tips",
            url: "https://drive.google.com/drive/folders/1CCCOcqN3rhd6GHS4rN8kCUPY0TeuLm6T?usp=drive_link",
          },
        ],
      },
      {
        title: "Cartoon reels",
        links: [
          {
            label: "Cartoon pack 1",
            url: "https://drive.google.com/drive/folders/1VPkIcZd_2QsbCCCOWZ5E0PJM3JCA-WXK?usp=drive_link",
          },
          {
            label: "Cartoon pack 2",
            url: "https://drive.google.com/drive/folders/1lqNqdl4BtulzpraJD4r5qvh5xz2UxHSW?usp=drive_link",
          },
        ],
      },
      {
        title: "Girls reels",
        links: [
          {
            label: "Girls reels",
            url: "https://drive.google.com/drive/folders/1aSXBgI27jS0QlGScv0DJm2wUWKHxNySn?usp=drive_link",
          },
        ],
      },
      {
        title: "Art & craft",
        links: [
          {
            label: "Art & craft 1",
            url: "https://drive.google.com/drive/folders/1ITZKmPCgf2__gs6GwGcDeo2pGAClgNuK?usp=drive_link",
          },
          {
            label: "Art & craft 2",
            url: "https://drive.google.com/drive/folders/1HK6-UYlDyJgp_v_scOcRPTpECht54xr_?usp=drive_link",
          },
        ],
      },
      {
        title: "Tools & technique",
        links: [
          {
            label: "Technique pack 1",
            url: "https://drive.google.com/drive/folders/1474GfE3gSSqBK1St0VUGJnKg5LJ7u40R?usp=drive_link",
          },
          {
            label: "Technique pack 2",
            url: "https://drive.google.com/drive/folders/1Nukr3qo0obJhUhYC3e6uRUg4LnhpDaOb?usp=drive_link",
          },
        ],
      },
      {
        title: "Sports reels",
        links: [
          {
            label: "Sports",
            url: "https://drive.google.com/drive/folders/1dk4QweuCBpGWuPqMw-2iZB1OUvtA-O3O?usp=drive_link",
          },
        ],
      },
      {
        title: "Gym reels",
        links: [
          {
            label: "Gym related",
            url: "https://drive.google.com/drive/folders/1hjrR1iIov24tCUxpI9Q_QDwjLbzwPU6w?usp=drive_link",
          },
        ],
      },
      {
        title: "World around",
        links: [
          {
            label: "World around",
            url: "https://drive.google.com/drive/folders/1-lCRpZ_jdYdvh1vVOVPmx1VhO_-n0W06?usp=drive_link",
          },
        ],
      },
      {
        title: "Nature & vehicles",
        links: [
          {
            label: "Nature / vehicles 1",
            url: "https://drive.google.com/drive/folders/1-ELCEhF0I3gfn6eKd-PnCEhbunlNlBgA?usp=drive_link",
          },
          {
            label: "Nature / vehicles 2",
            url: "https://drive.google.com/drive/folders/1Ic6Q4Kn3RdDw021uxR1tG1OpCiaQDdBQ?usp=drive_link",
          },
          {
            label: "Nature / vehicles 3",
            url: "https://drive.google.com/drive/folders/1dNZRnqfkO8GlytGD3iKEfXGTesyH2Kxb?usp=drive_link",
          },
        ],
      },
      {
        title: "Animation reels",
        links: [
          {
            label: "Animation",
            url: "https://drive.google.com/drive/folders/1WxzcHIR4ikXR6aIW-re9_KMTZ9a9f289?usp=drive_link",
          },
        ],
      },
      {
        title: "Social media",
        links: [
          {
            label: "Social media related",
            url: "https://drive.google.com/drive/folders/1GRBl3kdM5W0OY0NFA7pdui6wCbVtHCza?usp=drive_link",
          },
        ],
      },
      {
        title: "Funny reels",
        links: [
          {
            label: "Funny",
            url: "https://drive.google.com/drive/folders/13UTukBfV_RbTwzrvkjwtXBdJbbna5jCQ?usp=drive_link",
          },
        ],
      },
      {
        title: "Animals",
        links: [
          {
            label: "Animals",
            url: "https://drive.google.com/drive/folders/1eKbHAvvUZnWZ3IwZFfwYguRV2KUMYcN_?usp=drive_link",
          },
        ],
      },
      {
        title: "Personal attitude",
        links: [
          {
            label: "Personal attitude 1",
            url: "https://drive.google.com/drive/folders/1n8sP8cRY0TrsdysBNBWwkPFaOVmAIH1q?usp=drive_link",
          },
          {
            label: "Personal attitude 2",
            url: "https://drive.google.com/drive/folders/1q1Y_G28I3OZxPiVT7Vx-pTC5w0BvxD8q?usp=drive_link",
          },
        ],
      },
      {
        title: "Learning — online earning",
        links: [
          {
            label: "Online earning 1",
            url: "https://drive.google.com/drive/folders/1OLjpkYWi3DZLunCcu_jfrJhRWVmx4Yq1?usp=drive_link",
          },
          {
            label: "Online earning 2",
            url: "https://drive.google.com/drive/folders/1W2b1r9oEIxofZBQNqPULvkuC-lyKsyEJ?usp=drive_link",
          },
          {
            label: "Online earning 3",
            url: "https://drive.google.com/drive/folders/1XlCGSMsB6SnMuLCmjlz2uFo1fABaEYXN?usp=drive_link",
          },
          {
            label: "Online earning 4",
            url: "https://drive.google.com/drive/folders/1HWvM5xPJFWiuIhh83I45yQr_Cz7rzpAz?usp=drive_link",
          },
          {
            label: "Online earning 5",
            url: "https://drive.google.com/drive/folders/1lLobERaJLRNG4UOJy-HAu-yZy9fVs3Er?usp=drive_link",
          },
        ],
      },
      {
        title: "Money",
        links: [
          {
            label: "Money pack 1",
            url: "https://drive.google.com/drive/folders/1x2HQvcbXJNt3-AOhudDAmbdIhiaYleJT?usp=drive_link",
          },
          {
            label: "Money pack 2",
            url: "https://drive.google.com/drive/folders/1P6asiQ7VShzOaSa8BvSE2XhM1TGVQoPY?usp=drive_link",
          },
        ],
      },
      {
        title: "Science",
        links: [
          {
            label: "Science 1",
            url: "https://drive.google.com/drive/folders/1823fZiqwHlYoASANrEU6woYkFKktPSt9?usp=drive_link",
          },
          {
            label: "Science 2",
            url: "https://drive.google.com/drive/folders/1AV3Ot8UPd5Tex-SUVlYkKMo0T3P-EzBJ?usp=drive_link",
          },
        ],
      },
      {
        title: "TikTok",
        links: [
          {
            label: "TikTok pack 1",
            url: "https://drive.google.com/drive/folders/1E1NLyxpFGY5ef3-6qdZvRPBnp3kQLNaO?usp=drive_link",
          },
          {
            label: "TikTok pack 2",
            url: "https://drive.google.com/drive/folders/1GOzvsesmg5FN2i6RTX1T70kfRwDozyxa?usp=drive_link",
          },
          {
            label: "TikTok pack 3",
            url: "https://drive.google.com/drive/folders/18-tb-1jSh-tNzEIb3iwubh51uqIhfiZ1?usp=drive_link",
          },
        ],
      },
      {
        title: "Others (mixing)",
        links: [
          {
            label: "Mix pack 1",
            url: "https://drive.google.com/drive/folders/1gw03660GKEoFV5xUQa8rZE3z2xhJnQvm?usp=drive_link",
          },
          {
            label: "Mix pack 2",
            url: "https://drive.google.com/drive/folders/1uaMSIKKUQ91RPfu0T9dS5H-7rHx-j82d?usp=drive_link",
          },
          {
            label: "Mix pack 3",
            url: "https://drive.google.com/drive/folders/1pLHlmH5sMAiB2abr-9YYvctPt3wuZJRk?usp=drive_link",
          },
          {
            label: "Mix pack 4",
            url: "https://drive.google.com/drive/folders/1jWHVr3BNdsh20FPS5LkR0Ekhl-aEVTJY?usp=drive_link",
          },
          {
            label: "Mix pack 5",
            url: "https://drive.google.com/drive/folders/1AnCTdXs8Dtf3KEyO4gs6KLlzdeD4qg0K?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "tshirt",
    title: "T-Shirt Design Collections",
    description:
      "Print-ready artwork and themes for merch and print-on-demand stores.",
    folderUrl:
      "https://drive.google.com/drive/folders/1yUMdHbOpMdeP1gGpXeCKyD1jWNXwxoPP?usp=drive_link",
    sections: [
      {
        title: "Collections",
        links: [
          {
            label: "Collection 01",
            url: "https://drive.google.com/drive/folders/1yUMdHbOpMdeP1gGpXeCKyD1jWNXwxoPP?usp=drive_link",
          },
          {
            label: "Collection 02",
            url: "https://drive.google.com/drive/folders/1r5yOPM8oOakA6TcB7a8X_fCVSsbEMR-S?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "graphic",
    title: "Graphic Design Collections",
    description:
      "Creative Cloud and vector assets — Photoshop pack included; add more folder links as you publish them.",
    folderUrl:
      "https://drive.google.com/drive/folders/1tyneW67EXoORmoxH3J1gzYZHZ6RWNP22?usp=drive_link",
    sections: [
      {
        title: "Adobe & design apps",
        links: [
          {
            label: "Photoshop (PS) collection",
            url: "https://drive.google.com/drive/folders/1tyneW67EXoORmoxH3J1gzYZHZ6RWNP22?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "ebooks",
    title: "E-books & digital resources",
    description:
      "Value e-books plus plugins, templates, and growth resources you listed.",
    folderUrl:
      "https://drive.google.com/drive/folders/1bHuHio0rQXQikTmpvF0XZZNGgMIsjuLJ?usp=drive_link",
    sections: [
      {
        title: "E-books",
        links: [
          {
            label: "Value e-books",
            url: "https://drive.google.com/drive/folders/1bHuHio0rQXQikTmpvF0XZZNGgMIsjuLJ?usp=drive_link",
          },
        ],
      },
      {
        title: "Earning resources & templates",
        links: [
          {
            label: "WordPress plugins",
            url: "https://drive.google.com/drive/folders/119Y_ZYVgwe_qmS9aBsaJ1UOcytzIDfFz?usp=drive_link",
          },
          {
            label: "Business cards & CV templates 1",
            url: "https://drive.google.com/drive/folders/1MLHcyOYakcT3qc7kfaGNUpI-QstrbtA9?usp=drive_link",
          },
          {
            label: "Business cards & CV templates 2",
            url: "https://drive.google.com/drive/folders/1iuBMrjXnNU44yUyvvQhyk-9j-IzsBBEn?usp=drive_link",
          },
          {
            label: "Instagram growth course",
            url: "https://drive.google.com/drive/folders/1xy6u7fPo22Aarjlu1PTkdW4utrQr9xij?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "video",
    title: "Video Design Collection",
    description:
      "Overlays, motion elements, and video design packs across seven folders.",
    folderUrl:
      "https://drive.google.com/drive/folders/1K7Wyg0WPaIin9mCtHQMXV0n_3k7JqX0D?usp=drive_link",
    sections: [
      {
        title: "Video packs",
        links: [
          {
            label: "Video design 1",
            url: "https://drive.google.com/drive/folders/1K7Wyg0WPaIin9mCtHQMXV0n_3k7JqX0D?usp=drive_link",
          },
          {
            label: "Video design 2",
            url: "https://drive.google.com/drive/folders/18ps4Dv4cErBqljP8D5Yg5Te5CwFJtQb-?usp=drive_link",
          },
          {
            label: "Video design 3",
            url: "https://drive.google.com/drive/folders/1qPlEf-A-ui_140o781UD5O3i05nXNWK2?usp=drive_link",
          },
          {
            label: "Video design 4",
            url: "https://drive.google.com/drive/folders/19HwrH_JtKC-kZ3htRV5oV5Osv4XAAurq?usp=drive_link",
          },
          {
            label: "Video design 5",
            url: "https://drive.google.com/drive/folders/1MMamco9jtWC6jc3hcHdVBSJnDs0hoonT?usp=drive_link",
          },
          {
            label: "Video design 6",
            url: "https://drive.google.com/drive/folders/1WYZiZso4LthbJFsRJzz3bDSX3ioY_UCU?usp=drive_link",
          },
          {
            label: "Video design 7",
            url: "https://drive.google.com/drive/folders/1rV67M_pl6ATBxPagYxL3nfQKA3BYxjal?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "fonts",
    title: "Fonts Collection",
    description:
      "Six font library folders — display and body typefaces for branding and UI.",
    folderUrl:
      "https://drive.google.com/drive/folders/1F0WteNiJzxRO-btyQRzMRy---dcJq7Zm?usp=drive_link",
    sections: [
      {
        title: "Font libraries",
        links: [
          {
            label: "Fonts pack 1",
            url: "https://drive.google.com/drive/folders/1F0WteNiJzxRO-btyQRzMRy---dcJq7Zm?usp=drive_link",
          },
          {
            label: "Fonts pack 2",
            url: "https://drive.google.com/drive/folders/17XwHh59PNYLbQMmbqrwEjj9kbjDzwJLO?usp=drive_link",
          },
          {
            label: "Fonts pack 3",
            url: "https://drive.google.com/drive/folders/1XU6d18CdWvkU7UJrhuvGdFtPUbAsVdyv?usp=drive_link",
          },
          {
            label: "Fonts pack 4",
            url: "https://drive.google.com/drive/folders/1AsXKSMKg90ODphGgAE-ebrfkBGEjdSo8?usp=drive_link",
          },
          {
            label: "Fonts pack 5",
            url: "https://drive.google.com/drive/folders/1XCOOo50K7GS0qHjP408FDyGjKNh9DDlz?usp=drive_link",
          },
          {
            label: "Fonts pack 6",
            url: "https://drive.google.com/drive/folders/13-ZHTHITxLVXGld5tYIN5AAn-Eafbl_9?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "courses",
    title: "Education Courses",
    description:
      "English- and Sinhala-medium course materials in dedicated Drive folders.",
    folderUrl:
      "https://drive.google.com/drive/folders/1C_nWHwAE1uJNMBgBWCFkyfG6ujBm_xgd?usp=drive_link",
    sections: [
      {
        title: "Courses by medium",
        links: [
          {
            label: "English medium courses",
            url: "https://drive.google.com/drive/folders/1C_nWHwAE1uJNMBgBWCFkyfG6ujBm_xgd?usp=drive_link",
          },
          {
            label: "Sinhala medium courses",
            url: "https://drive.google.com/drive/folders/1jc476tEBt3IQBlSmRCa2QsEcSW_Tbc9l?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI Learning & Resources",
    description:
      "ChatGPT prompts on Drive plus Notion guides for prompts, Midjourney, and prompt engineering.",
    folderUrl:
      "https://drive.google.com/drive/folders/1d44FcnFUoMhX4uqhFpk3XAA3mD-GA_TR?usp=drive_link",
    sections: [
      {
        title: "Drive & Notion",
        links: [
          {
            label: "ChatGPT prompts (Drive)",
            url: "https://drive.google.com/drive/folders/1d44FcnFUoMhX4uqhFpk3XAA3mD-GA_TR?usp=drive_link",
          },
          {
            label: "2,500+ ChatGPT prompt templates (Notion)",
            url: "https://ignacio-velasquez.notion.site/2-500-ChatGPT-Prompt-Templates-d9541e901b2b4e8f800e819bdc0256da",
          },
          {
            label: "Midjourney AI guide (Notion)",
            url: "https://enchanting-trader-463.notion.site/Midjourney-AI-Guide-41eca43809dd4d8fa676e648436fc29c",
          },
          {
            label: "Prompt Engineering Mastery (Notion)",
            url: "https://closed-hyacinth-b7f.notion.site/Prompt-Engineering-Mastery-9b2e5d23d75c44abbaafdcaa00195dec",
          },
        ],
      },
    ],
  },
  {
    id: "software",
    title: "Premium Softwares",
    description:
      "Curated installers and collections — verify licensing for each item before use.",
    folderUrl:
      "https://drive.google.com/drive/folders/1iRlnalRKhjFja5_cDOOytFwzITns61fu?usp=drive_link",
    sections: [
      {
        title: "Collections",
        links: [
          {
            label: "Adobe collection 2025",
            url: "https://drive.google.com/drive/folders/1iRlnalRKhjFja5_cDOOytFwzITns61fu?usp=drive_link",
          },
          {
            label: "Operating systems",
            url: "https://drive.google.com/drive/folders/1zvGb3fLyLWXmpKZymG0O3jqIS7j1FztW?usp=drive_link",
          },
          {
            label: "Editing & multimedia",
            url: "https://drive.google.com/drive/folders/16_Cz46AVJVJ-NZ7xwQTLysNMkwrgV9hK?usp=drive_link",
          },
          {
            label: "Data recovery & security",
            url: "https://drive.google.com/drive/folders/1GIsOkNtp4R2oxDwekj30HEPbp-zSTiDF?usp=drive_link",
          },
          {
            label: "CorelDRAW collections",
            url: "https://drive.google.com/drive/folders/1ytDLFg5dni0-d_xjaWo_i7sZFeKy54K5?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "logo",
    title: "Logo Design Collection",
    description:
      "Two logo asset folders for marks, monograms, and identity starters.",
    folderUrl:
      "https://drive.google.com/drive/folders/1D8pULxA97Zli3Yp6Uo1h4e6gvVG3kcGy?usp=drive_link",
    sections: [
      {
        title: "Logo packs",
        links: [
          {
            label: "Logo collection 1",
            url: "https://drive.google.com/drive/folders/1D8pULxA97Zli3Yp6Uo1h4e6gvVG3kcGy?usp=drive_link",
          },
          {
            label: "Logo collection 2",
            url: "https://drive.google.com/drive/folders/1Kzy05qx0kjbbr_hib0tVxj6C6x7Q2JJW?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads Templates",
    description:
      "Creative and campaign templates for Google Ads projects.",
    folderUrl:
      "https://drive.google.com/drive/folders/1iCszo9D5wXT8hY2oY4qPy0BAYIIPmh39?usp=drive_link",
    sections: [
      {
        links: [
          {
            label: "Google Ads templates",
            url: "https://drive.google.com/drive/folders/1iCszo9D5wXT8hY2oY4qPy0BAYIIPmh39?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "gold-png",
    title: "Gold PNG Collection (8000+)",
    description:
      "High-shine gold textures and PNG elements across two mega folders.",
    folderUrl:
      "https://drive.google.com/drive/folders/10gnhGPrJq_DZEo4y01s7xPRPf7afH4Gk?usp=drive_link",
    sections: [
      {
        title: "Gold assets",
        links: [
          {
            label: "Gold PNG pack 1",
            url: "https://drive.google.com/drive/folders/10gnhGPrJq_DZEo4y01s7xPRPf7afH4Gk?usp=drive_link",
          },
          {
            label: "Gold PNG pack 2",
            url: "https://drive.google.com/drive/folders/1GKm8IQo2vzGFwOqlY0SuHZYR6QNYkXFG?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "lr-presets",
    title: "Lightroom Presets (9000+)",
    description:
      "Large preset libraries for portraits, travel, and product looks.",
    folderUrl:
      "https://drive.google.com/drive/folders/1Q8MhKUpWs5urs7jPPCpgXTiOwpnZOGG1?usp=drive_link",
    sections: [
      {
        title: "LR preset libraries",
        links: [
          {
            label: "LR presets pack 1",
            url: "https://drive.google.com/drive/folders/1Q8MhKUpWs5urs7jPPCpgXTiOwpnZOGG1?usp=drive_link",
          },
          {
            label: "LR presets pack 2",
            url: "https://drive.google.com/drive/folders/11xU3_-E0awhYXytMXEdVNg9xlJiobWOg?usp=drive_link",
          },
        ],
      },
    ],
  },
];
