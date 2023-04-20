import React, { useState } from "react";
import FormCompany from "../../administrator/company/FormCompany";
import { Toaster, toast } from "react-hot-toast";
import { APISERVICE } from "../../../services/api.services";
import { useEffect } from "react";

export default function Company() {


  const [company, setCompany] = useState([]);
  const messageToast = (message) => {
    toast.success(message);
  };


  const getCompany = async () => {
    const url = "empresa/get-company";
    const params = "";
    const response = await APISERVICE.get(url, params);
    setCompany(response.data);
  };
  const updateCompany = async (body) => {
    const url = "empresa/update?id=";
    const params = body.id;
    const response = await APISERVICE.post(body, url, params );
    if (response.status === 200) {
      messageToast("Compania Actualizada");
    }
    getCompany();
  };
  //console.log(company);
  useEffect(() => {
    getCompany();
  }, []);
  return (
    <div className="container pt-5 ps-5 pe-5">
      <FormCompany value={company} updateCompany={updateCompany} setValue={setCompany} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
