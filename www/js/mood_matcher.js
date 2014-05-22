 var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substringRegex;
     
        // an array that will be populated with substring matches
        matches = [];
     
        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');
     
        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            // the typeahead jQuery plugin expects suggestions to a
            // JavaScript object, refer to typeahead docs for more info
            matches.push({ value: str });
          }
        });
        cb(matches);
      };
    };
    
		 var mood_states = ['Angry', 'Annoyed', 'Apathetic', 'Blah', 'Blisful', 'Bored', 'Calm', 'Cheerful',
      'Content', 'Confused', 'Cranky', 'Crappy', 'Disappointed',
      'Drained', 'Ecstatic', 'Energetic', 'Frustrated', 'Grateful', 'Happy', 'Grateful', 'Hopeful', 'Indifferent',
      'Irritated', 'Jealous', 'Lazy', 'Lethargic', 'Mellow',
      'Numb', 'Optimistic', 'Pessimistic', 'Quixotic', 'Relaxed',
      'Sad', 'Stressed', 'Tired', 'Uncomfortable', 'Wierd', 
    ];
     
    $('#mood').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'mood_states',
      displayKey: 'value',
      source: substringMatcher(mood_states)
    });