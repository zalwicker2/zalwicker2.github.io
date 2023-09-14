import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export const projects = [
  {
    name: 'YouTube Shorts Remover', image: 'https://lh3.googleusercontent.com/SiESlW2RApAgLCDts1McT3CqJkKPXIk0VxISw1_e7XSIvbxaMfESDcUzQJSEP5kCYYgj_Ur23o5ayl3Dfmsft1XIHQ=w128-h128-e365-rj-sc0x00ffffff',
    imageType: "contain",
    description: "A quick little project I made because I hate being recommended short-form videos on YouTube. The extension removes all shorts content from YouTube on the page. I went back and modified it a few months after creating it to add in a settings option, where users can also disable upcoming videos, mixes, and other things I don't like on the site.",
    links: [
      { title: 'View on GitHub', icon: faGithub, link: 'https://github.com/zalwicker2/noshorts-ext' }
    ]
  },
  {
    name: 'crying simulator', image: 'https://tr.rbxcdn.com/051b6ba399076e608b12e0ea9fdeaf67/768/432/Image/Png',
    imageType: "cover",
    description: "My main project throughout late 2021 and all of 2022, crying simulator was originally a game I created just for fun. Someone gave me the idea of a game where you cry, and I made just that. The game recieved exponentially more attention and positive feedback than I ever could imagine, so I have been updating and monetizing it since the playerbase has expanded. In 2022, the game amassed over 1 million plays.",
    links: [
      { title: 'View on Roblox', icon: faCircleArrowRight, link: 'https://www.roblox.com/games/7070810903/crying-simulator' }
    ]
  },
  {
    name: 'Spotify Bracket', image: 'https://i.imgur.com/p86OJ3u.png',
    imageType: "cover",
    description: "A fun little project I made to practice working with APIs, the Spotify bracket takes a playlist given by the user and provides a bracket of 1 vs 1 matchups between songs to find the ultimate song on a particular playlist. It's been a lot of fun when played with friends, especially as debates heat up over which song is better.",
    links: [
      { title: 'Try It', icon: faCircleArrowRight, link: 'https://spotify-bracket-frontend.azurewebsites.net/' }
    ]
  },
  {
    name: 'UIS App', image: 'https://www.uis.edu/sites/default/files/styles/original/public/inline-images/UIS-mobile-app.jpg.webp?itok=qny6Rn5g',
    imageType: "contain",
    description: "In my last semester at UIS, I worked on the team to develop the UIS Mobile App. I was part of the initial planning and research phase, along with having built demos from the ground-up using React Native. These demos included the use of several APIs, including Canvas LMS and Twitter, alongside various styling and format decisions.",
    links: [
      { title: 'View the UIS Mobile App Page', icon: faCircleArrowRight, link: 'https://www.uis.edu/uis-mobile-app' }
    ]
  }
]