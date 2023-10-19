import React, { useState } from "react";
import { Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useForm } from "react-hook-form";

type CreateProfileInvestorProps = {
    userId: number;
};
type TooltipProps = React.ComponentProps<typeof Tooltip>;

const renderTooltip = (props: TooltipProps, text:string) => (
    <Tooltip id="button-tooltip" {...props}>
        {text}
    </Tooltip>
);

const CreateProfileInvestor: React.FC<CreateProfileInvestorProps> = ({
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
        <Button className="btnx my-2" variant="primary" onClick={handleShow}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Créer un profil d'investisseur
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-warning">
              Créer un profil d'investisseur
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-warning">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formNom">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    renderTooltip(props, "Tooltip text for Nom")
                  }
                >
                  <Form.Label>Nom</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  className="fomr-control mb-2"
                  type="text"
                  placeholder="Entrer le nom"
                  {...register("nom", { required: false })}
                />
              </Form.Group>

              <Form.Group controlId="formSigle">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    renderTooltip(props, "Tooltip text for Sigle")
                  }
                >
                  <Form.Label>Sigle</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  className="fomr-control mb-2"
                  type="text"
                  placeholder="Entrer le sigle"
                  {...register("sigle", { required: false })}
                />
              </Form.Group>

              <Form.Group controlId="formNature">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    renderTooltip(props, "Tooltip text for Nature")
                  }
                >
                  <Form.Label>Nature(*)</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  className="fomr-control mb-2"
                  type="text"
                  placeholder="Entrer la nature"
                  {...register("nature")}
                />
              </Form.Group>

              <Form.Group controlId="formLabel">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    renderTooltip(props, "Tooltip text for Label")
                  }
                >
                  <Form.Label>Label</Form.Label>
                </OverlayTrigger>
                <Form.Control
                  className="fomr-control mb-2"
                  type="text"
                  placeholder="Entrer le label"
                  {...register("label")}
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

export default CreateProfileInvestor;
