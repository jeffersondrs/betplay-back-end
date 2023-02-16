import BetUserModel from "../models/betUserModel.js";

export const getAllBetUsers = async (req, res) => {
  try {
    const betUsers = await BetUserModel.find({});
    res.status(200).json({
      status: "success",
      results: betUsers.length,
      data: {
        betUsers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Falha ao buscar todos os usuários",
      message: err,
    });
  }
};

export const getBetUser = async (req, res) => {
  try {
    const betUser = await BetUserModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        betUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Falha ao buscar o usuário",
      message: err,
    });
  }
};

export const createBetUser = async (req, res) => {
  try {
    const newBetUser = await BetUserModel.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Usuário criado com sucesso",
      data: {
        betUser: newBetUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Falha ao criar o usuário",
      message: err,
    });
  }
};

export const updateBetUser = async (req, res) => {
  try {
    const betUser = await BetUserModel.findByIdAndUpdate(req.params);
    res.status(200).json({
      status: "success",
      message: "Usuário atualizado com sucesso",
      data: {
        betUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Falha ao atualizar o usuário",
      message: err,
    });
  }
};

export const deleteBetUser = async (req, res) => {
  try {
    await BetUserModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "Usuário deletado com sucesso",
    });
  } catch (err) {
    res.status(400).json({
      status: "Falha ao deletar o usuário",
      message: err,
    });
  }
};

export const deleteAllBetUsers = async (req, res) => {
  try {
    await BetUserModel.deleteMany();
    res.status(204).json({
      status: "success",
      message: "Todos os usuários deletados com sucesso",
    });
  } catch (err) {
    res.status(400).json({
      status: "Falha ao deletar todos os usuários",
      message: err,
    });
  }
};
