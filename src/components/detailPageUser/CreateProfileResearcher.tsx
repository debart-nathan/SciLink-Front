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
            <Button variant="primary" onClick={handleShow}>
                Créer un profil chercheur
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Créer un profil chercheur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formPresentation">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={(props) =>
                                    renderTooltip(props, "Tooltip text for Presentation")
                                }>
                                <Form.Label>Presentation</Form.Label>
                            </OverlayTrigger>
                            <Form.Control
                                as="textarea"
                                title="Tooltip text for Presentation"
                                placeholder="Enter your presentation"
                                {...register("presentation", { required: true })}
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

export default CreateProfileResearcher;