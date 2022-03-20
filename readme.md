# Problem analysis

As we need to create an api to return all known attributes, I decided to put this attributes list in a new table called “known_filters” this brings some advantages:

 1. We can add/hide filters permanently  in the form, just add/removing the row in the table.
 2. We can add new columns to the user's table without add this by default to the filters, by example a password column.

As we need to filter by age, I take the decision to divide filter in two values age_min and age_max because it's not very common to filter by an age for an exact value
 
# STACK

Graphql: Because is easy to filter data and return only the data that will be printed in the table.

Nestjs: Because include a graphql (Apollo) implementation and orm (Typeorm) implementation that basically is what I need for solving this problem.

React: Because it is easy and performant to connect to Apollo, and as the data is changing continually because of the filters, i can take advantage of the Virtual Dom optimizations.

State Management: I decided not use any library Redux etc. because i don't have much information to store, so for the global state I used the React context api in addition to a React useReducer.

# Run Instructions

Run in production mode

    docker-compose up db prod client

Run in debug mode

    docker-compose up db dev client


Open in browser
http://localhost:8000/



