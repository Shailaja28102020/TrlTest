$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Features/wishlist.feature");
formatter.feature({
  "line": 1,
  "name": "Car Giant Test",
  "description": "",
  "id": "car-giant-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User login into Car giant website and verifies whether the product is getting added and deleted successfully or not",
  "description": "",
  "id": "car-giant-test;user-login-into-car-giant-website-and-verifies-whether-the-product-is-getting-added-and-deleted-successfully-or-not",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@EndToEndTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on car giant homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User login with username and password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies the title of the page as \"\u003cPage Title\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on home button link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User search for first car \"\u003cWished Car1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User search for second car \"\u003cWished Car2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies the Sort filter and select the result by \"high to low\" from sort filter",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User adds \"\u003cWished Car1\u003e\" into watch list",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User adds \"\u003cWished Car2\u003e\" into watch list",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User navigates to my watch list page by clicking on my garage link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User verifies whether added \"\u003cWished Car1\u003e\" is displaying in my watchlist or not",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User verifies whether added \"\u003cWished Car2\u003e\" is displaying in my watchlist or not",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User removes the added cars from watchlist",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User verifies whether the cars are removed successfully or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "car-giant-test;user-login-into-car-giant-website-and-verifies-whether-the-product-is-getting-added-and-deleted-successfully-or-not;",
  "rows": [
    {
      "cells": [
        "Page Title",
        "Wished Car1",
        "Wished Car2"
      ],
      "line": 23,
      "id": "car-giant-test;user-login-into-car-giant-website-and-verifies-whether-the-product-is-getting-added-and-deleted-successfully-or-not;;1"
    },
    {
      "cells": [
        "My Garage - Cargiant",
        "Audi",
        "BMW"
      ],
      "line": 24,
      "id": "car-giant-test;user-login-into-car-giant-website-and-verifies-whether-the-product-is-getting-added-and-deleted-successfully-or-not;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8404101499,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User login into Car giant website and verifies whether the product is getting added and deleted successfully or not",
  "description": "",
  "id": "car-giant-test;user-login-into-car-giant-website-and-verifies-whether-the-product-is-getting-added-and-deleted-successfully-or-not;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@EndToEndTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on car giant homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User login with username and password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies the title of the page as \"My Garage - Cargiant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on home button link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User search for first car \"Audi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User search for second car \"BMW\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies the Sort filter and select the result by \"high to low\" from sort filter",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User adds \"Audi\" into watch list",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User adds \"BMW\" into watch list",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User navigates to my watch list page by clicking on my garage link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User verifies whether added \"Audi\" is displaying in my watchlist or not",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User verifies whether added \"BMW\" is displaying in my watchlist or not",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User removes the added cars from watchlist",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User verifies whether the cars are removed successfully or not",
  "keyword": "Then "
});
formatter.match({
  "location": "WishListSteps.userIsOnCarGiantHomepage()"
});
formatter.result({
  "duration": 6113750600,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.userClicksOnLoginButtonOnHomepage()"
});
formatter.result({
  "duration": 3778633700,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.userLoginWithUsernameAndPassword()"
});
formatter.result({
  "duration": 9358768601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Garage - Cargiant",
      "offset": 40
    }
  ],
  "location": "WishListSteps.userVerifiesTheTitleOfTheLoginPage(String)"
});
formatter.result({
  "duration": 2049481601,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.userClicksOnHomeButtonLink()"
});
formatter.result({
  "duration": 3148740000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 27
    }
  ],
  "location": "WishListSteps.userSearchForDifferentCars(String)"
});
formatter.result({
  "duration": 10311044300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 28
    }
  ],
  "location": "WishListSteps.userSearchForSecondCar(String)"
});
formatter.result({
  "duration": 10289617100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high to low",
      "offset": 56
    }
  ],
  "location": "WishListSteps.userVerifiesTheSortFilterAndSelectTheResultHighToLowFromSortFilter(String)"
});
formatter.result({
  "duration": 11171319499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 11
    }
  ],
  "location": "WishListSteps.userAddsWishedCarIntoWatchList(String)"
});
formatter.result({
  "duration": 5404779499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 11
    }
  ],
  "location": "WishListSteps.userAddsWishedCarIntoWatchList(String)"
});
formatter.result({
  "duration": 5437571201,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.userNavigatesToMyWatchListPageByClickingOnMyGarage()"
});
formatter.result({
  "duration": 7247067000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 29
    }
  ],
  "location": "WishListSteps.userVerifiesWhetherAddedWishedCarIsDisplayingInMyWatchlistOrNot(String)"
});
formatter.result({
  "duration": 3245059801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 29
    }
  ],
  "location": "WishListSteps.userVerifiesWhetherAddedWishedCarIsDisplayingInMyWatchlistOrNot(String)"
});
formatter.result({
  "duration": 3184208100,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.userRemovesTheAddedCarsFromWatchlist()"
});
formatter.result({
  "duration": 15143502300,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.userVerifiesWhetherTheCarsAreRemovedSuccessfullyOrNot()"
});
formatter.result({
  "duration": 10093649000,
  "status": "passed"
});
formatter.after({
  "duration": 1412028800,
  "status": "passed"
});
});