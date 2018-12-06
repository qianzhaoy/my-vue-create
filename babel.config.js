module.exports = {
  presets: ["@vue/app"],
  plugins: [
    "lodash",
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: name => `${name}/style/less`
      },
      "vant"
    ]
  ]
};
