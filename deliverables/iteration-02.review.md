# Feeding Canadian Kids: Unified Platform for Services

## Iteration XX - Review & Retrospect

 * When: October 25th, 2019
 * Where: November 13th, 2019

## Process - Reflection
#### Decisions that turned out well

1. The most successful decision was to use the Trello board. It was very useful because it gave us a way to manage tasks within the team. By simply looking at the board, we would know what tasks were left to be done and what tasks had been delegated to whom. In this way, we prevented the issues of two members doing the same task at the same time and made the process more efficient. Our Trello platform link: https://trello.com/b/l2fEKkwm/feeding-canadian-children

2. Github branches very helpful because it allowed us to tinker in our own branch without affecting the main code (master). Overall branches helped us organize the workflow more efficiently and effortlessly.


#### Decisions that did not turn out as well as we hoped

1. Code/Pull Request reviews were meant to make sure we don’t accidentally push bugs, so we made a rule that at least a couple of developers should review the code before merging to master. However, due to the time constraint, this ended up not being the case. Everyone self-approved their pull requests in hopes that there aren’t any bugs.

2. Weekly meetings were meant to make sure that everyone in the team kept up with what's going on. Whether or not there are problems or new features to implement. However, meeting in person every week was time-consuming as not all of us lived on campus. We mostly ended up discussing our problems/concerns through messenger.

#### Planned changes

List any process-related changes you are planning to make (if there are any)

1. We are planning to scrap the code review because no one has time to actually review the code. Instead, we’ll just ask for confirmation on messenger by describing the high-level idea on what he/she implemented and seeing if the other groupmates agree/disagree. If agreed upon, it is merged into master. We will also trust that the person working on it has already tested for bugs/issues. 
2. We are planning to have meetings when necessary instead of weekly meetings because of time constraints. This would allow every meeting to be more impactful which would also lead to more people joining the meeting.



## Product - Review

#### Goals and/or tasks that were met/completed:
1. 



#### Goals and/or tasks that were planned but not met/completed:

1. Originally we had planned to implement an automatic email feature that would email relevant parties whenever a program or restaurant partner was approved, however, due to time constraints we were not able to complete this feature. We came to a point where we had to choose between completing this feature or other ones. We came to the conclusion not completing the email feature would have the least negative impact since there are other ways to know if a partner has been approved or not (i.e. admins can simply log in and view the admin page or partners can see their application status on their page as well) since there are other features that accomplish the same thing as the automatic emails we decided it was lower priority. 

#### How was your product demo?
We prepared the demo by first understanding the requirements our project partner have given to us. We then broke down the requirements into smaller tasks each corresponding to a feature of our product. We also focused on tasks that had a higher priority. For example, since restaurants/programs registration and login are key features of the demo, we worked on those first. When we met up with our partner, we were able to show them the login/registration view, admin page and programs/restaurants profile. We also showed them the process of signing up for an account and using those credentials to successfully log on the website. Overall, our partner was pretty happy with the features we had implemented except for some of the descriptions we had written for the application process. We listened to their change requests and corrected the changes using the correct description they provided us. From the demo we learned that it is still an incomplete product and there are still improvements we can work on. We got some ideas on how to improve the UI to make it prettier and user interactive. We also realized that we are missing some features such as the confirmed received food function and having the admin have the ability to pair after school programs and restaurants.

## Meeting Highlights
1. We are planning to have admins be able to pair the restaurants and after school programs. This can be solved by creating a database that consists of restaurant and program pairings. We can then design a UI where the admin gets to pick the restaurant and program with a button to confirm this. The button would call the API to notify the database to add the new restaurant and program pairing.

2. We are also planning to implement the confirm received food function. Right now there is no such implementation so we can’t tell whether or not the restaurant received the food. The restaurant partners’ only means of confirmation is through the UberEats app. This can be solved by creating a button which when clicked will call an API which notifies the database that the food has been delivered.






