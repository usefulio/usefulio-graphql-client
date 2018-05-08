# Useful IO Apollo Client with React

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── cache.js - In memory cache definition
    ├── components
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── Loading.js
    │   ├── SignIn.js
    │   ├── SignOut.js
    │   └── Users.js
    ├── defaultState.js - Default state of the client cache
    ├── graphql - GraphQL queries and mutations
    │   ├── signedIn.js
    │   ├── updateSignedIn.js
    │   └── users.js
    ├── index.css
    ├── index.js - Main file with Apollo client definition
    ├── registerServiceWorker.js
    ├── resolvers.js - Mutations' resolvers for the client cache
    └── utils - Utility functions
        ├── sha256.js
        ├── signIn.js - Function making request to the /loginWithPassword route and setting JWT token in the localStorage
        └── signOut.js - Function removing JWT token from the localStorage
```