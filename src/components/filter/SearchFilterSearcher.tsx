import React, { useState, useRef } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";

interface SearchFilterSearcherProps {
    resetSearcherFields: () => FieldValues;
}

const SearchFilterSearcher: React.FC<SearchFilterSearcherProps> = ({
    resetSearcherFields,
}) => {
    const { register, reset } = useFormContext();
    //TODO get from server
    const domains: { id: number; name: string }[] = [];

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button className="btn btn-outline-info text-warning" ref={target} onClick={() => setShow(!show)}>
                Filtres
            </Button>

            <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Popover id="popover-contained" {...props}>
                        <label className="form-label">Domaine :</label>
                        <select className="form-control"
                            id="searcher-domain"
                            {...register("searcher.domain")}>
                            <option className="form-check" value="">choisissez une Option</option>
                            {domains.map((domain) => {
                                return (
                                    <option className="form-check" value={domain.id}>
                                        {domain.name}
                                    </option>
                                );
                            })}
                        </select>

                        <button className="btn btn-outline-info"
                            onClick={(ev) => {
                                ev.preventDefault();
                                reset(resetSearcherFields());
                            }}>
                            Reset les Filtres
                        </button>
                    </Popover>
                )}
            </Overlay>
        </>
    );
};

export default SearchFilterSearcher;
