
const User = ({ name, last_name, timeout }) => {
  return (
    <div className="card">
      <h2>{name} {last_name}</h2>
    </div>
  );
};

export default User;