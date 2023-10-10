import React, { useState, useRef } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
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
    //TODO get from server
    const domains: { id: number; name: string }[] = [];

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button ref={target} onClick={() => setShow(!show)}>
                Toggle Form Fields
            </Button>

            <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Popover id="popover-contained" {...props}>
                        <label>Domaine :</label>
                        <select
                            id="investor-domain"
                            {...register("investor.domain")}>
                            <option value="">choisissez une Option</option>
                            {domains.map((domain) => {
                                return (
                                    <option value={domain.id}>
                                        {domain.name}
                                    </option>
                                );
                            })}
                        </select>

                        <button
                            onClick={(ev) => {
                                ev.preventDefault();
                                reset(resetInvestorFields());
                            }}>
                            Reset Filters
                        </button>
                    </Popover>
                )}
            </Overlay>
        </>
    );
};

export default SearchFilterInvestor;
