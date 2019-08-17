const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { email, username, password } = req.body;
    const user = await db.find_email([email]);
    // console.log(req.body);
    // console.log(user);
    if (user.length > 0) {
      return res.status(400).send({ message: "Email in use" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.insert_user({ username, email, hash });
    console.log(newUser);
    //this will remove hash from the returned data of the newUser
    delete newUser[0].hash;
    req.session.user = newUser[0];
    res.status(200).send({
      message: "logged in",
      user: req.session.user,
      loggedIn: true
    });
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    const user = await db.find_email([email]);
    console.log(req.body);
    if (user.length === 0) {
      //meaning if not found return that exactly not found
      return res.status(400).send({ message: "Email not found" });
    }
    const result = bcrypt.compareSync(password, user[0].hash);
    //compareSync is a tool from the bcrypt lib. that essentially compares the password to hash within bcrypt
    if (result) {
      //if it matches then prior to returning user data you delete the hash specifically
      delete user[0].hash;
      req.session.user = user[0];

      return res
        .status(200)
        .send({ message: "logged in", user: req.session.user, loggedIn: true });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send({ message: "logged out", loggedIn: false });
  },
  postVideo: async (req, res) => {
    const db = req.app.get("db");
    // const { user_id } = req.session.user;
    const { user_id, video_data, video_likes } = req.body;
    const user = await db.insert_video({ user_id, video_data, video_likes });
    // req.session.user = user[0]
    // console.log(req.session.user)

    return res.status(200).send(user);
  },
  getData: async (req,res) => {
    const db =req.app.get('db')
    let allVideos = await db.get_video_data()
    res.status(200).send(allVideos)
  }
};
