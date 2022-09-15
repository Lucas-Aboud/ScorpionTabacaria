const { Address, Users, Orders, OrderItems } = require("../database/models");

const carrinhoController = {
  getCartPage: (req, res) => {
    res.render('carrinho')
  },
  create: (req, res) => {
    const {
      name,
      description,
      specification,
      price,
      stock,
      sale,
      brand,
      category
    } = req.body;
    const { path } = req.file;

    database.Products.create({
      name,
      description,
      specification,
      price,
      stock,
      sale: Number(sale),
      image_path: path,
      brand,
      category
    })
      .then(() => {
        return res.redirect('/categoria/admin/sucesso');
      })
      .catch(error => res.send(error))
  },

}

module.exports = carrinhoController