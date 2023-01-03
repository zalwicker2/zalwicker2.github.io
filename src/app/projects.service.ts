import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export const projects = [
    {name: 'crying simulator', image: 'https://tr.rbxcdn.com/8b838daf50da8c7aa4e75776fdeef515/768/432/Image/Png',
    description: "My main project throughout late 2021 and all of 2022, crying simulator was originally a game I created just for fun. Someone gave me the idea of a game where you cry, and I made just that. The game recieved exponentially more attention and positive feedback than I ever could imagine, so I have been updating and monetizing it since the playerbase has expanded. In 2022, the game amassed over 1 million plays.",
    links: [
      {title: 'View on Roblox', icon: faCircleArrowRight, link: 'https://www.roblox.com/games/7070810903/crying-simulator'}
    ]},
    {name: 'Spotify Bracket', image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
    description: "A fun little project I made to practice working with APIs, the Spotify bracket takes a playlist given by the user and provides a bracket of 1 vs 1 matchups between songs to find the ultimate song on a particular playlist. It's been a lot of fun when played with friends, especially as debates heat up over which song is better.",
    links: [
      {title: 'View on Github', icon: faGithub, link: 'https://github.com/zalwicker2/spotify-bracket'}
    ]},
  ]