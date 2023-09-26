const app = require('./app')

const PORT = process.env.PORT || 3001
let server = app.listen(PORT, () => {
  console.log(`App server is running on port ${PORT}`);
});