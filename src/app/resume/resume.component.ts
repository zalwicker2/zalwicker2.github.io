import { Component } from '@angular/core';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { Experience } from './experience.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  education: Experience[] = [
    {
      title: 'Computer Science, B.S. | 3.84 GPA',
      start: 'August 2019',
      end: 'December 2022',
      description: 'Graduated Magna Cum Laude and with Capital Scholars Honors. Served as president for the Phi Kappa Tau fraternity for one year.',
      bonus: 'University of Illinois at Springfield'
    }
  ]
  work_experience: Experience[] = [
    {
      title: 'Senior Web Development Intern @ UIS Web Services',
      start: 'September 2022',
      end: 'December 2022',
      description: 'Primarily worked on developing the UIS app in React Native. Used Google Analytics, GTM, and Google Optimize to run A/B tests and track site data. Worked with pulling data from web APIs, including Canvas LMS API and Twitter API.',
    },
    {
      title: 'Application Software Development Intern @ Shure Incorporated',
      start: 'May 2022',
      end: 'August 2022',
      description: 'Used Qt and C++ to work on the Wireless Workbench project. Developed an auto-update using third party libraries. Became familiar with Angular, CMake, C++, and TypeScript.',
    },
    {
      title: 'Junior Web Development Intern @ UIS Web Services',
      start: 'November 2021',
      end: 'May 2022',
      description: 'Assisted with the migration from WordPress to Drupal 9, while focusing on the content architecture, site usability, and accessibility. Worked with Google Analytics suite to track and interpret various metrics. Promoted to Senior Web Development Intern at conclusion.',
    },
    {
      title: 'Code Sensei @ Code Ninjas Algonquin',
      start: 'August 2018',
      end: 'August 2021',
      description: 'Helped kids follow the programming curriculum at Code Ninjas, answered questions that kids have, helped them debug their programs. Also planned and taught five summer camps, centered around Roblox, JavaScript, and website development.',
    },
    {
      title: 'Curriculum Developer @ Code Ninjas',
      start: 'October 2020',
      end: 'December 2020',
      description: 'Developed a curriculum for a programming-based summer camp that would be distributed to Code Ninjas franchises around the country. Gained a great deal of experience in Microsoft Office and understanding essential programming concepts.',
    },
  ]
  work_freelance: Experience[] = [
    {
      title: 'Happy Deals',
      start: 'January 2023',
      end: 'Present',
      description: 'Worked with NodeJS, JavaScript, and the Puppeteer library to scrape product info from 40 websites and store them in MongoDB. Also worked on developing a Chrome extension with Vue.js using the data from MongoDB.',
    },
    {
      title: 'crying simulator',
      start: 'July 2021',
      end: 'Present',
      description: 'Planned and designed a game for the Roblox platform. Created all aspects of the game: code, UI, 3D world, and artwork. Currently standing at 1.8 million plays. Check out ',
      end_info: {
        link: 'https://www.roblox.com/games/7070810903/crying-simulator',
        text: 'crying simulator on Roblox.'
      }
    },
    {
      title: 'Spotify Bracket',
      start: 'December 2021',
      end: 'Present',
      description: 'Working with Angular, Express and the Spotify API to create March-Madness style brackets for Spotify playlists. Used Azure to launch the front and back end. Check out the ',
      end_info: {
        link: 'https://spotify-bracket-frontend.azurewebsites.net/',
        text: 'Spotify Bracket.'
      }
    },
  ]
}
