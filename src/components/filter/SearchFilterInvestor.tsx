import React, { useState, useEffect, useRef } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import JsonServerB from "../../services/jsonServerB";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";

interface SearchFilterInvestorProps {
    resetInvestorFields: () => FieldValues;
}

const SearchFilterInvestor: React.FC<SearchFilterInvestorProps> = ({
    resetInvestorFields,
}) => {
    const { register, reset } = useFormContext();

    const [domains, setDomains] = useState<{ id: number; name: string }[]>([]);

    const [show, setShow] = useState(false);
    const target = useRef(null);

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
                className="btnx "
                ref={target}
                onClick={() => setShow(!show)}
                disabled>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Filtres
            </Button>

            <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Popover className="p-3" id="popover-contained" {...props}>
                        <label className="form-label">Domaine :</label>
                        <select
                            className="form-control"
                            id="investor-domain"
                            {...register("investor.domain")}>
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
                                reset(resetInvestorFields());
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

export default SearchFilterInvestor;
