# Feeding Canadian Kids: Unified Platform for Services

## Iteration 3

 * Start date: November 14th, 2019
 * End date: December 1st, 2019


### Changes from `product.md`
 
#### Mobile Friendliness
We decided to not focus on making the website mobile-friendly due to time constraints. It still works on mobile but the UI can get clunky sometimes, but it works well with all needed functions on PC. And we believe that it is of higher value to have more functions done than to spend a lot of time making it mobile-friendly.

#### Import and Export
We decided to add an import and export CSV files feature for the admin. This allows the admin to export the programs/restaurants as a CSV file and edit it locally and upload the new one. We were hoping to make an interface for the admin to edit the programs/restaurants on the site but we had a time constraint so we decided to opt for this.
In addition, this also adds to the ability of our partner to keep a stable copy of the database which makes them feel much safer.

#### Change Password
We decided to add the feature to change passwords because Rebecca (our project partner) requested us to do so. This also benefits our users just in case they feel like they need a password change.

#### Newly registered programs/restaurants approval process
We were unable to implement the feature that allows FCK staff to approve certain fields of the application and provide feedback through the website. We were also unable to automatically inform applicants of their application status automatically. We did not have enough time to implement this feature.

#### Automated Emails
We planned to have automated emails that detail the verification/screening/approval process and timeline.
However, due to time constriants we are unable to implement this feature. We notified our project partner about this issue and she said that it was okay and we could disregard this feature entirely.

#### Confirm Delivery
Unfortunately we did not have sufficient time to implement this feature. Originally we planned to have the program partner be able to confirm the delivery so the restaurant could be notified. As of right now the only way the restaurant knows the food was delivered is through the courier or calling the program partner.

### Handoff plan
We will have a handoff meeting after the presentation. We will discuss the features that our product currently has. We are handing over the entire codebase to our project partner by providing the URL to the Github repository which will be made public. Our partner does not have the technical capacity to maintain the product. However, we plan to pass some technical notes regarding our codebase and how to maintain it. The notes can be passed on to the future developer that works on the app. 
 
Our current deployment is an scp deployment from our local to a t2.micro ec2 instance, for the purpose of this class this style of deployment is fine however if our partner wants to add more features and expand in the future they should look into investing in some deployment tools and using a bigger machine.  During our handoff meeting we will be providing our partner with two documents:


Document 1 will be instructions on how to deploy the website the exact same way we have it deployed now (scp deploy on a t2.micro) as well as set up a new database instance. Since this website is hosted on our personal aws and google cloud accounts we will have to take our current deployment down at some point. This will be helpful to our partners if they would like to quickly get the website out just so they have something up and running.


Document 2 will be instructions on how to deploy the website as well as some suggestions from us to improve the deployment process. Our first suggestion would be to upgrade from the t2.micro to a t2.small. The t2.micro is the free tier ec2 instance provided by amazon but because of this it is very limited in computing power. For now the t2.micro is sufficient for our partners needs since they only have around 16 restaurants and partners in total however in the future if they expand to hundreds of concurrent users the t2.micro will most likely not be enough. Upgrading the ec2 instance is not by any means an urgent change it’s more of a suggestion to future proof our partner.  The next suggestion we’re going to give our partners is to use Jenkins to automate their deployments and as a continuous delivery tool. If our partner has any desire to iterate on our website further they would greatly benefit from having even a simple CD tool. We’re going to include instructions on how to set up a jenkins job which will run unit tests on our code base then deploy to an ec2 instance. Having this tool will make future deployments significantly easier since instead of manually copying all the code over form local it’ll be as simple as pushing a single button on jenkins and letting the job do the rest. It will also be nice to check if unit tests are passing before deploying in order to catch anything that is overtly broken in the code. We’re suggesting Jenkins over the other CD tools since it is open source and free to use. Our final suggestion and our most important one will be for our partners to purchase a domain name. Currently the website is accessed with the IPv4 address and port number directly which is not very marketable at all for our partners and hard to remember for the restaurants and program partners. We will forward them to some websites where they can purchase domain names from (namecheap, godaddy, etc) and include a guide on how to set up Route 53 on AWS to map their domain name to the ec2 instance they have set up.


