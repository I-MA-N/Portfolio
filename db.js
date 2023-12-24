const sections = [
    {
        "id": 1,
        "name": "Intro",
        "href": "#intro",
        "color": "#fb923c",
        "icon_light": "/src/assets/icons/header-icons/icon-home_light.svg",
        "icon_dark": "/src/assets/icons/header-icons/icon-home_dark.svg"
    },
    {
        "id": 2,
        "name": "Skills",
        "href": "#skills",
        "color": "#22c55e",
        "icon_light": "/src/assets/icons/header-icons/icon-bulb_light.svg",
        "icon_dark": "/src/assets/icons/header-icons/icon-bulb_dark.svg"
    },
    {
        "id": 3,
        "name": "Projects",
        "href": "#projects",
        "color": "#0ea5e9",
        "icon_light": "/src/assets/icons/header-icons/icon-case_light.svg",
        "icon_dark": "/src/assets/icons/header-icons/icon-case_dark.svg"
    },
    {
        "id": 4,
        "name": "Contact",
        "href": "#contact",
        "color": "#facc15",
        "icon_light": "/src/assets/icons/header-icons/icon-contact_light.svg",
        "icon_dark": "/src/assets/icons/header-icons/icon-contact_dark.svg"
    }
]

const skills = [
    {
        "id": 1,
        "name": "html 5",
        "src": "/src/assets/icons/html.png",
        "size": "70%",
        "stars": 5
    },
    {
        "id": 2,
        "name": "css 3",
        "src": "/src/assets/icons/css.png",
        "size": "70%",
        "stars": 5
    },
    {
        "id": 3,
        "name": "javascript",
        "src": "/src/assets/icons/js.png",
        "size": "65%",
        "stars": 5
    },
    {
        "id": 4,
        "name": "react",
        "src": "/src/assets/icons/react.png",
        "size": "100%",
        "stars": 4
    },
    {
        "id": 5,
        "name": "tailwind css",
        "src": "/src/assets/icons/tailwindcss.png",
        "size": "85%",
        "stars": 5
    },
    {
        "id": 6,
        "name": "git & github",
        "src": "/src/assets/icons/git.png",
        "size": "95%",
        "stars": 3
    },
    {
        "id": 7,
        "name": "bootstrap",
        "src": "/src/assets/icons/bootstrap.png",
        "size": "90%",
        "stars": 4
    },
    {
        "id": 8,
        "name": "blender",
        "src": "/src/assets/icons/blender.png",
        "size": "90%",
        "stars": 3
    },
]

const projects = [
    {
        id: 1,
        name: "Bloody HomePage",
        link: "https://i-ma-n.github.io/Bloody-homepage/",
        image: "/src/assets/images/projects/bloody.png",
        description: "Landing page of bloody with a few changes. Responsive, without using any library or framework, pure css. Compare with <a href='https://www.bloody.com/en/' style='border-bottom: 2px solid #000000e6; padding-bottom: 2px; cursor: url(/src/assets/images/cursor-pointer2.png), auto;'>main bloody</a> site!",
        isHot: true
    },
    {
        id: 2,
        name: "Music Player",
        link: "https://i-ma-n.github.io/Music-Player/",
        image: "/src/assets/images/projects/music-player.png",
        description: "Play/Pause music, change time & listen! Beautiful UI, Also with light/dark theme!",
        isHot: false
    },
    {
        id: 3,
        name: "NFT Marketplace",
        link: "https://i-ma-n.github.io/NFT-Marketplace/",
        image: "/src/assets/images/projects/nft.png",
        description: "Attractive & Complete marketplace! Detailed design with perfect layout. Static data but multiple pages. UI can be used as e-commerce website!",
        isHot: true
    },
    {
        id: 4,
        name: "Fitness Club",
        link: "https://i-ma-n.github.io/Fitness-Club/",
        image: "/src/assets/images/projects/fitness.png",
        description: "Bodybuilders need gym? Fitness club homepage is ready to serve you! Bootstrap framework used to build(Persian version).",
        isHot: true
    },
    {
        id: 5,
        name: "Web Calculator",
        link: "https://i-ma-n.github.io/Web-Calculator/",
        image: "/src/assets/images/projects/calculator.png",
        description: "A simple calculator made with Html, Css and Javascript.",
        isHot: false
    },
    {
        id: 6,
        name: "Coffee Teria",
        link: "https://i-ma-n.github.io/Coffee-Teria/",
        image: "/src/assets/images/projects/coffee.png",
        description: "Beautiful landing page, introducing a coffee shop. Static site using bootstrap. Every component you need for your webstie is there!",
        isHot: true
    },
    {
        id: 7,
        name: "Profile Card",
        link: "https://i-ma-n.github.io/Profile-card/",
        image: "/src/assets/images/projects/profile-card.png",
        description: "A simple profile card with simple animations. Hover on card to see them. A small part of the power of css!",
        isHot: false
    },
]

const socials = [
    {
        id: 1,
        link: "https://t.me/IMAN_MOS",
        text: "@IMAN_MOS",
        image_light: "/src/assets/icons/social-media/icon-telegram_light.png",
        image_dark: "/src/assets/icons/social-media/icon-telegram_dark.png",
    },
    {
        id: 2,
        link: "https://github.com/I-MA-N",
        text: "I-MA-N",
        image_light: "/src/assets/icons/social-media/icon-github_light.png",
        image_dark: "/src/assets/icons/social-media/icon-github_dark.png",
    },
    {
        id: 3,
        link: "https://www.instagram.com/imn_mos",
        text: "imn_mos",
        image_light: "/src/assets/icons/social-media/icon-instagram_light.png",
        image_dark: "/src/assets/icons/social-media/icon-instagram_dark.png",
    },
    {
        id: 4,
        link: "mailto:imn.s901386@gmail.com",
        text: "imn.s901386@gmail.com",
        image_light: "/src/assets/icons/social-media/icon-gmail_light.png",
        image_dark: "/src/assets/icons/social-media/icon-gmail_dark.png",
    },
]

export { sections, skills, projects, socials }