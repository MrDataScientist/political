$(document).ready(function(){
	console.log("THIS DoQUMENT IZ WERQING");


 	var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

	var results = [];
	var wins = ["R","R","R","R","R","D","R","D","R","R","R","R","D","D","R","R","R","D","D","D","D","D","R","R","D","D","R","R","D","R","R","R","D","D","R","R","D","D"];

	states.forEach(function(ele, ind) {
		var data = { 'name': ele };
		results.push(data);
	});

	var stateResults = [
		["","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","D","I","R","AI","R","D","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","","","","","","","","","","","","","","","","","","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","","","","","","D","D","R","R","R","D","D","D","D","D","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R"],
	  ["","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","AI","R","D","R","R","R","D","D","R","R","R","R"],
	  ["R","R","R","R","D","R","R","D","R","R","R","R","PR","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["","","","R","R","R","R","PO","D","D","R","D","D","D","R","R","R","D","D","R","R","D","R","R","R","D","R","R","R","R","R","R","D","R","R","R","D","D"],
	  ["R","R","R","D","R","D","D","D","R","R","R","R","D","R","R","R","R","R","D","D","D","R","R","R","D","D","D","R","R","R","R","R","D","D","D","D","D","D"],
	  ["D","D","R","D","D","D","D","D","R","R","R","R","D","R","R","R","R","R","D","D","D","R","R","R","D","D","R","R","D","R","R","R","D","D","D","D","D","D"],
	  ["","","","","","","","","","","","","","","","","","","","","","","","","","D","D","D","D","D","D","D","D","D","D","D","D","D"],
	  ["","R","R","R","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","R","R","R","D","R","R","D","R","R","R","R","D","R","R","D","D"],
	  ["","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","R","AI","R","D","D","R","R","D","R","R","R","R","R"],
	  ["","","","","","","","","","","","","","","","","","","","","","","","","D","D","D","R","D","D","R","D","D","D","D","D","D","D"],
	  ["","","","","","","","PO","D","D","R","R","D","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","R","R","R","D","R","R","R","R","D","R","R","R","R","D","D","D","D","D","R","R","D","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["R","R","R","D","R","D","R","D","R","R","R","R","D","R","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","D","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","D","D","R","R","D","R","R","R","D","R","R","R","R","R","D","D","D","D","R","D","D"],
	  ["R","R","R","R","R","R","R","PO","D","R","R","R","D","D","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["D","D","D","D","D","D","D","D","R","D","D","D","D","D","D","R","R","D","D","D","D","D","D","R","R","D","R","R","D","R","R","R","D","D","R","R","R","R"],
	  ["","D","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","R","D","R","AI","R","D","R","R","R","D","D","R","R","R","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R","D","D","R","R","R","R","R","D","D","D","D","D","D"],
	  ["R","D","D","D","D","D","D","D","R","R","D","D","D","D","R","R","R","D","D","D","D","R","R","R","D","D","D","R","D","D","R","R","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","D","D","D","D","D","D","R","R","D","D","D","D","D","R","R","D","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","PR","R","R","R","R","D","D","R","D","R","R","R","D","D","D","R","R","R","R","R","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","PR","R","R","R","R","D","D","D","D","D","R","R","D","D","D","R","D","D","D","D","D","D","D","D","D","D"],
	  ["","","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","D","I","R","AI","R","D","R","R","R","R","R","R","R","R","R"],
	  ["R","R","D","D","D","D","D","D","D","D","R","R","D","D","R","R","R","D","D","D","D","D","R","D","D","D","R","R","D","R","R","R","D","D","R","R","R","R"],
	  ["","","","","","","","R","D","D","R","R","D","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","D","R","R","R","R","R"],
	  ["","R","R","R","R","R","R","R","D","R","R","D","D","D","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","D","R","R","PO","D","D","R","D","D","D","R","R","R","D","D","D","D","D","R","R","D","D","R","R","R","R","R","R","D","D","R","R","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","D","R","R","R","R","D","D","D","R","R","R","R","D","R","R","R","R","R","R","D","D","R","D","D","D"],
	  ["D","D","R","D","D","D","D","D","R","R","R","R","D","R","R","R","R","D","D","D","D","R","R","R","D","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["","","","","","","","","","","","","D","D","R","R","R","D","D","D","D","D","R","R","D","D","R","R","R","R","R","R","D","D","D","R","D","D"],
	  ["R","D","R","D","R","D","R","D","R","R","R","R","D","R","R","R","R","D","D","D","D","R","R","R","D","D","D","R","D","R","R","D","D","D","D","D","D","D"],
	  ["","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","D","D","D","D","R","R","D","R","R","R","R","R","R","R","D","R"],
	  ["","","","","","","","SP","R","R","R","R","D","D","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","D","R","R","R","D","D","D","R","D","R","R","R","D","R","R","D","R","R","R","D","D","R","R","D","D"],
	  ["","","","","","","","","","","","D","D","D","R","D","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","D","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","D","D","D","D","R","R","R","R","D","R","R","R","R","R","D","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","PR","R","R","R","R","R","D","D","D","R","R","R","D","D","D","R","D","R","R","R","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","D","D","D","D","D","D","R","R","D","D","D","R","D","D","R","D","D","D","D","D","D","D"],
	  ["","R","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","R","D","R","R","R","PR","R","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["","R","D","D","D","D","D","D","D","D","D","D","D","D","R","D","R","D","D","D","D","D","R","R","R","D","R","R","D","R","R","R","D","D","R","R","R","R"],
	  ["","","D","D","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","R","R","D","D","D","R","D","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","","D","R","R","R","R","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["","","R","D","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","D","D"],
	  ["","","","","","","","R","D","R","R","R","PR","D","R","R","R","D","D","D","D","D","R","R","R","D","D","R","R","R","R","D","D","D","D","D","D","D"],
	  ["R","R","R","D","D","D","D","D","R","R","R","R","D","R","R","R","R","D","D","D","D","D","D","R","D","D","D","R","D","D","R","D","D","D","R","R","R","R"],
	  ["R","R","R","R","R","R","R","D","R","R","R","R","D","R","R","PR","R","D","D","D","R","D","R","R","R","D","R","R","D","R","R","D","D","D","D","D","D","D"],
	  ["","","","","","","","R","D","R","R","R","D","D","R","R","R","D","D","D","R","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"]
	];

	stateResults.forEach(function(state, i) {
		var electionCount = 0;
		var correct = 0;
		wins.forEach(function(result, j) {
			vote = state[j];
			if (vote !== "") {
				electionCount ++;
				if (vote === result) {
					correct ++;
				}
			}
		});
		results[i].electionCount = electionCount;
		results[i].correctCount = correct;
		results[i].accuracy = correct / electionCount;
	});

	var election = new Datamap({
	  scope: 'usa',
	  element: document.getElementById('map_election'),
	  geographyConfig: {
	    highlightBorderColor: '#bada55',
	   popupTemplate: function(geography, data) {
	        return '<div class="hoverinfo">' + geography.properties.name +
		'Electoral Votes:' +  data.electoralVotes + ' '
	    },
	    highlightBorderWidth: 3
	  },

	  fills: {
	  'Republican': '#CC4731',
	  'Democrat': '#306596',
	  'Heavy Democrat': '#667FAF',
	  'Light Democrat': '#A9C0DE',
	  'Heavy Republican': '#CA5E5B',
	  'Light Republican': '#EAA9A8',
	  defaultFill: 'rgb(28, 152, 28)'
	},
	data:{
	  "AZ": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 5
	  },
	  "CO": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 5
	  },
	  "DE": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "FL": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 29
	  },
	  "GA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "HI": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "ID": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "IL": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "IN": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 11
	  },
	  "IA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 11
	  },
	  "KS": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "KY": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "LA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "MD": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "ME": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "MA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "MN": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "MI": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "MS": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "MO": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 13
	  },
	  "MT": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "NC": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "NE": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "NV": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "NH": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "NJ": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "NY": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "ND": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "NM": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "OH": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "OK": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "OR": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "PA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "RI": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "SC": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "SD": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "TN": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "TX": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "UT": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "WI": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "VA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "VT": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "WA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "WV": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "WY": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "CA": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "CT": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "AK": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "AR": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "AL": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  }
	}
	});
	election.labels();

	results.forEach(function(ele) {
		$("path.datamaps-subunit." + ele.name.toLowerCase()).css('opacity', ele.accuracy);
	});
});
