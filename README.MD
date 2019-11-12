# San Francisco Food Trucks - Coding Challenge

## To run this program:
* Open FoodTruckFinder.js in your local code editor (e.g., VSCode, Atom, Sublime)
* Install the necessary dependencies - 
    * node
    * request
    * readline
* Run the following command in Terminal
    * `node FoodTruckFinder.js`
* You will be given information on the current time and the number of trucks currently open
* You will be given a list of the first ten open trucks, sorted alphabetically.
* You will be given a prompt asking if you would like to continue to see more available food trucks.
    * Enter `y` for yes, or `n` for no. If you select no, the program will terminate.
* If you select yes, you will be given the next ten available trucks.
    * You may continue this process until all open trucks have been displayed, at which point the program will terminate. 

# Write-up
I believe that a full-fledged version of this app would be best served by integrating a maps API, such as Google Maps or OpenLayers, to pinpoint these locations visually. The ability to search by the various fields offered by the Socrata API, such as location, open hours, and description pulled from the optional text field would make for a better user experience as well. Adding the ability to create a profile and save your favorite trucks to your own personal collection would also enhance the experience for the end user. It may also be helpful to incorporate an additional user review API such as Yelp or Zomato to bring in pictures and reviews to further aid a user in finding the right truck. 