# CNB FX Daily Rates

React app that displays current czech national bank FX rates with possibility to calculate a currency amount for a specific amount of CZK

## Deployed version

https://cnb-fx-client.vercel.app

## Installation

### Client

```bash
    cd src/client
    npm install
    npm run start
```

After that you can access the app on http://localhost:3000

### Server (for proxying requests to CNB API bypassing CORS)

```bash
    cd src/server
    npm install
    npm run start
```

After that you can fetch CNB fx rates from http://localhost:9000/api

Alternatively you can use the deployed version of the server on https://cnb-fx-server.vercel.app/api (set REACT_APP_PROXY_SERVER_URL="https://cnb-fx-server.vercel.app" in .env file)
