import "./dashboard.css";

export default function Dashboard() {
  const data = [
    {
      key: 1,
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehend…",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cumrepr…",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="content">
          <div className="dashboard-content" id="dashboard-content">
            <ul className="dashboard-list">
              <div>
                <li id="menu">
                  <span className="material-symbols-outlined">list</span>
                  <a href="#menu">Menu</a>
                </li>
                <li className="active">
                  <span className="material-symbols-outlined">dashboard</span>
                  <a href="#dashboard">Dashboard</a>
                </li>
                <li>
                  <span className="material-symbols-outlined">upload</span>
                  <label htmlFor="myfile">Upload File</label>
                  <input type="file" id="myfile" name="myfile"></input>
                </li>
              </div>
              <li className="logout">
                <span className="material-symbols-outlined">logout</span>
                <a href="#logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        {/* header  */}
        <div className="data-container">
          <div className="header">
            <h2>Cool Rao</h2>
            <a href="account">
              <span className="material-symbols-outlined">account_circle</span>
              raosaheba@gmail.com
            </a>
          </div>

          {/* Table data */}
          <div className="table-body">
            <table className="data-body">
              <thead>
                <tr>
                  <th>USER ID</th>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>BODY</th>
                </tr>
              </thead>
              {data.map((val, key) => {
                return (
                  <tbody key={key}>
                    <tr>
                      <td>{val.userId}</td>
                      <td>{val.id}</td>
                      <td>{val.title}</td>
                      <td>{val.body}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
