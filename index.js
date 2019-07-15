const electron = require("electron");

const { app } = electron;

// Event Based Dev.
app.on("ready", () => {
  console.log("App is now ready");
});
