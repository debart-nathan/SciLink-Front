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
            <Button variant="primary" onClick={handleShow}>
                Créer un profil investisseur
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Créer un profil investisseur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formNom">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={(props) =>
                                    renderTooltip(props, "Tooltip text for Nom")
                                }>
                                <Form.Label>Nom</Form.Label>
                            </OverlayTrigger>
                            <Form.Control
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
                                    renderTooltip(
                                        props,
                                        "Tooltip text for Sigle"
                                    )
                                }>
                                <Form.Label>Sigle</Form.Label>
                            </OverlayTrigger>
                            <Form.Control
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
                                    renderTooltip(
                                        props,
                                        "Tooltip text for Nature"
                                    )
                                }>
                                <Form.Label>Nature(*)</Form.Label>
                            </OverlayTrigger>
                            <Form.Control
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
                                    renderTooltip(
                                        props,
                                        "Tooltip text for Label"
                                    )
                                }>
                                <Form.Label>Label</Form.Label>
                            </OverlayTrigger>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le label"
                                {...register("label")}
                            />
                        </Form.Group>

                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>
                        <Button variant="primary" type="submit">
                            Sauvegarder les modifications
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CreateProfileInvestor;
