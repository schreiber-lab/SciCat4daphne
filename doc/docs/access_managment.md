## Authentication

Having the spirit of DAPHNE in mind we would like to use an Authentication that can work for most institutions in DAPHNE out of the box. An evident candidate for an AAI solution to achieve this would be [HIFIS AAI](https://hifis.net/doc/helmholtz-aai/) which provides the OIDC protocol that is also supported by SciCat. Another option that could be considered would be to use the public service offered by [ORCID](https://info.orcid.org/faq/what-is-openid/) as identity provider.


## Access management

Currently we do not see the need to restrict the access of authenticated users to certain datasets. This is evidently a major difference to SciCat installation at large scale facilities. However, establishing access management rules is foreseen in SciCat and can therefor be added with relatively low efforts.