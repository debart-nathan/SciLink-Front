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

  const handleClose = async () => {
    await setShow(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <button className="btnx col-md-2 col-12 my-4" onClick={handleShow}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      modifier
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="">Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            {keys.map((key: string) => {
              return (
                <input key={key} {...register(key)} defaultValue={data[key]} />
              );
            })}
            <button className="btnx" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span> envoyer
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btnx" onClick={handleClose}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>Fermer
          </button>
        </Modal.Footer>
      </Modal>
    </button>
  );
};

export default FormModifUser;
