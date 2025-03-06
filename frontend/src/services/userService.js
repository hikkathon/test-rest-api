import { api } from "./api"

async function getUsers(){
  const response = await api.get("/");
  return response.data;
};

async function createUser(user){
  const response = await api.post("/", user);
  return response.data;
};

async function deleteUser(id){
  await api.delete(`/${id}`);
};

export { createUser, deleteUser, getUsers }
