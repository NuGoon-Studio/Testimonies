Testimonies.Social
====================================================================================================================================
📲 Sharing stories of faith.

## Overview
### Intro
Testimonies.Social is a mobile application to share the gospel through our individual experiences. By sharing our personal stories of faith, perseverance and trial we can inspire and encourage others going through similar situations. Our goal is for users to receive hope, receive prayer and be found by others seeking the same. 🙏🙏🙏

### Key Features
- Sharing testimonies publicly and anonymously.
- Finding testimonies through a tag search system. 
- Paticipating in testimonies of gratitude and prayer. 
- Following ongoing testimonies you can pray for.

### Additional Material
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/1200px-Canva_icon_2021.svg.png?20220821125247" width="20" height="20" alt="Canva" /> <a href="https://www.canva.com/design/DAF0WghOB58/8bt4_87FLKZgUkNGUf9CcQ/view?utm_content=DAF0WghOB58&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noreferrer">Original project write up</a>  
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="20" height="20" alt="Figma" /> <a href="https://www.figma.com/proto/DWuZCxqD7rb71v1oZk8VyQ/testimonies?type=design&node-id=90-30734&t=IhHsr4DN5i1xeEAP-0&scaling=scale-down&page-id=21%3A21821&starting-point-node-id=90%3A30734" target="_blank" rel="noreferrer">Design prototype</a>

<img src="https://i.imgur.com/BDroZmP.png" width="1000" height="300" alt="3 Panel Mock Up" />

## Roadmap
### Goals
🧑‍🤝‍🧑 As a user I want to...  
- Feel like I'm not alone in my struggle.
- Feel inspired by others' victories.
- Help others with my story.
- Point people to the Lord.
- Feel part of a community who wants to do more for others.
- Feel accepted.
- Find hope in my trial.
- Be found.

🧑‍💻 Some technical goals include:
- Showcase my ability as an engineer unencumbered by client NDA's
- Share 3 React Native Web templates without Expo
- Share a fully built mobile application frontend
- Test React Native for Web's viability in a production level application
- Learn Devops from scratch
- Master Backend development from scratch

### Progress
Not all progress of the project is reflected here in this repository. The backend will be a private repository and dev ops work such as configure and CI/CD will also be private. For convience however I have included the status' of those aspects of the project in this document. The list of items will grow but remain mostly high level.

<table>
  <tr>
    <th> Frontend </th>
    <th> Backend </th>
    <th> DevOps </th>
  </tr><tr>
    <td><ul>
      <li>✅ <a href="https://github.com/rayraydejesus/React-Native-Web-Bare-Template" target="_blank" rel="noreferrer">Template - React Native Web Bare</a> (No Expo)</li>
      <li>✅ <a href="https://github.com/rayraydejesus/React-Native-Web-Navigation-Template" target="_blank" rel="noreferrer">Template - React Native Web w/ React Navigation</a> (No Expo)</li>
      <li>Template - React Native Web w/ React Navigation, Redux and Redux Sagas</li>
      <li> Document Templates </li>
      <li>✅ React Native without Expo Project</li>
      <li>✅ Integrate React Navigation</li>
      <li>Integrate Redux</li>
      <li>Integrate Redux Sagas</li>
      <li>Refactor React Navigation for Redux</li>
      <li>Integrate component library - TBD which library</li>
      <li>Push live to web for active progress</li>
      <li>Build application with local mock data</li>
      <li>Connect application to API</li>
      <li>Publish application to iOS app store</li>
      <li>Publish application to android play store</li>
    </ul></td>
    <td><ul>
      <li>Node.js Server Setup</li>
      <li>Express.js Integration</li>
      <li>MongoDB Setup</li>
      <li>MongoDB Schema Config</li>
      <li>Integrate Authenication - TBD which tech</li>
      <li>Build application routes</li>
    </ul></td>
    <td><ul>
      <li>✅ Purchase relative domains</li>
      <li>✅ AWS Organizaional Structure</li>
      <li>✅ AWS Permission Sets</li>
      <li>✅ AWS IAM Groups</li>
      <li>✅ AWS IAM Users</li>
      <li>✅ AWS Billing Config</li>
      <li>✅ AWS CLI Config</li>
      <li>Route 53 Domain Setup</li>
      <li>EC2 - Frontend</li>
      <li>EC2 - Backend</li>
      <li>EC2 - MongoDB</li>
      <li>CI/CD Pipeline - Frontend</li>
      <li>CI/CD Pipeline - Backend</li>
    </ul></td>
  </tr>
</table>

### Technology
<table>
  <tr>
    <th> Frontend </th>
    <th> Backend </th>
    <th> DevOps </th>
  </tr><tr>
    <td><ul>
      <li>React Native Web</li>
      <li>React Navigation</li>
      <li>Redux</li>
      <li>Redux Sagas</li>
    </ul></td>
    <td><ul>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MongoDB</li>
    </ul></td>
    <td><ul>
      <li>AWS</li>
      <li>Route 53 Routing</li>
      <li>Kubernetes Master ECR</li>
      <li>Kubernetes Service Node EC2</li>
      <li>Docker Pod: Frontend</li>
      <li>Docker Pod: Backend</li>
      <li>Docker Pod: MongoDB</li>
    </ul></td>
  </tr>
</table>

## Challenges
### Sorting Testimonies
Mimicking the “fan out” approach
utilized by Twitter, I plan to create data stores for each tag. Testimony ids will be entered into these stores. In addition to the system design, predefined tag values will mitigate performance degradation across user-defined tags.

### Sharing Anonymously
Being able to share and read personal struggles and victories publicly is a powerful thing. However, there are many instances when a user may not want to share their identity. By combining a privacy flag and obfuscating posts we can provide users activity on their feed, prayer and encouragement without bearing the shame of what they have gone through.

### Backend Development
With direction from close colleagues, I’m excited to implement a RESTFUL API from the ground up. My experience with the backend has been reserved to a handful of routes and modification of existing routes. The limited scope of the project allows for the growth of my abilities as an engineer. This will officially transition my skillset from frontend to full stack engineer.

## Usage
### Installation
Navigate to the folder you want to store things and clone the repository
```bash
git clone https://github.com/NuGoon-Studio/Testimonies.git
```

### Setup
Install the dependencies with yarn
```bash
# using Yarn
yarn install
```

### Running Application
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ , _iOS_ or _Web_ app:

### For Android
```bash
# using Yarn
yarn android
```

### For iOS
```bash
# using Yarn
yarn ios
```

### For Web
```bash
# using Yarn
yarn web

# Web App hosted on http://localhost:8080/
```
### Validating Types
```bash
# using Yarn
yarn tsc
```

### Your turn
Feel free to play around with the project yourself. Edit and modify however. The entry point has been modified to <strong><em>src/App.tsx</em></strong> with the <strong><em>web/public/index.html</em></strong> being another noteworthy file within the project.

## Conclusion
### Inspiration
During the job hunt process like many other hard moments in life it’s encouraging to connect and hear stories of others who have gone through a similar process. With this products mission and the opportunity grow as a engineer I am looking forward to providing real hope amidst the trial of day to day life.
