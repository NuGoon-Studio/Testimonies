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

## Challenges
### Sorting Testimonies
Mimicking the “fan out” approach
utilized by Twitter, I plan to create data stores for each tag. Testimony ids will be entered into these stores. In addition to the system design, predefined tag values will mitigate performance degradation across user-defined tags.

### Sharing Anonymously
Being able to share and read personal struggles and victories publicly is a powerful thing. However, there are many instances when a user may not want to share their identity. By combining a privacy flag and obfuscating posts we can provide users activity on their feed, prayer and encouragement without bearing the shame of what they have gone through.

### Backend Development
With direction from close colleagues, I’m excited to implement a RESTFUL API from the ground up. My experience with the backend has been reserved to a handful of routes and modification of existing routes. The limited scope of the project allows for the growth of my abilities as an engineer. This will officially transition my skillset from frontend to full stack engineer.

## Conclusion
### Inspiration
During the job hunt process like many other hard moments in life it’s encouraging to connect and hear stories of others who have gone through a similar process. With this products mission and the opportunity grow as a engineer I am looking forward to providing real hope amidst the trial of day to day life.

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
      <li> Route 53 </li>
      <li>EC2: Frontend</li>
      <li>EC2: Backend </li>
      <li>EC2: MongoDB</li>
    </ul></td>
  </tr>
</table>
