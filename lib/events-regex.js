EventsRegex = [
  {
    // Discover all event maps.
    regex: /Template(?:\.([^\.]+)|\[([\"\'])([^\"]+)\2\])\.events\({([\w\W]*?({[\w\W]*?})*[\w\W]*?)}\);/g
  },
  {
    // Add the events to the events map kept in memory by the build plugin.
    regex: /Template(?:\.([^\.]+)|\[([\"\'])([^\"]+)\2\])\.events\(/g,
    replace: `Events.addEvents("$1", `
  }
];
