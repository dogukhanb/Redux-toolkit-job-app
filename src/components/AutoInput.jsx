import React from "react";
import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store);

  // sadece pozisyon değerlerinden oluşan bir dizi tanımla
  const arr = jobs.map((job) => job[name]);
  // dizide tekrar eden elemanları kaldır
  const filtredSet = new Set(arr);
  // set'in döndürdüğü nesneyi diziye çevir
  const options = Array.from(filtredSet);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input list={name} name={name} id={label} type="text" required />

      <datalist id={name}>
        {options.map((i) => (
          <option key={i} value={i} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
