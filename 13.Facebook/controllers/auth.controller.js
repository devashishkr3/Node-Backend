const { connection } = require("../utils/sqlConnection");
const cuid = require("cuid");

exports.signupController = (req, res) => {
  // data from frontend
  const { name, email, password, dob } = req.body;

  // generate unique id for user
  let id = cuid();

  // query to insert user data into database
  let registerQuery =
    "INSERT INTO user(id, name, email, password, dob) VALUES(?,?,?,?,?)";

  // array of user data to be inserted into database
  let userArr = [id, name, email, password, dob];

  try {
    connection.query(registerQuery, userArr, (err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Database Error",
          success: false,
        });
      }

      return res.status(201).json({
        message: "User Registered Successfully.",
        success: true,
      });
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
      success: false,
    });
  }
};

exports.loginController = (req, res) => {
  const { email, password } = req.body;

  const loginQuery = `SELECT * FROM user WHERE email=?`;

  try {
    connection.query(loginQuery, email, (err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Database Error",
          success: false,
        });
      }

      if (result.length == 0 || !result) {
        return res.status(404).json({
          message: "No user found with this Email, Please Signup First.",
          success: false,
        });
      }

      let existUser = result[0];
      if (existUser.password === password) {
        return res.status(200).json({
          message: "Login Successful",
          success: true,
        });
      }else{
        return res.status(400).json({
            message: "Invalid Credentials",
            success: false
        })
      }
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
      success: false,
    });
  }
};
