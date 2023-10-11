import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import JsonServerB from "./../../services/jsonServerB";

const FormModif = ({
  id,
  entityName,
  data,
  handleRefresh,
}: {
  id: number;
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
            <input className="btn btn-outline-warning" type="submit" />
          </form>
        </div>
      ) : (
        <Button className="btn btn-outline-warning" onClick={() => setShow(true)}>Modifier</Button>
      )}
    </div>
  );
};

export default FormModif;
