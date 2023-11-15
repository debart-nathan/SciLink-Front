const LogOut: React.FC = () => {
  const handleLogout = () => {
    // setIsConnected(false);
  };
  return (
    <div className="col-1 ">
      <button
        type="button"
        
        id=""
        className="bi bi-power btn btn-outline-danger "
        onClick={handleLogout}
      ></button>
    </div>
  );
};
export default LogOut;
