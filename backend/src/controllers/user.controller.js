import { prisma } from "../config/db.js"

const findUserById = async (id) => {
  const userId = parseInt(id, 10);
  return await prisma.user.findUnique({ where: { id: userId } });
};

// Получить всех пользователей
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Получить одного пользователя по ID
const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await findUserById(id);

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Удалить пльзователя по ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userId = parseInt(id, 10);

    const user = await findUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Редактировать пользователя по ID
const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const userId = parseInt(id, 10);

    const user = await findUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email, password },
    });

    return res.status(200).json({ message: "Данные пользователя обновлены" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Создать пользователя
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createUser, deleteUser, editUser, getAllUsers, getUser }
