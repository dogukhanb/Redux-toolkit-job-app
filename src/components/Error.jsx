const Error = ({ retry, message }) => {
  return (
    <div>
      <div className="error">
        <p>Üzgünüz verilere erişirken bir hata oluştu</p>
        <p className="text">{message}</p>
        <button onClick={retry} className="button">
          <span>Tekrar Deneyiniz</span>
        </button>
      </div>
    </div>
  );
};

export default Error;
