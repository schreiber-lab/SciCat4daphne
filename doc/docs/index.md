# A SciCat production environment optimized for small scale installations

!!! info  "DAPHNE4NFDI"
    This project is initiated within the framework of [DAPHNE4NFDI](https://www.daphne4nfdi.de/), the "Data for Photon and Neutron Science" consortium within [NFDI](https://www.nfdi.de/).

With this project we aim to provide a _easy to use_ [SciCat](https://scicatproject.github.io/) environment tailored to the needs of university research groups and labs that would like to run _small_ SciCat instances. We also try to provide ideas and drafts of potential extensions to SciCat especially useful in these environments. Once a useful set of additional SciCat features has been agreed on within DAPHNE they will be put forward be integrated into the SciCat project. For this reason we work in close collaborations with the core developers of SciCat. We aim to coordinate collaboratively the SciCat development activities within DAPHNE to ensure its sustainability.

The boundary conditions put to this project are

 - the solution should be usable by IT-informed scientist that are use to Linux environments.  
 - it should run on a single (virtual) machine (e.g. 2 GB RAM, 2 cores)
 
 
!!! note  "Contributions welcome!"
     If you consider to participate or to continue to develop this project have a look at
     
     - [SciCat4daphne on GitHub](https://github.com/schreiber-lab/SciCat4daphne)
     - [Scicat Schema Extension](https://github.com/schreiber-lab/scicat-schema-extension)
     
     and contat alexander.hinderhofer [at] uni-tuebingen.de or linus.pithan [at] desy.de. 


## Extensions to SciCat

within this package there are currently two additional features extending SciCat's current capabilities:

* A web-service to create new Datasets through a GUI
* A metadata schema management and validation tool (frontend + backend) for Scientific Metadata

!!! warning  "API endpoints without authentication"
  While the GUI to create Datasets through a GUI is using the user authentication of SciCat there are some additional
  API endpoints for schema management that work without user authentication. For this reason the _Scicat Schema Extension_ 
  is rather to be considered to be in a _proof of concept_ state than being production ready.

## scicatlive vs. scicat4daphne

The solution provided in this package is based on [scicatlive](https://github.com/SciCatProject/scicatlive) which rather addresses the needs of software developers. We have worked on it to adopt it to our needs. The main difference are:

 - use of a persistent mongodb in the backend
 - configurable frontend using prebuild docker images
 - integration of additional services 
 
 

