const express = require("express");
const cors = require("cors");
const app = express();
// const fakedata = require("./fakedata");
// const prisma = require("./_prisma");
require("dotenv").config();
app.use(cors());
app.use(express.json());

// const cre = async () => {
//   // fakedata.forEach(async (element) => {
//     const data = await prisma.order.create({
//       data: {
//        employeeID:2,
//        state:"Pending"
//       },
//     });
//     console.log(data);
//   // });
// };
// cre();

app.use("/api/fetch", require("./routes/main"));
///////////////////////////////////////////
app.use(function (req, res, next) {
  res.json({ error: "server works" });
});
/////////////////////////////////////////////////
app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
