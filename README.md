# Travel Booking: Hotel Reservation Project

Travel Booking is a case study of a hotel reservation platform using Next.js and TypeScript on the front-end, with a SQL database and Prisma for the back-end. 

- Implemented OAuth for user authentication and Hotels API for retrieving hotel data. 
- Utilized Stripe Payments and Webhooks for handling payment transactions and keep a customer booking history. 
- Styled the application with Tailwind CSS and integrated MapBox for displaying hotel locations. 
- This project allowed me to gain experience with modern web development technologies and practices such as serverless architecture and third-party API integration.

![smartmockups_lb4dtxsx](https://)

🔗 [Open live Demo](https://hobbyhorsetours.com)

## Tech Stack

- Next.js
- React.js
- TypeScript
- Tailwind CSS
- Prisma
- CockroachDB (Uses PostgreSQL wire protocol 3.0)
- NextAuth
- Google OAuth
- Hotels API
- Stripe Checkout
- Webhooks
- MapBox

## Features

- Responsive UI with Tailwind CSS.
- Hotels search via Hotels API
- Hotel map location with MapBox.
- Payment Checkout flow with Stripe
- Customer Booking History
- Data fetching and caching techniques using SSR (Server Side Rendering) with Next.js.
- User Authentication with NextAuth and Google OAuth.
- Robust code using TypeScript.

## Screen Captures


## Installation

First, clone the project and open it with Visual Studio Code:

```bash


cd travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker

code .
```

Then, create a .env.local file in the root of the project and configure the following environment variables:

```
# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=

# Rapidapi, Hotels API
NEXT_PUBLIC_RAPIDAPI_KEY=

# Firebase client
FIREBASE_CLIENT_API_KEY=
FIREBASE_CLIENT_AUTH_DOMAIN=
FIREBASE_CLIENT_PROJECT_ID=
FIREBASE_CLIENT_STORAGE_BUCKET=
FIREBASE_CLIENT_MESSAGING_SENDER_ID=
FIREBASE_CLIENT_APP_ID=

# Authentication
# Need to add Authorized redirect URIs to Google Cloud OAuth Service
# http://localhost:3000/api/auth/callback/google or https://your.deployment.url.com/api/auth/callback/google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Next Auth
# You can generate the secret via 'openssl rand -base64 32' on Linux
# More info: https://next-auth.js.org/configuration/options#secret
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Stripe Payments
# More info: https://stripe.com/docs/payments/accept-a-payment
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=
```

To send Stripe events to a local webhook install Stripe CLI, login into your Stripe account, and use the --forward-to flag pointing to the webhook endpoint, and create a trigger for successful customer payments :

```bash
brew install stripe/stripe-cli/stripe

stripe login

stripe listen --forward-to localhost:3000/api/webhook

stripe trigger checkout.session.completed
```

Finally, install the npm dependencies and run the application:

```bash
npm install

npm run dev
```

Now the application is running on http://localhost:3000 🚀

## How to test Stripe Checkout

The current Stripe Checkout implementation simulates payments in test mode. 

⛔️ Please, do not use real card details. Use the following test card details:

* Use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.
* Use a valid future date, such as 12/34.
* Use any three-digit CVC (four digits for American Express cards).
* Use any value you like for other form fields.

![Testing form with test card number 4242 4242 4242 4242](https://b.stripecdn.com/docs-statics-srv/assets/test-card.c3f9b3d1a3e8caca3c9f4c9c481fd49c.jpg)

