const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "1",
        firefox: "10",
        chrome: "20",
        safari: "7",
      },
    },
  ],
  [
    "@babel/preset-typescript",
    {
      targets: {
        edge: "1",
        firefox: "10",
        chrome: "20",
        safari: "7",
      },
    },
  ],
];

module.exports = { presets };