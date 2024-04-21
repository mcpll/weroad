# Weroad MVP

PROJECT DESCRIPTION /
We need to build a travels and bookings management system consisting of 2 pages, one to manage travel and the other to manage booking.

The travels should have some basic informations like name of the travel, dates of departure and return, a picture, a description of the tour, a price for a single person and an average user rating.

Travels should be listed in a dedicated page with a table and some basic filters.

The user should be able to:
Use a form to add a new travel
Edit an existing travel
Delete a travel

The bookings should hold those info: the related travel, customer infos, payment type and eventual internal notes.
bookings should be listed in a dedicated page with a table
a booking can be created with a dedicated multi-step form (wizard):

__First step__: search and select the related travel \
__Second step__: fill the customer info in a dedicated form (name, email, phone number, age, gender) \
__Third step__: select the payment type (Credit transfer, Paypal, Revolut) and optionally add some notes 

## Setup

Make sure to install the dependencies:

```bash

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`

Start json-server on `http://localhost:4000`\
Endopoint for travel on `http://localhost:4000/travels` \
Endopoint for booking on `http://localhost:4000/bookings` 

```bash

# yarn
yarn dev
```




