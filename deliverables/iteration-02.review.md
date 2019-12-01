# Feeding Canadian Kids: Unified Platform for Services

## Iteration 2 - Review & Retrospect

 * Start Date: October 25th, 2019
 * End Date: November 13th, 2019

## Process - Reflection
#### Decisions that turned out well

1. The most successful decision was to use the Trello board. It was very useful because it gave us a way to manage tasks within the team. By simply looking at the board, we would know what tasks were left to be done and what tasks had been delegated to whom. In this way, we prevented the issues of two members doing the same task at the same time and made the process more efficient. Our Trello platform link: https://trello.com/b/l2fEKkwm/feeding-canadian-children

2. Another successful decision was to use Github branches. The reason why it was very helpful was that it allowed us to tinker in our own branch without affecting the main code (master). Members could add branches for different features and this also made it clear of how features were in progress. Overall branches helped us organize the workflow more efficiently and effortlessly.

#### Decisions that did not turn out as well as we hoped

1. Code/Pull Request reviews were meant to make sure we don’t accidentally push bugs, so we made a rule that at least a couple of developers should review the code before merging to master. However, due to the time constraint, this ended up not being the case. Everyone self-approved their pull requests in hopes that there aren’t any bugs.

2. Weekly meetings were meant to make sure that everyone in the team kept up with what's going on. Whether or not there are problems or new features to implement. However, meeting in person every week was time-consuming as not all of us lived on campus. We mostly ended up discussing our problems/concerns through messenger.

#### Planned changes

List any process-related changes you are planning to make (if there are any)

1. We are planning to scrap the code review because no one has time to actually review the code. Instead, we’ll just ask for confirmation on messenger by describing the high-level idea on what he/she implemented and seeing if the other groupmates agree/disagree. If agreed upon, it is merged into master. We will also trust that the person working on it has already tested for bugs/issues. 
2. We are planning to have meetings when necessary instead of weekly meetings because of time constraints. This would allow every meeting to be more impactful which would also lead to more people joining the meeting.



## Product - Review

#### Goals and/or tasks that were met/completed:
1. Restaurants and programs registration pages. Basically presenting potential partners with the ability to sign up with Feeding Canadian Kids by answering some questions. Their answers are stored via database calls for admins to check for future reference.
2. Admins portal gives the admins the ability to review active partners who are already with Feeding Canadian Kids, as well as potential partners who recently requested to be signed up. The admin can view information of each active and recently signed up partner. The admin can also accept or reject the application of a potential partner. Doing so changes the information of each partner in the database.
3. The restaurant user page is where a restaurant can view its profile and other details of meals arrangement, such as the programs they are currently paired with and the schedule of the deliveries they have to make in the current week.
4. The login page is the first page that any user would see. As the name suggests, it is where current users (program, restaurant, admin) can sign in, and potential users (new restaurant or program) can sign up. The info entered here for current users is matched up with the information stored in the database to verify a user's credentials. For new users, it redirects them to the registration pages.




#### Goals and/or tasks that were planned but not met/completed:

1. Originally we had planned to implement an automatic email feature that would email relevant parties whenever a program or restaurant partner was approved, however, due to time constraints we were not able to complete this feature. We came to a point where we had to choose between completing this feature or other ones. We came to the conclusion not completing the email feature would have the least negative impact since there are other ways to know if a partner has been approved or not (i.e. admins can simply log in and view the admin page or partners can see their application status on their page as well) since there are other features that accomplish the same thing as the automatic emails we decided it was lower priority. 

2. Another goal that is not met by this iteration is displaying the training resources for the users of the app. As mentioned in the previous point, due to time constraint we had to prioritize our tasks according to their importance. As a result, we felt that this feature was not as vital as other features which were crucial for the working of the app. Also, it can be easily extended from our existing features.  We plan to have this feature 100% done for the final app.

#### How was your product demo?
We prepared the demo by first understanding the requirements our project partner have given to us. We then broke down the requirements into smaller tasks each corresponding to a feature of our product. We also focused on tasks that had a higher priority. For example, since restaurants/programs registration and login were key features of the demo, we worked on those first. When we met up with our partner, we were able to show them the login/registration view, admin page and programs/restaurants profile. We also showed them the process of signing up for an account and using those credentials to successfully log on the website. Overall, our partner was pretty happy with the features we had implemented except for some of the descriptions we had written for the application process. We accepted their change requests and corrected our wordings using the correct description they provided us. From the demo we learned that it was still an incomplete product and there were still improvements for us to work on. Besides, we got some ideas on how to improve the UI to make it prettier and user interactive and also realized that we were missing some features such as the function of confirming received food as well as enabling the administrator to have the ability to pair after school programs with restaurants.

## Meeting Highlights
1. We are planning to have admins be able to pair the restaurants with after school programs. This can be solved by creating a database that consists of restaurant and program pairings. We can then design a UI where the admin gets to pick the restaurant and program with a button to confirm the paring. The button would call the API to notify the database to add the new restaurant and program pairing. It would then be reflected on the restaurant and program partners home page.

2. We are also planning to implement the function of confirming received food. Right now there is no such implementation so we can’t tell whether or not the restaurant have received the food. The restaurant partners’ only means of confirmation is through the UberEats app. This can be solved by creating a button which when clicked will call an API which notifies the database that the food has been delivered. After the database updates the UI would also update, notifying the restaurant that the food has been received by the program partner.






