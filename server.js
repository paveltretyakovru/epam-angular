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
  console.log('Login route:');
  return res.json({test: 123, google: '.com'});
});
// =============================================================================

// ==================== INIT SERVER ===========================================
app.listen(app.get('port'), app.get('host'), error => {
  let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`
  if (!error) notifier.notify(`${mess}`)
})
// ----------------------------------------------------------------------------
