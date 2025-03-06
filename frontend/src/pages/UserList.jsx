import { useUsers } from "../hooks/useUsers"

function UserList(){
  const { users, isLoading, error, deleteUserMutation } = useUsers();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <div className="container mt-4">
      <h1 className="h2">Пользователи</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} ({user.email})
            <button
              onClick={() => deleteUserMutation.mutate(user.id)}
              className="badge bg-red text-red-fg"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList
