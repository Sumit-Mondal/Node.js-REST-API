# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.1.12] - 2020-06-06

### Changed

- Controller logic of all the routes for accessing all tours related data.

## [0.1.11] - 2020-06-06

### Added

- Database model for Tours collection from the tourSchema.

### Changed

- Controller logic for creating a new tour in the database.

### Removed

- Param middleware in tourRouter & userRouter.

## [0.1.10] - 2020-06-06

### Added

- Configuration files for Development, Production & Test environments.
- Connection to the remote mongoDB database.

## [0.1.9] - 2020-06-05

### Added

- Middleware to check for required body parameters in POST routes of tourRouter & userRouter.

## [0.1.8] - 2020-06-05

### Added

- Param middleware in tourRouter & userRouter.

### Changed

- Versioning system in CHANGELOG.md file.

## [0.1.7] - 2020-06-05

### Added

- Separate modules for routes and controllers.
- Server.ts file.

### Changed

- app.ts file.
- NPM scripts in package.json file to start the application from server.ts file.

## [0.1.6] - 2020-06-04

### Added

- Routes for accessing all users related data.

## [0.1.5] - 2020-06-04

### Added

- Rotating file logger with Morgan.

## [0.1.4] - 2020-06-04

### Changed

- Chained existing routes for accessing all tours related data.

## [0.1.3] - 2020-06-03

### Added

- Routes for accessing all tours related data.

### Changed

- README.md file.

## [0.1.2] - 2020-06-03

### Added

- Basic express server with the Base route.

### Changed

- README.md file.

## [0.1.1] - 2020-06-03

### Added

- .gitignore file.
- tsconfig.json file.
- README.md file.
- CHANGELOG.md file.
- Basic project structure.
- Express as project dependency.
- TypeScript, ts-node, nodemon, @types/node & @types/express as developer dependency.
