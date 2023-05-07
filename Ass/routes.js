const requestHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    return res.write(
      '<form action="/create-user"><label for="username">user name:</label><br><input type="text" id="username" name="username"><br><input type="submit" value="Submit"></form> '
    );
  } else if (url === "/create-user") {
    console.log(`${username} form the form`);
    return res.redirect("/");
  }
};

module.exports = requestHandler;
