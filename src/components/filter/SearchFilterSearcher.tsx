import React, { useState, useEffect, useRef } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import JsonServerB from "../../services/jsonServerB";
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

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [domains, setDomains] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await JsonServerB.EntitySelectAll("Domains");
            setDomains(result);
        };
        fetchData();
    }, []);

    return (
        <>
            <Button
                className="btnx"
                ref={target}
                onClick={() => setShow(!show)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Filtres
            </Button>

            <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Popover id="popover-contained" {...props}>
                        <label className="form-label">Domaine :</label>
                        <select
                            className="form-control"
                            id="searcher-domain"
                            {...register("searcher.domain")}>
                            <option className="form-check" value="">
                                choisissez une Option
                            </option>
                            {domains.map((domain) => {
                                if (domain && domain.id && domain.name) {
                                    return (
                                        <option
                                            key={domain.id}
                                            className="form-check"
                                            value={domain.id}>
                                            {domain.name}
                                        </option>
                                    );
                                }
                                return null;
                            })}
                        </select>

                        <button
                            className="btnx"
                            onClick={(ev) => {
                                ev.preventDefault();
                                reset(resetSearcherFields());
                            }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Reset les Filtres
                        </button>
                    </Popover>
                )}
            </Overlay>
        </>
    );
};

export default SearchFilterSearcher;
