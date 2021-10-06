function Datadisplay(props) {
  return (
    <div>
      {props.data.map((data) => (
        <div className="user-data">
          <section className="data-content">
            <img className="data-img" alt="User Avatar" src={data.avatar}></img>
            <div className="user-detele">
              <p>
                Name: {data.first_name} {data.last_name}
              </p>
              <p> {data.email}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Datadisplay;
