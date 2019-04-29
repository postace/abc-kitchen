# List of TODOs

- Hash router give us an ugly url, that contains '#'. We need to get through this sort of
  problem, but it give us another form of problem like:
  When someone is trying to access page that is not appear to our route (react-router), then
  he will not get the correct html page.
  Even using webpack-dev-server plugin, we cannot get rid of this problem.
  An example here is: Admin create user, user receive an activation email and click on them,
  and immediately sees an error page. Haizz
