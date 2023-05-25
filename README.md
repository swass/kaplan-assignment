# KaplanAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
Node version: v19.8.1

## Local Development
1. Clone the repo with git clone https://github.com/swass/kaplan-assignment.git
2. Open Git bash inside the project and run
    npm install
4. ng serve
5. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

************************************************************************************
## Code details
Components Used:
### 1.App Component
LeftNavComponent: used to create and handle the collapsable left navigation.

TopNavComponent: used to create the top navigation bar. It has the company logo. Created seperate component to keep the header standalone and re-usable.

SearchComponent: used to create the search block and it emits the search event on typing anything in the searchbox.

BooksContainerComponent : subscribe to the service and gets the api data in 'items' array. Loop through the array and pass each item to the child component       'BookItemComponent'. Three arrays are used.
items is to store api data.
displayItems to store which items to store if searchbox is empty/or default case
filteredItems to store filtered items to dispaly based on the search criteria.

BookItemComponent uses Input and gets the book data to displya as a card. it displays the data in a card and if any card is clicked, it displays that card         data in a popup. toggleCard function is used to check the status and display the card in popup if clicked.

## Services used:
  ### BooksContentService 
    used to call the api and get data. It has a function 'getAPIData' that returns the API data as observable.
  ### SearchBookService 
    used to implement search functionality in the page. It has a functions 'emitSearchEvent' that emits the event with the text typed in search box.

