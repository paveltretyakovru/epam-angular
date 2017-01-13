const express = require('express');
const cors = require('cors');
const notifier = require('node-notifier');

// ========================== Init express app =================================
const app = express();
// =============================================================================

// ========================== Init app variables ===============================
app.set('host', process.env.SERVER_HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.set('frontHost', process.env.FRONT_HOST || 'http://localhost:8080');
// =============================================================================

// ========================== Init express middlewares =========================
app.use(cors({credentials: true, origin: app.get('frontHost')}));
// =============================================================================

// ==================== Routes -================================================
app.get('/login', function(req, res, next) {
  let login = req.query.login,
      password = req.query.password;

  console.log(`Login route with login: ${login}; password: ${password}`);

  if(login === 'q' && password === 'q') {
    return res.json({success: true});
  } else {
    res.status(422);
    return res.json({ success: false });
  }

});
// =============================================================================

// ==================== INIT SERVER ===========================================
app.listen(app.get('port'), app.get('host'), error => {
  let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`
  if (!error) notifier.notify(`${mess}`)
})
// ----------------------------------------------------------------------------
