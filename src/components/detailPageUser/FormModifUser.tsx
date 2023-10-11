import { useState } from "react";
import { useForm } from "react-hook-form";
import JsonServerB from "./../../services/jsonServerB";
import Modal from "react-bootstrap/Modal";

const FormModifUser = ({
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

  const handleClose = async () => {await setShow(false);
setShow(false);};
  const handleShow = () => setShow(true);
  

  
    

  return (
    <button
      className="btn btn-outline-warning col-md-1"
      onClick={handleShow}
    >
      modifier
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            {keys.map((key: string) => {
              return (
                <input key={key} {...register(key)} defaultValue={data[key]} />
              );
            })}
            <input type="submit" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Fermer</button>
        </Modal.Footer>
      </Modal>
    </button>
  );
};

export default FormModifUser;
