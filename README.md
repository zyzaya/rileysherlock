A portfolio and personal website. A central demonstration of skills and experience.

# versioning
*loosely uses semvar (https://semver.org/)*

- *MAJOR.MINOR.PATCH*
- *PATCH* must be incremented if only backwards compatible bugfixes are introduced. A bugfix is defined as an internal change that fixes incorrect behaviour.
- *MINOR* must be incremented if new, backwards compatible functionality is introduced. 
  - It must be incremented if any public functionality is marked as deprecated. 
  - It may be incremented if substantial new functionality or improvements are introduced to private code. 
  - It may also include PATCH level changes. 
  - PATCH version must be reset to 0 when MINOR version is incremented.
- *MAJOR* must be incremented if any backwards incompatible changes are introduced 
  - It may also include MINOR and PATCH level changes.
  - MINOR and PATCH versions must be reset to 0 when MAJOR version is incremented.  

# git branches
- *main* - only contains snapshots of release versions
- *develop* - represents a state with the latest delivered development changes
- *feature* - used when developing a new feature or enhancement. Named as feature#-name. # is only added if applicable
- *issue* - used when fixing an existing issue. Named as issue#-summary
---
- *tag* - git tag vX.X.X

# build
- npm run build
- npm run preview to preview build locally
- deployed on render.com: https://render.com/docs/deploy-rails

deploy
- render automatically deploys commits on branch *main*