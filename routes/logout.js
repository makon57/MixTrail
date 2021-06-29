


router.post('/', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});