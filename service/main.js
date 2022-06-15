//-------------------------this is a service ------------------------//
// const bcryptjs = require("bcryptjs");
const prisma = require("../_prisma");
const mainService = {
  fetchproducts: async () => {
    const data = await prisma.product.findMany({});
    return data ?? false;
  },
  fetchorders: async ({ id }) => {
    const data = await prisma.order.findMany({
      where: {
        id,
      },
    });
    return data ?? false;
  },
};
module.exports = mainService;

