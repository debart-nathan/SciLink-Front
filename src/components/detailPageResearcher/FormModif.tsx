import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import JsonServerB from "../../services/jsonServerB";

const FormModif = ({
  id,
  entityName,
  data,
  handleRefresh,
}: {
  id: string;
  entityName: string;
  data: { [key: string]: string };
  handleRefresh: Function;
}) => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState<boolean>(false);
  const keys = Object.keys(data);

  const onSubmit = async (data: any) => {
    try {
      await JsonServerB.EntityUpdate(entityName, id, data);
    } catch (error) {
      console.error(error);
    } finally {
      setShow(false);
      handleRefresh();
    }
  };

  return (
    <div>
      {show ? (
        <div>
          <form className="form text-center" onSubmit={handleSubmit(onSubmit)}>
            {keys.map((key: string) => {
              return (
                <input className="form-control" key={key} {...register(key)} defaultValue={data[key]} />
              );
            })}
            <button className="btnx" type="submit" >
             <span></span><span></span><span></span><span></span> envoyer les modifications </button>
          </form>
        </div>
      ) : (
        <Button className="btnx fs-5" onClick={() => setShow(true)}>
         <span></span><span></span><span></span><span></span> Modifier</Button>
      )}
    </div>
  );
};

export default FormModif;
