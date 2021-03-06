# collaborative-lists

Lists that multiple users can sort and edit in real-time.  List updates are instantaly propagated to all users.

Prototype built to understand how to use React, Redux, React DND (drag and drop) and animations in React while synchronizing changes across multiple users.

Turns out the 'one-way' data architecture imposed by Redux and React is an excellent fit for supporting multiple users!

## Tech Stack
- Architecturally similar to Chatty app.  Uses the simple React boiler-plate for the front-end and node in the back end.
- Node with Express and Socket.io for the server
- [React](https://facebook.github.io/react/) and [Redux](https://github.com/reactjs/redux) as the front-end
- [React DND](http://gaearon.gith2ub.io/react-dnd/) for drag and drop.
- Bootstrap for CSS including the use of React-Bootstrap.
- Postsgre for data storage.  Knex for migrations and building SQL queries.

## Prototype features
- a single global list stored in memory on the server
- one tab shows the list and another tab shows the history of changes to the list
- users can add to the list, mark items as completed and sort the list using drag and drop
- users can filter their view for all items, completed items or active items
- adding, updating and sorting (with drag and drop) synchronized across multiple users in real-time with socket.io
- animates items being added to list

## Making it multi-user and multi-list
- proper data model with persistant storage
- keep track of different users (sessions, registration and signin)
- multiple lists - each list with it's own 'short URL' so it can be easily shared
- use React Router to navigate between different list URLS + api for retrieving list specific data
- socket updates using rooms or something similar to broadcast list specific updates

## Vision/Possible Features
- Really need to decide on one (or a few), primary use cases and drive the feature set out from these
- Best candidate use cases: situations where multiple users are likely to collaborate in real-time - what features do they need to collaborate?
- Some possible use cases: multi-person, recurring shopping lists; project to-do list; group decisions (where to go, what to eat, etc.)
- Auto-suggesting list items based on prior lists - for example, when I buy bananas I often also buy frozen berries (for smoothies)
- Populate lists with search results - like a yelp search, so users can collaborate on which restaurant they want to visit
- automatically render images/links -etc.
- group messaging in history/channel tab
- ability to like/rate items
- ability to edit list items
- infinite undo/redo
- list suggestions based on location where list is used/created (i.e. shopping lists are store dependent)
- animate list being sorted
- badges with update count on history/channel tab

## User Scenarios

### Grocery Lists
- Often worked on by multiple people - added to over time
- Addition of last minute items
- Sorting around how the store is organized
- Recurring items/suggestions
- Location dependent recurring items

### Co-operative decision making
- deciding on a movie, place to eat, bar to go to, activity to do with a group
- one user creates an initial list and shares it with a group of people
- people can add/cross things off the list and/or rate/like items in the list
- the built-in chat channel is useful for commenting on items in the list and having group discussions

### Yelp Search Results
- One user does a Yelp search and turns search results into a list which they share with other people
- Other users can rate the items in the list and/or sort the list
- Users have a mechanims to add new entries in the list

### Competition/Alternatives
- Google Keep creates very nice lists, but they are slow to update and there is no channel/chat associated with them
- Workflowy is more about creating complex, nested, filterable lists

## User Stories
- Create a new list
- Add an item to a list
- View your lists