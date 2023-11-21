import React, { useState, useEffect } from "react";
import { Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useForm } from "react-hook-form";
import JsonServerB from "../../services/jsonServerB";

type CreateProfileResearcherProps = {
  userId: string;
};

type TooltipProps = React.ComponentProps<typeof Tooltip>;

const renderTooltip = (props: TooltipProps, text: string) => (
  <Tooltip id="button-tooltip" {...props}>
    {text}
  </Tooltip>
);

const CreateProfileResearcher: React.FC<CreateProfileResearcherProps> = ({
  userId,
}) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [domainOption, setDomainOptions] = useState<
  { id: string; name: string }[]
>([]);


useEffect(() => {
  domainSelect("Domains");
}, ['show']);

async function domainSelect(
  entityName: string,
) {
  try {
    const response = await JsonServerB.EntitySelectAll(entityName);
    setDomainOptions(response);
  } catch (error) {
    console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
  }
}

  const handleClose = () => {
    setShow(false);
    reset();
  };

  const handleShow = () => setShow(true);

  const onSubmit = (data: any) => {
    //TODO faire le fetch
    console.log(
      JSON.stringify({
        userId: userId,
        presentation: data.presentation,
        domain: data.domain,
      })
    );
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
          <Modal.Title className="">Créer un profil de chercheur</Modal.Title>
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

              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) =>
                  renderTooltip(props, "Tooltip text for Presentation")
                }
              >
                <Form.Label>Domain</Form.Label>
              </OverlayTrigger>
              <Form.Select {...register("domain", { required: true })}>
              <option value="">Name of Domain</option>
                {domainOption.map((option) => {
                  return <option key={option.id} value={option.id}>{option.name}</option>;
                })}

              </Form.Select>
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
