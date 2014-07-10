MoodStatesController = {
  loadStates: function() {
    return $.get(window.apiURL + "mood-states", "json");
  }
};

MoodsController = {
  save: function(mood, origin, energyLevel, thoughts) {
    return $.ajax({type: "GET",
                   url: window.apiURL + "submit-mood",
                   xhrFields: {
                     withCredentials: true
                   },
                   data: { mood: mood,
                           origin: origin,
                           energy_level: energyLevel,
                           thoughts: thoughts}
                  });
  }
};
