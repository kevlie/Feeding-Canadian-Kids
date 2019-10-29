# Feeding Canadian Kids: Unified Platform for Services
> Alternative Names: 
Feeding Canadian Kids: Online Features Framework,
Feeding Canadian Kids: Unified Platform for Services,
Feeding Canadian Kids: Electronic Real-time Solutions,
Feeding Canadian Kids: Electronic Systems,

> _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).
 > Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as an agreement between your team and your partner.**

## Product Details
 
#### Q1: What are you planning to build?
 
Our product is a mobile-friendly website that will provide a centralized platform for registration and communication between FCK staff, restaurants, and programs.

Presently, there are several existing problems: An immense amount of resources are spent communicating between Program and Restaurant Partners to ensure that all parties involved have agreed upon and are clear about the goals, tasks, locations, etc. There is currently no central platform and it is not always easy for all parties to communicate in an efficient and organized manner. 

The mobile-friendly website will centralize communication and management tasks to enable FCK to spend less time managing and communicating with partners, and more time expanding the project nationally. Additionally, our product will provide partners with synchronized, up-to-date, and relevant information that they need for their operations. 

With the help of our website, prospective partners and restaurants will have a streamlined application process. Some common use cases are as follows:
 - FCK staff will have an organized and centralized hub to keep track of current and prospective partners’ statuses and details. 
 - FCK staff can approve certain fields of the application and provide feedback through the website, and applicants will be automatically informed about their status. Applicants can also check the progress of their application on a single page. 
 - Once approved and registered, partners can view their information and obligations by logging on to their profile.


#### Q2: Who are your target users?
   
+ Restaurant Partners:
  - Restaurants that work closely with FCK staff members and use the Uber Eats app to accept orders from program partners. 
+ Program Partners: 
  - After school programs for children that the project serves. 
  - Although program partners use the Uber Eats app to place orders, verify payment profiles, confirm address selection, etc., there is also a great amount of back-and-forth between FCK and the program partners to ensure that weekly orders are received on time.
+ Prospective Restaurant Partners: 
  - Restaurants that want to become Restaurant Partners and support underprivileged children.
  - Restaurants that have lots of leftovers they want to donate instead of just throwing it away.
+ Prospective Program Partners: 
  - After school programs with an identified need for a nutritious dinner delivery service that are seeking such services.
+ Feeding Canadian Kids Staff:
  - Feeding Canadian Kids staff who manages the daily operations such as verification, restaurant and program matching, and screening.

See [User Stories](#abcd) for details about their needs. 

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?
    
Our product will lessen the manual workload of FCK staff, allowing them to focus less on micro management of numerous different local documents, and more on expansion of the project to those in need. 
The current system uses Google Forms to accept applications responses, staff members then use Microsoft Excel to manually record potential partners’ responses separately. FCK staff members then manually contact applicants individually to provide them next steps in the approval process. Restaurants and Programs do not have a way to easily access up-to-date information about their partner.
+ There will be automated emails that detail the verification/screening/approval process and timeline. Automating part of the application process will significantly reduce the time and effort of FCK staff members and allow the FCK team to process applications more quickly, improving the scalability of the project. 
+ There will be registration forms that partners can use to register. The forms will help to reduce manual efforts by capturing and recording directly through the website in a streamlined manner, completely automatically. 
+ With a central platform that stores all relevant information about restaurants and programs on a database, FCK staff can easily query, sort, and update such information in one place.
+ Restaurant Partners can view the number of meals they need to provide, at what time, to which location in one place. Currently, restaurants rely on reminders from FCK staff or need to keep track of such information on their own, locally. Our website will make sure this information is easily viewable and synchronized between programs and restaurants.
+ Program Partners can view how many meals they can still request, at what time, and from which restaurant. Currently, programs rely on reminders from FCK staff or need to keep track of such information on their own, locally. Our website will make sure this information is easily viewable and synchronized between programs and restaurants.

#### Q4: How will you build it?

 * Short (1-2 min' read max)
 * What is the technology stack? Specify any and all languages, frameworks, libraries, PaaS products or tools. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they?
 * What is your testing strategy?
 
Technology stack: Python, Javascript, Node.js, Express, mySQL database, React, Bootstrap, Amazon SES.

Frontend: Javascript+React+Bootstrap.

Backend Framework: Node.js + Express, mySQL database.

Deployment: scp to AWS EC2 instances from local machine; since we will rarely be deploying we will scp from our local machine to an EC2 instance to deploy. The opportunity cost of configuring a deployment CI is not worth it for the few deploys we will be doing.

Third party interface: Amazon SES SMTP for automated email.

Testing: Will be using Postman for manual testing, Mocha for unit tests on our backend, front end will be manually tested and Jest will be used for unit tests. 

We will have two backend servers that we will be using one will be our own backend server and the other will be an AWS SES instance which will be hit by our front end when automated emails need to be sent.

We will have the following endpoints (may update the params or add more endpoints as needed): 
+ GET validate_login; used for when a user logs in
+ POST register_restaurant; used for when a new restaurant registers
+ POST register_program; used for when a new program resisters
+ GET program_delivery_dates PARAMS: program_id; shows 
+ GET resturant_delivery_dates PARAMS: restaurant_id
+ GET remaining_meals PARAMS: restaurant_id, date
+ GET paired_restaurants PARAMS: program_id
+ GET paired_programs PARAMS: restaurant_id
+ GET program_info PARAMS: program_id
+ GET restaurant_info PARAMS: restaurant_id
+ GET pending_program_applications
+ GET pending_restaurant_applications
+ GET view_application PARAMS: application_id
+ PUT update_registartion_status PARAMS: resturant_id
+ POST delivery_status PARAMS: resturant_id

#### Q5: What are the user stories that make up the MVP? <a name="abcd"></a>
 
+ As a user, I want to have login credentials so I can securely access my account profile.
  - AC: each user must have their own unique login credentials which only they can use to access their accounts.
+ As an administrator, I want to be notified of new partner requests so I can review and approve them quickly.
  - AC: When a new partner request is added it should be reflected on the page of all Admin users.
+ As an administrator, I want to be able to review and process new partner requests so I can easily add more members in a single, organized place.
  - AC: Admin users will have the ability to click a button on a applicant's application to accept/decline them.
+ As a FCK staff member, I want to easily view the pool of applicants and their information so I can better pair restaurants with programs.
  - AC: FCK staff users should be able to view all program applicant info and all restaurant info.
+ As a FCK staff member, I want to be able to see whether restaurants are fulfilling their commitments so I know when I should intervene and adjust allocation and pairings if necessary.
  - AC: Programs users should be able to update how their delivery went (i.e. if they got the amount of food that was expected) and FCK staff users should be able to view these updates
+ As a restaurant partner, I want to know how much food I need to send to my partner program so I can plan ahead.
  - AC: Restaurant partners should be able to easily view the amount of food they committed to in their application for each day.
+ As a potential restaurant partner, I want to know the status of my application so I can be assured that it is under review, and also get to know my required actions. 
  - AC: restaurant users should be able to view their application status and any feedback given by FCK staff members.
+ As a prospective restaurant/program partner, I want a streamlined application form in a central place so I can join the Feeding Canadian Kids project easily.
  - AC: proospective restaurant/program partners should be able to submit a form that requests all the required information to apply on the website.
+ As a partner, I want to know how much food im receiving and which restaurant is providing it so I can plan ahead.
  - AC: Program partners should be able to view the amount of food that the partners they’ve been paired with have committed to them. 
+ As a new partner, I want to see trainining resources after I am verified by FCK, so I can start delivering meals/receiving meals as soon as possible.
  - AC: New program/restaurant partners should have access to a page that contains to links to training materials after they have been verified by FCK staff. 

----

## Process Details

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)
 
Roles: 
+ Product Manager
  - Sets roadmap (prioritization and planning)
  - Defines features
  - Communicate with Partner to ensure product meets Partner’s demands
+ Developer
  - Contributes to frontend
  - Contributes to backend
  - Code Reviews
+ Quality Assurance
  - Code Reviews
  - Manual Testing

We will be alternating who does which role, no one person will always do a single role.

Team members:
+ Ali Muntasir:
  - Responsibilities: Developer, QA, Product Manager (alternating roles)
  - Strengths: Python, JavaScript, SQL
  - Weaknesses: Frontend
+ Christina Wang:
  - Responsibilities: Developer in frontend/backend, QA
  - Strengths: Python, JavaScript, SQL
  - Weaknesses: React, Express, Bootstrap
+ Dhruvasu Bhatia:
  - Responsibilities: Developer in frontend and backend, QA
  - Strengths: Python, Javascript, SQL
  - Weaknesses: Amazon SES, Frontend, Node.js
+ Ibrahim Farooq:
  - Responsibilities: developer in frontend and backend
  - Strengths: Python, JavaScript, Bootstrap, Node.js
  - Weaknesses: React, Express, mySQL
+ Kelvin Fan:
  - Responsibilities: APIs, participate in both frontend and backend
  - Strengths: JavaScript, Express, working with new technologies
  - Weaknesses: poor prioritization, React
+ Kevin Lie:
  - Responsibilities: Developer (frontend and backend), QA
  - Strengths: Python, Bootstrap, SQL, Javascript
  - Weaknesses: Express, Amazon SES, Frontend, Node.js
+ Stephen Utama:
  - Responsibilities: Developer, QA, Product Manager
  - Strengths: Python, Javascript, Bootstrap, SQL
  - Weaknesses: React, Express, Amazon SES


#### Team Rules

We have a fun and relaxed working culture.

Communications:
For communication within team, we will mainly use Facebook Messenger to discuss and share things, and whenever a group member has a problem, other members can answer and help. Also, we will use Trello to keep track of tasks and the progress of each group member. 
For communication with our partner, we agreed to meet in person once every two weeks on Wednesdays. During each meeting, we will ask our project partner when she’s available next time to meet up and book a room in Gerstein in advance and meet there. In addition, we will send emails when there is something that we have to communicate with the partner to make sure that we are on the right track.
 
Meetings:
We will keep meeting minutes in a Google doc so that everybody can get to know what was discussed during the meeting and the corresponding decisions. For action items, we will use task tracking software such as Trello in order to ensure everyone knows what to do. Members can mark tasks with tags such as not started, in progress or done to show the progress, and also make checklists so that other people know what has been done for a task and which step the member is currently working on. Anyone experiencing difficulties can contact the rest of the group via messenger. Members must attend all regular meetings.
 
Conflict Resolution:
+ Indecisions:
  - Since our primary source of communication is Messenger, in case the team hits a point where no one is able to come to a conclusion, an effort will be made to schedule a meeting ASAP to ensure that everyone is on the same page. 
+ Decision-making policy:
  - Whenever someone has an idea, he/she must be able to come up with valid reasons to back it up if others do not agree with them. Voting (via poll on messenger) will be our typical solution. If there is a tie, Adam will be the tie-breaker. 
+ Distribution of tasks:
  - We will schedule face to face meetings (one hour before/after tutorial on Tuesdays). They are essential when working on the project because they act as a push factor in making everyone contribute and avoid slacking off. We will also set a deadline for each action item, where the assigned person/sub-group can ask for help if they encounter any difficulties before it is too late. For this to work, we will assess each team member’s skills before delegating tasks. 
+ Non-responsive team members:
  - We will remind ourselves of the importance of this project (worth 50% and FCK’s belief in us) and address the unresponsiveness in an effective and positive way. This, again, can be done by scheduling a meeting so that the individual(s) can express their concerns/opinions and get feedback in a quicker manner. In the unlikely scenario that a team member’s non responsive attitude persists, we will contact a TA. 


#### Events 
We will schedule regular face to face meetings (one hour before/after tutorial on Tuesdays). These regular meetings will be where we make and review weekly plans. The first 15 minutes of these meetings will serve as a “stand up meeting” in the agile process. We will get up to date with the current tasks and resolve issues. After we get updated on each member’s progress, we will create the next weekly plan and assign tasks to each member for the week. After each member is assigned tasks, we will go over all the assignments as a group, and decide whether such assignments will allow us to meet our final goal on time, and make adjustments if necessary. 

When a lot of decisions need to be made and discussions are essential in between weekly regular meetings, we will raise a poll and choose a time when most people are available, and for the best case everybody can be present. These meetings can be online or on campus, depending on availability. 

The assigned tasks will be updated on Trello, so the entire team can see every team member’s progress at any time. Code reviews will be done online, at members' request. 
In addition to in person meetings, we will be regularly communicating in the Messenger group chat. 

#### Partner Meetings
Our first meeting with partner was held in Gerstein on October 9th which lasted for about one hour. For the planning meeting, we came up with all the questions that needed to be asked in advance. And the first meeting was mainly on the sharing of the overall idea. Our partner introduced the main operations of Feeding Canadian Kid and how everything is done currently in FCK as well as the main requirements for this project. Then we raised our questions and concerns: what are we exactly building, what users are we targeting, what each kind of users need to access from our website, when an email is triggered, what should the manager manage on our website, how large is the scale that we need to support, how the food is allocated, etc.  We discussed a lot of things, through the process, we get to know the project requirements better and we know more about what is needed to be accomplished. 


#### Artifacts
Trello is a great platform for sharing the group to-do lists. All of the artifacts will be done on Trello including the to-do lists, task boards and schedules. During our discussion, we will figure out the tasks that need to be done, and put them on Trello, where we can keep track of them. Some tasks may be the prerequisites of further tasks, so we will prioritize the prerequisites. Moreover, tasks on main features will be prioritized over task on extension features. The distribution of tasks will be done based on the roles of our team members, as well as the strengths and weaknesses so that we can make full use of everybody’s strengths. After tasks get assigned, corresponding information will be marked on Trello so that the distribution can been seen more clearly.

----
### Highlights

When considering how to divide our roles, one choice is to separate the team into two groups including a frontend group and a backend group. If we do like this, the tasks of two groups are divided clearly and the two groups will develop separately. However, this choice may cause some problems when connecting frontend and backend, and team members will only get some practice in only one part. The other choice is not separating frontend and backend, we may work together on one part and then the other. In this way, our team members get more practice and experience in both frontend and backend development and we will connect the two parts more easily without causing link up problems. In the end, our members wish to learn more on both parts, so we decided to take the second way.

While deciding upon what tech stack to use, we held a relatively lengthy discussion to understand what technologies each team member is comfortable with. For back-end/server-side, the team first decided to use Golang but after further consideration and realizing that most of the members are willing to further learn JavaScript, we decided to choose Node.js and Express.js instead. Similarly for front-end development, the team at first was inclined to only use HTML/CSS and Bootstrap but since the members wish to make this project a better learning experience, we decided to include React.js as well. 

In the beginning, there was a slight confusion as to how the team members should collaborate with each other. For example, we were unsure about how often face-to-face meetings must be held, and what the appropriate time slots would be for the meetings such that everyone is able to attend. We finally came to the conclusion to mimic the Agile development process as much as possible. Keeping that in mind, we decided to use Trello which provides a table like format to divide the development process effectively. Every member will refer to the table and initiate any of the available tasks, or start a new one. Along with that, we also decided to schedule team meetings every week, where the first 15 minutes will be dedicated in understanding what contributions each member has made in the past week. The rest of the meeting will focus on planning for the tasks to be completed in the coming days. Moreover, the team will also ensure that our partner is kept updated regularly through emails and by scheduling a meeting every two weeks.

