// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/index.html"));
  });
  // cms route loads cms.html
  app.get("/vehicles", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/vehicles.html"));
  });
  // blog route loads blog.html
  app.get("/weapons", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/weapons.html"));
  });
  // authors route loads author-manager.html
  app.get("/cart", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/cart.html"));
  });
  app.get("/armor", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/armor.html"));
  });
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/index.html"))
  })
};