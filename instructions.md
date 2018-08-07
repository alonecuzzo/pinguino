# Empatico Code Challenge

Build a web application using React, Vue, or Ember that makes use of several APIs to render a map and visualize some DonorChoose data. If your chosen framework has a component library such as Material Design or Bootstrap you are welcome to use that to provide a basic level of design.

## Requirements

1. The app should register a new user by taking input of a name, email, and zip code. Validate these attributes however you see fit, and persist the new user in memory (there is no backend component for this challenge).

2. List each user and allow a user to be clicked on. Use that users zip code to query the [DonorsChoose API](https://data.donorschoose.org/docs/overview/) to return a list of projects in that zip code with a query like so:

    `https://api.donorschoose.org/common/json_feed.html?zip=%2211201%22&APIKey=ef4uju946azk`

    The DonorsChoose API key is: `ef4uju946azk`.

3. Populate the projects from the previous API call onto a map using the [Google Maps API for Javascript](https://developers.google.com/maps/documentation/javascript/) and each projects latitude and longitude.

    The Google Maps API key is: `AIzaSyDnXYgSKyV4HhkmPDXxOOpDFjNaUJPqomQ`

Feel free to provide the app in a private repository or as a tarball. Please ensure there are appropriate instructions to setup and run the app.

## Review criteria

When reviewing your submission, the following criteria will be considered:

* **Overall code clarity and organization**: Does the app structure make sense?
  Are components broken down in a sensible way?
* **State management**: Is the application state handled in an elegant way? Do
  the different pieces of state interact logically?
* **Attention to detail**: Did you follow all the implementation and submission
  instructions? Is your code reasonably bug-free?
* **User experience**: Is the interface intuitive and adaptable? How would it feel in a low bandwidth/high latency environment?
* **Documentation**: Does the readme explain how to get the app working? Is the code clearly documented?
* **Tests**: Does the code have tests?

## Extra Credit

Provided your app satisfies everything in the previous section, anything else is optional. If you find yourself with some time left over, here are some suggestions on ways you might extend your app and really make it stand out:

* Routing: allow navigating to a users map page via a URL.
* Pay attention to error handling. What can go wrong? How is the user notified?
* Use a type system such as TypeScript or Flow
* Filtering of projects on the map by other criteria like type of project.
