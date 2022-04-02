$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "search-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User enters search item as \"\u003csearchItem\u003e\" in the text-box and press enter or click search bar",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to see all the related items.",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-functionality;;",
  "rows": [
    {
      "cells": [
        "searchItem"
      ],
      "line": 11,
      "id": "search-functionality;;;1"
    },
    {
      "cells": [
        "Training"
      ],
      "line": 12,
      "id": "search-functionality;;;2"
    },
    {
      "cells": [
        "Cars"
      ],
      "line": 13,
      "id": "search-functionality;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9218583524,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User clicks search bar",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_is_on_Home_page()"
});
formatter.result({
  "duration": 10147656674,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_search_bar()"
});
formatter.result({
  "duration": 167681630,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User enters search item as \"Training\" in the text-box and press enter or click search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to see all the related items.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Training",
      "offset": 28
    }
  ],
  "location": "Steps.enters_search_item_as_in_the_text_box_and_press_enter_or_click_search_bar(String)"
});
formatter.result({
  "duration": 7527336509,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_see_all_the_related_items()"
});
formatter.result({
  "duration": 68394688,
  "status": "passed"
});
formatter.before({
  "duration": 7138234123,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User clicks search bar",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_is_on_Home_page()"
});
formatter.result({
  "duration": 10015399162,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_search_bar()"
});
formatter.result({
  "duration": 152228120,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "",
  "id": "search-functionality;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User enters search item as \"Cars\" in the text-box and press enter or click search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to see all the related items.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cars",
      "offset": 28
    }
  ],
  "location": "Steps.enters_search_item_as_in_the_text_box_and_press_enter_or_click_search_bar(String)"
});
formatter.result({
  "duration": 9445479938,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_see_all_the_related_items()"
});
formatter.result({
  "duration": 67256888,
  "status": "passed"
});
formatter.before({
  "duration": 8020200011,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User clicks search bar",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_is_on_Home_page()"
});
formatter.result({
  "duration": 10021650353,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_search_bar()"
});
formatter.result({
  "duration": 188883338,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User enter search item as \"Training\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User select a filter options on right hand side",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should see all the related items accordingly.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Training",
      "offset": 27
    }
  ],
  "location": "Steps.user_enter_search_item_as(String)"
});
formatter.result({
  "duration": 6894612529,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_select_a_filter_options_on_right_hand_side()"
});
formatter.result({
  "duration": 6869010046,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_see_all_the_related_items_accordingly()"
});
formatter.result({
  "duration": 46745375,
  "status": "passed"
});
});