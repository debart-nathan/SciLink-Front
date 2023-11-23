import React, { useState } from "react";
import { Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useForm } from "react-hook-form";

type CreateRelationStatusProps = {
    userId: string;
};
type TooltipProps = React.ComponentProps<typeof Tooltip>;

const renderTooltip = (props: TooltipProps, text:string) => (
    <Tooltip id="button-tooltip" {...props}>
        {text}
    </Tooltip>
);

const CreateRelationStatus: React.FC<CreateRelationStatusProps> = ({
    userId,
}) => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const handleClose = () => {
        setShow(false);
        reset();
    };

    const handleShow = () => setShow(true);

    const onSubmit = (data: any) => {
        //TODO faire le fetch
        fetch("/" + userId);
        handleClose();
    };

    return (
      <>
        <h3 className=" mt-5 mb-5">
          contact 
        <Button className="btnx my-2" variant="primary" onClick={handleShow}> + 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Button>
        </h3>
        <div className="col-md-6 col-12">
          <h4>en cours de demande</h4>
        </div>
        <div className="col-md-6 col-12">
          <h4>demande accepte</h4>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="">
               demander a {/*{data.user.firstName} {data.user.lastName}*/} en contact  
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formNom">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    renderTooltip(props, "Tooltip text for Nom")
                  }
                >
                  <Form.Label>statuts</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  className="form-control mb-2"
                  type="text"
                  {...register("status", { required: false })}
                />
              </Form.Group>

              <Button
                className="btnx mx-2"
                variant="secondary"
                onClick={handleClose}
              >Fermer
                <span></span>
                <span></span>
                <span></span>
                <span></span> 
              </Button>
              <Button className="btnx" variant="primary" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span> faire la demande
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default CreateRelationStatus;
