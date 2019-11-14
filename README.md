# Feeding Canadian Kids: Unified Platform for Services
## Description 
Our product is a mobile-friendly website that will provide a centralized platform for registration and communication between Feeding Canadian Kids (FCK) staff, restaurants, and programs.

Presently, there are several existing problems: An immense amount of resources are spent communicating between Program and Restaurant Partners to ensure that all parties involved have agreed upon and are clear about the goals, tasks, locations, etc. There is currently no central platform and it is not always easy for all parties to communicate in an efficient and organized manner.

The mobile-friendly website will centralize communication and management tasks to enable FCK to spend less time managing and communicating with partners, and more time expanding the project nationally. Additionally, our product will provide partners with synchronized, up-to-date, and relevant information that they need for their operations.


## Key Features
With the help of our website, prospective partners and restaurants will have a streamlined application process. Some key high level features are as follows:

- FCK staff will have an organized and centralized hub to keep track of current and prospective partners’ statuses and details.

- FCK staff can review applications and pair restaurants with programs based on the information provided in their applications.

- Prospective restaurants and after school programs can apply to join Feeding Canadian Kids through an easy and intuitive process on the website. 

- Once approved and registered, partners can view their information and obligations by logging on to their profile on the website.


## Instructions
The steps below are instructions for deploying locally.
 
 1. Clone the project:
```git clone https://github.com/csc301-fall-2019/team-project-feeding-canadian-kids-team-2.git```
2. Enter the project root directory:
```cd team-project-feeding-canadian-kids-team-2```
3. Enter the backend server directory:
```cd express_server```
4. Install the necessary modules for Express:
```npm install```
5. Start the backend server:
```npm start```
6. In a separate window, go back to the project root directory.
7. Enter the frontend server directory:
```cd react_app```
8. Install the necessary modules for React:
```npm install```
9. Start the frontend server:
```npm start```
10. You can now access the web app in a browser at local host, port 3000:
```http://localhost:3000/```

### Functionality Testing Directions
##### Program/Restaurant Partner registration and log in functionality:
> _Note:_ The following instructions are for a prospective restaurant partner, but steps are almost identical for program partners. Specific instructions for program partners are omitted. 
+ To register as a prospective restaurant partner:
	+ Click on ``Login/Register`` in the upper right corner in the navigation bar.
	+ Click on ``Register as a Program``.
	+ Fill in the fields.
	+ Click ``Submit`` at the bottom of the page.
	+ You are now registered. Your status is still non-active until an admin approves your application and pairs you with a program partner. 
+ To log in:
	+ Click on ``Login/Register`` in the upper right corner in the navigation bar.
	+ Fill in email and password in the fields. Use what you entered for **Restaurant Email** in your application as email.
	+ Click ``Login``
	+ The navbar should be updated to show your email address once signed in. You should be automatically directed to your "Restaurant User" page. Information you can see may be limited due to your inactive status. In this iteration, there is hardcoded dummy data as placeholders until full frontend and backend integration is complete. 
	+ Your login should be persistent, i.e. reloading the website or navigating to a different page should keep you logged in until you log out.

##### Program/Restaurant Partner User Page usage:
> _Note:_ This information that you see on the pages in this section is currently hardcoded and not connected to the backend database in this iteration.

+ To operate on user page as a program partner:
	+ First make sure that you have registered as a program partner and logged in. (Use credentials ```username: fake@mail.com``` ```password: password``` if you did not register your own account)
	+ Click on ``Your Deliveries`` tab on the left sidebar to check the schedule of deliveries for the current week.
	+ If you want to check the details of any delivery, click on the time slot shown in the table, then you will see the details including restaurant name, contact information as well as the number of meals to be delivered.
	+ To confirm delivery, click on the corresponding time slot and click the ``Confirm Delivery`` button.
	+ Click on ``Your Restaurants`` tab on the left sidebar, you will see the details of all restaurants that are paired with you.
	+ Click on ``Home`` tab on the left sidebar to return to home page.

+ To operate on user page as a restaurant partner:
	+ First make sure that you have registered as a restaurant partner and logged in. (Use credentials ```username: alsofake@mail.com``` ```password: differentpassword``` if you did not register your own account).
	+ Click on ``Your Orders`` tab on the left sidebar to check the schedule of deliveries that need to be made for the current week.
	+ If you want to check the details of any delivery, click on the time slot shown in the table, then you will see the details including program name,  address as well as the number of meals to be delivered to the program.
	+ Click on ``Your Partners`` tab on the left sidebar, you will see the details of all program partners that are paired with you.
	+ Click on ``Home`` tab on the left sidebar to return to home page.

##### Admin User Page usage:
+ To operate on user page as an administrator:
	+ First make sure that you have logged in as admin (Use credentials ```username: admin@mail.com``` ```password: a@mail.com```).
	+ You should see the number of active programs and active restaurants, number of new program applications, and new restaurant applications.
	+ Click on the navigation button at the top left corner, you will see the sidebar.
	+ Click on ``New Signups`` tab on the left sidebar to see the new program signups and the new restaurant signups.
	+ Click on the restaurant name or program name to see their application details.
	+ Click on the ``Approve Application`` button if you want to approve the partner’s application or click on the ``Reject Application`` button if you want to reject the partner’s application. (Redirection after successful input currently work in progress).
	+ Click on ``Programs Info`` tab on the left sidebar to see the current program partners.
	+ Click on the program name to see its information.
	+ Click on ``Restaurants Info`` tab on the left sidebar to see the current restaurant partners.
	+ Click on the restaurant name to see its information.
	+ Click on ``Admin Home`` tab on the left sidebar to return to home page.

+ To log out:
	+ Click on your email in the upper right corner in the navigation bar.
	+ A dropdown menu should give you the option to log out. Click ``Log Out``.
	+ You are now logged out and you should be automatically redirected to the log in page. 
