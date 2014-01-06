'use strict';


function render(req, res) {
  var user = null,
      csrf = null;
  
  if (req.isAuthenticated()) {
    user = req.user.serialize();
  }
  
  res.render('index.html', {
    csrf: csrf,
    user: user
  });
}

module.exports = {
  render: render
};
