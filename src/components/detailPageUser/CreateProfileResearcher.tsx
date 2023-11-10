import React, { useState } from "react";
import { Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useForm } from "react-hook-form";

type CreateProfileResearcherProps = {
    userId: number;
};

type TooltipProps = React.ComponentProps<typeof Tooltip>;

const renderTooltip = (props: TooltipProps, text:string) => (
    <Tooltip id="button-tooltip" {...props}>
        {text}
    </Tooltip>
);

const CreateProfileResearcher: React.FC<CreateProfileResearcherProps> = ({
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
        fetch("/api/researchers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                presentation: data.presentation,
            }),
        });
        handleClose();
    };

    return (
      <>
        <Button className="btnx my-2" variant="primary" onClick={handleShow}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Créer un profil de chercheur
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="">
              Créer un profil de chercheur
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formPresentation">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    renderTooltip(props, "Tooltip text for Presentation")
                  }
                >
                  <Form.Label>Presentation</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  as="textarea"
                  className="form-control mb-2"
                  title="Tooltip text for Presentation"
                  placeholder="Enter your presentation"
                  {...register("presentation", { required: true })}
                />
              </Form.Group>

              <Button
                className="btnx mx-2"
                variant="secondary"
                onClick={handleClose}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span> Fermer
              </Button>
              <Button className="btnx" variant="primary" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Sauvegarder les modifications
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default CreateProfileResearcher;