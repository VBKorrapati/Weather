$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Weatherforcast/DailyForecastSummary.feature");
formatter.feature({
  "line": 2,
  "name": "As a user i could able to see daily forecast should displays into 3 hour data",
  "description": "\nAs a weather forecast Customer, if i enter the city  , i should get 5 days weather forecast",
  "id": "as-a-user-i-could-able-to-see-daily-forecast-should-displays-into-3-hour-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 1,
      "name": "@dailyforecaste"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "generate 5 day weather forecast by entering valid city name",
  "description": "",
  "id": "as-a-user-i-could-able-to-see-daily-forecast-should-displays-into-3-hour-data;generate-5-day-weather-forecast-by-entering-valid-city-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i enter city name:\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i see 5 days weather forecast",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i see each day forecast shows the most dominent details",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-user-i-could-able-to-see-daily-forecast-should-displays-into-3-hour-data;generate-5-day-weather-forecast-by-entering-valid-city-name;",
  "rows": [
    {
      "cells": [
        "city"
      ],
      "line": 17,
      "id": "as-a-user-i-could-able-to-see-daily-forecast-should-displays-into-3-hour-data;generate-5-day-weather-forecast-by-entering-valid-city-name;;1"
    },
    {
      "cells": [
        "Edinburgh"
      ],
      "line": 18,
      "id": "as-a-user-i-could-able-to-see-daily-forecast-should-displays-into-3-hour-data;generate-5-day-weather-forecast-by-entering-valid-city-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "generate 5 day weather forecast by entering valid city name",
  "description": "",
  "id": "as-a-user-i-could-able-to-see-daily-forecast-should-displays-into-3-hour-data;generate-5-day-weather-forecast-by-entering-valid-city-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@dailyforecaste"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i enter city name:\"Edinburgh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i see 5 days weather forecast",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i see each day forecast shows the most dominent details",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationStepDefinition.launchapplication()"
});
formatter.result({
  "duration": 11205117678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 19
    }
  ],
  "location": "WebApplicationStepDefinition.enterCity(String)"
});
formatter.result({
  "duration": 1610573751,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationStepDefinition.verifyFiveDayForecast()"
});
formatter.result({
  "duration": 221024849,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationStepDefinition.selectEachForecast()"
});
formatter.result({
  "duration": 2311343219,
  "error_message": "java.lang.AssertionError: Day 2 :Most dominant (or current) wind speed and direction\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat CucumberSteps.WebApplicationStepDefinition.selectEachForecast(WebApplicationStepDefinition.java:315)\r\n\tat ✽.Then i see each day forecast shows the most dominent details(Weatherforcast/DailyForecastSummary.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebApplicationStepDefinition.closeWeatherApp()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Weatherforcast/FiveDayWeather.feature");
formatter.feature({
  "line": 2,
  "name": "As a User if i enter city name , i should able see 5 day weather forecast",
  "description": "\nAs a weather forecast Customer, if i enter the city  , i should get 5 days weather forecast",
  "id": "as-a-user-if-i-enter-city-name-,-i-should-able-see-5-day-weather-forecast",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 1,
      "name": "@fiveday"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "generate 5 day weather forecast by entering valid city name",
  "description": "",
  "id": "as-a-user-if-i-enter-city-name-,-i-should-able-see-5-day-weather-forecast;generate-5-day-weather-forecast-by-entering-valid-city-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i enter city name:\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i see 5 days weather forecast",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-user-if-i-enter-city-name-,-i-should-able-see-5-day-weather-forecast;generate-5-day-weather-forecast-by-entering-valid-city-name;",
  "rows": [
    {
      "cells": [
        "city"
      ],
      "line": 16,
      "id": "as-a-user-if-i-enter-city-name-,-i-should-able-see-5-day-weather-forecast;generate-5-day-weather-forecast-by-entering-valid-city-name;;1"
    },
    {
      "cells": [
        "Edinburgh"
      ],
      "line": 17,
      "id": "as-a-user-if-i-enter-city-name-,-i-should-able-see-5-day-weather-forecast;generate-5-day-weather-forecast-by-entering-valid-city-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "generate 5 day weather forecast by entering valid city name",
  "description": "",
  "id": "as-a-user-if-i-enter-city-name-,-i-should-able-see-5-day-weather-forecast;generate-5-day-weather-forecast-by-entering-valid-city-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@fiveday"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i enter city name:\"Edinburgh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i see 5 days weather forecast",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationStepDefinition.launchapplication()"
});
formatter.result({
  "duration": 8694847835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 19
    }
  ],
  "location": "WebApplicationStepDefinition.enterCity(String)"
});
formatter.result({
  "duration": 2019382454,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationStepDefinition.verifyFiveDayForecast()"
});
formatter.result({
  "duration": 167471511,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationStepDefinition.closeWeatherApp()"
});
formatter.result({
  "duration": 2498387062,
  "status": "passed"
});
formatter.uri("Weatherforcast/HiddeHourlyForecast.feature");
formatter.feature({
  "line": 2,
  "name": "As a User Select day twice, hides 3 hourly forecast",
  "description": "\nAs a weather forecast Customer,if i enter city name, and if i select day, get 3 hourly forecast.",
  "id": "as-a-user-select-day-twice,-hides-3-hourly-forecast",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 1,
      "name": "@hide"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Select day, get 3 hourly forecast",
  "description": "",
  "id": "as-a-user-select-day-twice,-hides-3-hourly-forecast;select-day,-get-3-hourly-forecast",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i enter city name:\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i click on day:\"\u003cday\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i click on day:\"\u003cday\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should see 3 hourly forecast hidden:\"\u003cday\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-user-select-day-twice,-hides-3-hourly-forecast;select-day,-get-3-hourly-forecast;",
  "rows": [
    {
      "cells": [
        "city",
        "day"
      ],
      "line": 16,
      "id": "as-a-user-select-day-twice,-hides-3-hourly-forecast;select-day,-get-3-hourly-forecast;;1"
    },
    {
      "cells": [
        "Edinburgh",
        "3"
      ],
      "line": 17,
      "id": "as-a-user-select-day-twice,-hides-3-hourly-forecast;select-day,-get-3-hourly-forecast;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Select day, get 3 hourly forecast",
  "description": "",
  "id": "as-a-user-select-day-twice,-hides-3-hourly-forecast;select-day,-get-3-hourly-forecast;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@hide"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i enter city name:\"Edinburgh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i click on day:\"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i click on day:\"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should see 3 hourly forecast hidden:\"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationStepDefinition.launchapplication()"
});
formatter.result({
  "duration": 8946724294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 19
    }
  ],
  "location": "WebApplicationStepDefinition.enterCity(String)"
});
formatter.result({
  "duration": 1786614924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WebApplicationStepDefinition.clickDay(String)"
});
formatter.result({
  "duration": 425306038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WebApplicationStepDefinition.clickDay(String)"
});
formatter.result({
  "duration": 470871664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "WebApplicationStepDefinition.hiddenForecast(String)"
});
formatter.result({
  "duration": 26920618,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationStepDefinition.closeWeatherApp()"
});
formatter.result({
  "duration": 2132739716,
  "status": "passed"
});
formatter.uri("Weatherforcast/HourlyForcast.feature");
formatter.feature({
  "line": 2,
  "name": "As a User if i Select day, gets 3 hourly forecast",
  "description": "\nAs a weather forecast Customer,if i enter city name, and if i select day, get 3 hourly forecast.",
  "id": "as-a-user-if-i-select-day,-gets-3-hourly-forecast",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 1,
      "name": "@threehours"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Select day, get 3 hourly forecast",
  "description": "",
  "id": "as-a-user-if-i-select-day,-gets-3-hourly-forecast;select-day,-get-3-hourly-forecast",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i enter city name:\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i click on day:\"\u003cday\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should  get 3 hourly forecast:\"\u003cday\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-user-if-i-select-day,-gets-3-hourly-forecast;select-day,-get-3-hourly-forecast;",
  "rows": [
    {
      "cells": [
        "city",
        "day"
      ],
      "line": 16,
      "id": "as-a-user-if-i-select-day,-gets-3-hourly-forecast;select-day,-get-3-hourly-forecast;;1"
    },
    {
      "cells": [
        "Edinburgh",
        "3"
      ],
      "line": 17,
      "id": "as-a-user-if-i-select-day,-gets-3-hourly-forecast;select-day,-get-3-hourly-forecast;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Select day, get 3 hourly forecast",
  "description": "",
  "id": "as-a-user-if-i-select-day,-gets-3-hourly-forecast;select-day,-get-3-hourly-forecast;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@threehours"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "launch weather forecast application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i enter city name:\"Edinburgh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i click on day:\"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should  get 3 hourly forecast:\"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i close the weather forecast application",
  "keyword": "Then "
});
formatter.match({
  "location": "WebApplicationStepDefinition.launchapplication()"
});
formatter.result({
  "duration": 8167402744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 19
    }
  ],
  "location": "WebApplicationStepDefinition.enterCity(String)"
});
formatter.result({
  "duration": 1775071358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WebApplicationStepDefinition.clickDay(String)"
});
formatter.result({
  "duration": 448001610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ],
  "location": "WebApplicationStepDefinition.get3HourForeCast(String)"
});
formatter.result({
  "duration": 475491349,
  "status": "passed"
});
formatter.match({
  "location": "WebApplicationStepDefinition.closeWeatherApp()"
});
formatter.result({
  "duration": 2030028974,
  "status": "passed"
});
});