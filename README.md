# Pinguino
Find and support a classroom project near you. [[Code Challenge](instructions.md) | Empatico]

### Description
Web application using React. Shows classroom projects you can donate to based on your location.

### Features
- Allows user to signup
- View a list of all users signed up
- List of Donor Choose proposals along their location on a map per user

### Installation Steps
1. Clone repo
2. Run `yarn start`

### Run Tests
`yarn tests`

### Dev Notes

#### Spec
- Create Signup Page
- Store User in local storage[?]
- Create User List Page
- On click of User open Proposal Page
- Create Proposal Page
- On Open of Proposal Page: get proposal list and create map
- Consider bandwidth issues
- Tests!
- Should I use material design? - yes!

#### Assumptions
- Limited zipcode to 5 numbers ranging from 0-9 assuming we only want US zipcodes.
- Since the the codebase is pretty small, I opted to use string literals for action types. In larger settings, it'd be better to abstract it out into a separate module.
- HTML form elements maintain their own state, but since we want React state to be the "source of truth" we'll use controller components. 

#### Color Palette
- ![#F27281](https://placehold.it/15/F27281/000000?text=+) `#F27281`
- ![#F7D88B](https://placehold.it/15/F7D88B/000000?text=+) `#F7D88B`
- ![#3F4550](https://placehold.it/15/3F4550/000000?text=+) `#3F4550`
- ![#464D59](https://placehold.it/15/464D59/000000?text=+) `#464D59`
- ![#C7C9CD](https://placehold.it/15/C7C9CD/000000?text=+) `#C7C9CD`

Light Gray: 

#### To-do
- Clean up directories
- Rename SignUpForm to UserCreationPage
- Give credits to http://jasonwatmore.com/

#### Notes
- Used create-react-app for boilerplate

#### Execution Plan
- create user creation page (medium)
- implement redux to dispatch async actions (large)
- implement router to go to users details page (medium)
- create and populate user details page (medium)
- create /users get route on mock backend (medium)
- create user detail page route from users item (small)
- make call to donors api on callback plot data on to google map api and display map (large)
- Styling and transitions (large)
- Add tests (large)
- Cleanup directories and naming (small)
- Cleanup README (small)

