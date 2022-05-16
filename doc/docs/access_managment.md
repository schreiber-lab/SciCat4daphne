## Authentication

Having the spirit of DAPHNE in mind we would like to use an Authentication that can work for most institutions in DAPHNE out of the box. An evident candidate for an AAI solution to achieve this would be [HIFIS AAI](https://hifis.net/doc/helmholtz-aai/) which provides the OIDC protocol that is also supported by SciCat. Another option that could be considered would be to use the public service offered by [ORCID](https://info.orcid.org/faq/what-is-openid/) as identity provider.

### Temporarily solution

Until the decision has been taken which authentication service to rely on we use the integrated account management in SciCat that is originally intended for (functional accounts)[https://scicatproject.github.io/documentation/Development/Login.html] only. To create a new user account, it has to be added with an initial password in `functionalAccounts.json` file provided in the config for the provided docker compose solution (`scicatlive4daphne/config/catamel/functionalAccounts.json`). Since this initial password is keep in clear text it should be changed using the API endpoint [`Users/change-password`](https://scicatproject.github.io/api/#operation/User.changePassword) , e.g. though the api explorer for the time being.


## Access management

Currently we do not see the need to restrict the access of authenticated users to certain datasets. This is evidently a major difference to SciCat installation at large scale facilities. However, establishing access management rules is foreseen in SciCat and can therefor be added with relatively low efforts.