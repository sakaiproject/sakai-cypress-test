# Sakai Automated QA

## Installation

Clone this repository:

`git clone https://github.com/psev/sakai-cypress-tests`

Then, install dependencies:

`npm install`

## Running

To open Cypress, run:

`npm run cypress:open`

## Testing

### Basic Example

```gherkin
Feature: This is an example feature

  @site
  Scenario: This is an example scenario
    Given I am the instructor
    Then go to the site
    Then add the "announcements" tool
    # Add other steps here.
    Then logout
```

### Annotations

- `@admin`
  - Login as _admin_.
- `@site`
  - Create a temporary site and its users.

### Instructions

- __@site__ instructions:
  - `Given` I am the instructor
  - `Given` I am the student
  - `Then` go to the site
- `Given` I am "\<username\>"
- `Then` create user "\<username\>" "\<type:optional\>"
  - __type__ can be one of:
    - registered (_default_)
    - maintain
- `Then` create site "\<sitename\>"
- `Then` add user "\<username\>" to site "\<sitename\>" "\<type:optional\>"
  - __type__ can be one of:
    - access (_default_)
    - maintain
- `Then` add the "\<toolname\>" tool
- `Then` go to site "\<sitename\>"
- `Then` delete site "\<sitename\>"
- `Then` remove user "\<username\>"
- `Then` logout
