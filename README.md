# Donor Choose Map
###Built for Empatico Code Challenge
Web application using React. Shows Donor Choose proposals based on your location.

## Features
- Allows user to signup
- View a list of all users signed up
- List of Donor Choose proposals along their location on a map per user

## Spec
- Create Signup Page
- Store User in local storage[?]
- Create User List Page
- On click of User open Proposal Page
- Create Proposal Page
- On Open of Proposal Page: get proposal list and create map
- Consider bandwidth issues
- Tests!
- Should I use material design? - yes!

## Installation Steps
1. Clone repo
2. Run `yarn start`

## Assumptions
- Limited zipcode to 5 numbers ranging from 0-9 assuming we only want US zipcodes.
- Since the the codebase is pretty small, I opted to use string literals for action types. In larger settings, it'd be better to abstract it out into a separate module.
- HTML form elements maintain their own state, but since we want React state to be the "source of truth" we'll use controller components. 

## To-do
- Clean up directories
- Give credits to http://jasonwatmore.com/

## Notes
- Used create-react-app for boilerplate

## Execution
03/04/18
Goal: Signup form submission with user data stored in localstorage
Start time: 3:00pm 
Poms: 5
Notes: 
5:44pm: Got controlled components working. Do I even need redux? I think I wanted to use it to get real life experience with it. But the more I read and write this app, the less sure I am about its usefullness in this particular case. I wrote a reducer, but it's a little useless. Also, whats the difference between a reducer and an action creator? I think my knowledge gap is getting to me and slowing down the process. Do I need a Provider? How and where do I create the store? how do props get the dispatch function? what's the origin of the dispatch function?

