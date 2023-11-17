# daily-fx-rates-czk

React app that displays current czech national bank FX rates with possibility to calculate a currency amount for a specific amount of CZK

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

After that you can access fetch CNB fx rates from http://localhost:9000/api
