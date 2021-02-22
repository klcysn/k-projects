Description:
John has bought a new house and found a diary of previous house owner, describing a single trip. Also there were tickets inside with source and destination points, but without dates.
Help John finding original route of the trip.
Task:
Write a function that accepts array of tickets, where ticket has format [source: string, destination: string]
and returns comma separated countries in order of visiting.
Example:
tickets: [["USA", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "USA"], ["USA", "JPN"], ["JPN", "TUR"], ["TUR", "USA"]]
result: USA ✈ BRA ✈ UAE ✈ USA ✈ BRA ✈ UAE ✈ USA ✈ PHL
