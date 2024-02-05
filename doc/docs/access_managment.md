## Authentication

This is still an open issue. So far, for small installations, only the use of so called _functional accounts_ is supported.
The user credentials are to be specified in `scicatlive4daphne/config/backend/functionalAccounts.json` and are imported from
here into the underlying _MongoDB_. This process is triggered on each start or restart of the backend service. Once imported,
the account credentials are no longer needed in `functionalAccounts.json` and should be removed from this file to avoid 
security threats. 