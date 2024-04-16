import { toast } from "react-toastify";
import AutoInput from "../components/AutoInput";
import { statusOpt, typeOpt } from "../constants";
import { v4 } from "uuid";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { createJob } from "../app/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import Select from "../components/Select";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newJobData = Object.fromEntries(formData.entries());

    // tarih ve id ekle
    newJobData.id = v4();
    newJobData.date = new Date().toLocaleDateString();

    // api ' ayeni veriyi kaydet
    api
      .post("/jobs", newJobData)
      .then(() => {
        //bildirim gönder
        toast.success("İş başarıyla eklendi");
        // store'a yeni veriyi kaydet
        dispatch(createJob(newJobData));
        // anasayfaya yönlendir
        navigate("/");
      })
      .catch(() => {
        //bildirim gönder
        toast.error("İş eklenirken bir hata oluştu");
      });
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>
        <form onSubmit={handleSubmit}>
          <AutoInput label={"Pozisyon"} name={"position"} />
          <AutoInput label={"Şirket"} name={"company"} />
          <AutoInput label={"Lokasyon"} name={"location"} />
          <Select label={"Durum"} options={statusOpt} name={"status"} />
          <Select label={"Tür"} options={typeOpt} name={"type"} />

          <div>
            <button className="button">Oluştur</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
