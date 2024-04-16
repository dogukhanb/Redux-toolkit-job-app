import { useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import Card from "../components/Card";
import Filter from "../components/Filter";

const JobList = ({ retry }) => {
  const { jobs, error, isLoading } = useSelector((store) => store);

  return (
    <div className="list-page">
      <Filter />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error retry={retry} message={error} />
      ) : (
        <div className="cards-wrapper">
          {jobs && jobs.length > 0 ? ( // jobs tanımlı ve boş olmadığını kontrol et
            jobs.map((i) => <Card key={i.id} job={i} />)
          ) : (
            <p>Mevcut iş ilanı yok</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobList;
