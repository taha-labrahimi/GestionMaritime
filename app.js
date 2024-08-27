const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./models/connection'); // Import Sequelize instance

// Import models
const Client = require('./models/Client');
const User = require('./models/User');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clientRouter = require('./routes/clientRoutes');
const authRouter = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/clients', authenticateToken, clientRouter);
app.use('/auth', authRouter);

// Sync all models and start the server
sequelize.sync({ alter: true })
    .then(() => {
      console.log('All tables have been created or updated.');
      // Start the server here after syncing
      app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
      });
    })
    .catch((error) => {
      console.error('Error creating or updating the tables:', error);
    });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
