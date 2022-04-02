!!! warning  "Project is still under active development"
     Please consider this project in it's current state just as a 
     draft. The api is not yet stable and there may still be important 
     security vulnerabilities. Documentation is still far from being complete.

# A SciCat production environment optimized for small scale installations

!!! info  "DAPHNE4NFDI"
    This project is initiated within the framework of [DAPHNE4NFDI](https://www.daphne4nfdi.de/), the "Data for Photon and Neutron Science" consortium within [NFDI](https://www.nfdi.de/).

With this project we aim to provide a _easy to use_ [SciCat](https://scicatproject.github.io/) environment tailored to the needs of university research groups and labs that would like to run _small_ SciCat instances. We also try to provide ideas and drafts of potential extensions to SciCat especially useful in these environments. Once a useful set of additional SciCat features has been agreed on within DAPHNE they will be put forward be integrated into the SciCat project. For this reason we work in close collaborations with the core developers of SciCat. We aim to coordinate collaboratively the SciCat development activities within DAPHNE to ensure its sustainability.

The boundary conditions put to this project are

 - the solution should be usable by IT-informed scientist that are use to Linux environments.  
 - it should run on a single (virtual) machine (e.g. 2 GB RAM, 2 cores)
 
 
!!! note  "Contributions welcome!"
     Please consider to participate or ask questions using github issues or pull requests. 
     
     [SciCat4daphne on GitHub](https://github.com/schreiber-lab/SciCat4daphne)
     
     For further enquirers please contact linus.pithan [at] uni-tuebingen.de. 


## Extensions to SciCat

within this package there are currently two additional features extending SciCat's current capabilities:

* A web-service to create new Datasets through a GUI
* A metadata schema management and validation tool (frontend + backend) for Scientific Metadata


## scicatlive vs. scicat4daphne

The solution provided in this package is based on [scicatlive](https://github.com/SciCatProject/scicatlive) which rather addresses the needs of software developers. We have worked on it to adopt it to our needs. The main difference are:

 - use of a persistent mongodb in the backend
 - configurable frontend using prebuild docker images
 - integration of additional services 
 
 

