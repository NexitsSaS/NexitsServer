//-------------------------this is a controller exemple------------------------//

// const authService = require("../service/auth");
// var jwt = require("jsonwebtoken");
const _error = require("../error");
const mainService = require("../service/main");

exports.getproducts = async (req, res) => {
  try {
    const data = await mainService.fetchproducts();
    res.json(data);
  } catch (error) {
    res.json(_error("an error occured"));
  }
};

exports.getorders = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await mainService.fetchorders(id);
    res.json(data);
  } catch (error) {
    res.json(_error("an error occured"));
  }
};

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const resp = await authService.login({
//       email,
//       password,
//     });

//     const token = jwt.sign(resp, process.env.JWT_SECRET);
//     res.json(token);
//   } catch (error) {
//     res.json(_error("An error occured"));
//   }
// };

// exports.Signup = async (req, res) => {
//   try {
//     const { email, fname, lname, password, type } = req.body;
//     const resp = await authService.signup({
//       email,
//       fname,
//       lname,
//       password,
//       type,
//     });
//     res.json(resp);
//   } catch (error) {
//     res.json(_error("An error occured"));
//   }
// };

// exports.linkmail = async (req, res) => {
//   try {
//     const { email, password, id } = req.body;
//     const resp = await authService.signup({
//       email,
//       password,
//       id,
//     });
//     res.json(resp);
//   } catch (error) {
//     res.json(_error("An error occured"));
//   }
// };

// exports.logout = async (req, res) => {
//   try {
//     const { token } = req.body;
//     const resp = await authService.logout({
//       token,
//     });
//     res.json(resp);
//   } catch (error) {
//     res.json(_error("An error occured"));
//   }
// };
