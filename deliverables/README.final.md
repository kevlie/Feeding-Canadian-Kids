# Feeding Canadian Kids: Unified Platform for Services

## Description 

Our product is a website that will provide a centralized platform for registration and communication between Feeding Canadian Kids (FCK) staff, restaurants, and programs.

Presently, there are several existing problems: An immense amount of resources are spent communicating between Program and Restaurant Partners to ensure that all parties involved have agreed upon and are clear about the goals, tasks, locations, etc. There is currently no central platform and it is not always easy for all parties to communicate in an efficient and organized manner.

Our web application will centralize communication and management tasks to enable FCK to spend less time managing and communicating with partners, and more time expanding the project nationally. Additionally, our product will provide partners with synchronized, up-to-date, and relevant information that they need for their operations.

## Key Features
With the help of our website, prospective partners and restaurants will have a streamlined application process. Some key high level features are as follows:

- FCK staff will have an organized and centralized hub to keep track of current and prospective partners’ statuses and details.

- FCK staff can review applications and pair restaurants with programs based on the information provided in their applications.

- Prospective restaurants and after school programs can apply to join Feeding Canadian Kids through an easy and intuitive process on the website. 

- Once approved and registered, partners can view their information and obligations by logging on to their profile on the website.

## Instructions

#### General Usage:
+ To access the website:
    + Enter the URL ``http://18.222.133.7:3000`` into your browser.

+ To log in:
	+ Click on ``Login/Register`` in the upper right corner in the navigation bar.
	+ Fill in email and password in the fields.
	+ Click ``Login``
	+ The navbar should be updated to show your email address once signed in. You should be automatically directed to the relevant "User Page", depending on your status as a Program Partner, Restaurant Partner, or Administrator.
	+ Your login should be persistent, i.e. reloading the website or navigating to a different page should keep you logged in until you log out.

#### Admins:
 + To operate on user page as an administrator:
	+ First make sure that you have logged in as admin. (Admin credentials are pregenerated at the moment. Use ``admin@mail.com`` as email and ``a@mail.com`` as password.)
	+ You should see the number of active programs and active restaurants, number of new program applications, and new restaurant applications.
	+ Click on the navigation button at the top left corner, you will see the sidebar.
	+ Click on ``New Signups`` tab on the left sidebar to see newly signed up programs, restaurants, and couriers.
	+ Click on the name of any restaurant, program, or courier to see the application details.
	+ Click on the ``Approve Application`` button if you want to approve the partner’s application or click on the ``Reject Application`` button if you want to reject the partner’s application.
	+ Click on ``Programs Info`` tab on the left sidebar to see the current program partners.
	+ Click on the program name to see its information.
	+ Click on ``Restaurants Info`` tab on the left sidebar to see the current restaurant partners.
	+ Click on the restaurant name to see its information.
	+ Click on ``Couriers Info`` tab on the left sidebar to see all active courier partners.
	+ Click on a courier's name to see its information.
	+ Click on ``Programs + Restaurants`` tab in the left sidebar to see the programs and restaurants pairing page
	+ Select the checkboxes beside each program/restaurant to include it in the pairing. Note that only 1-to-1, or many-to-1 pairings are allowed.
	+ Click on ``Couriers + Restaurants`` tab in the left sidebar to see the couriers and restaurants pairing page
	+ Select the checkboxes beside each courier/restaurant to include it in the pairing. Note that only 1-to-1, or many-to-1 pairings are allowed.
	+ Click on ``Admin Home`` tab on the left sidebar to return to home page.

+ To log out:
	+ Click on your email in the upper right corner in the navigation bar.
	+ A dropdown menu should give you the option to log out. Click ``Log Out``.
	+ You are now logged out and you should be automatically redirected to the log in page. 

#### Restaurant Partners:
+ To register:
    + Click on the ``REGISTER AS A RESTAURANT`` button in the login page.
    + Fill in the form to provide Feeding Canadian Kids staff with the necesary infromation to become a program partner.
    + You can now log in with your email and password to check whether Feeding Canadian Kids staff have approved your application.
    + After you have been approved, you will be able to view your user page.

+ To operate on user page as a restaurant partner:
	+ First make sure that you have registered as a restaurant partner and logged in.
	+ Click on ``Your Orders`` tab on the left sidebar to check the schedule of deliveries that need to be made for the current week.
	+ If you want to check the details of any delivery, click on the time slot shown in the table, then you will see the details including program name, address as well as the number of meals to be delivered to the program.
	+ Click on ``Your Partners`` tab on the left sidebar, you will see the details of all program partners that are paired with you.
	+ Click on ``Home`` tab on the left sidebar to return to home page.

#### Program Partners:
+ To register:
    + Click on the ``REGISTER AS A PROGRAM`` button in the login page.
    + Fill in the form to provide Feeding Canadian Kids staff with the necessary information to become a program partner.
    + You can now log in with your email and password to check whether Feeding Canadian Kids staff have approved your application.
    + After you have been approved, you will be able to view your user page.
+ To operate on user page as a program partner:
	+ First make sure that you have registered as a program partner and logged in. 
	+ Click on ``Your Deliveries`` tab on the left sidebar to check the schedule of deliveries for the current week.
	+ If you want to check the details of any delivery, click on the time slot shown in the table, then you will see the details including restaurant name, contact information as well as the number of meals to be delivered.
	+ To confirm delivery, click on the corresponding time slot and click the ``Confirm Delivery`` button.
	+ Click on ``Your Restaurants`` tab on the left sidebar, you will see the details of restaurants that are paired with you.
	+ Click on ``Home`` tab on the left sidebar to return to home page.
	
#### Courier Partners:
+ To register:
    + Click on the ``REGISTER AS A COURIER`` button in the login page.
    + Fill in the form to provide Feeding Canadian Kids staff with the necessary information to become a courier partner.
    + You can now log in with your email and password to check whether Feeding Canadian Kids staff have approved your application.
    + After you have been approved, you will be able to view your user page.
+ To operate on user page as a courier partner:
	+ First make sure that you have registered as a program partner and logged in. 
	+ Click on ``Your Restaurants`` tab on the left sidebar, you will see the details of restaurants that are paired with you.
	+ Click on ``Home`` tab on the left sidebar to return to home page.

 ## Development requirements

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

 ## Licenses 

#### License Information
We have chosen the MIT license for our project. We believe this license is the best choice for us and our partner because of its simplicity and permissiveness. We want members of the public to be able to improve on our work, if they wish to contribute to the great work that Feeding Canadian Kids does. At the same time, however, we believe that if the Feeding Canadian Kids team ever wished to hire their own technical team to improve on the codebase, they should be allowed to close source it if they wish to do so.

#### License

MIT License

Copyright (c) 2019 Feeding Canadian Kids Web App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

