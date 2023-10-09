import React, { useState, useRef } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";

interface SearchFilterResearchCenterProps {
    resetResearchCenterFields: () => FieldValues;
}

const SearchFilterResearchCenter: React.FC<SearchFilterResearchCenterProps> = ({
    resetResearchCenterFields,
}) => {
    const { register, reset } = useFormContext();
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
                        <label htmlFor="research-center-is-active">
                            Actif :
                        </label>
                        <select
                            id="research-center-is-active"
                            {...register("research-center.is_active")}>
                            <option value="">choisissez une Option</option>
                            <option value="true">oui</option>
                            <option value="false">non</option>
                        </select>
                        <label>Domaine :</label>
                        <select
                            id="research-center-domain"
                            {...register("research-center.domain")}>
                            <option value="">choisissez une Option</option>
                            {domains.map((domain) => {
                                return (
                                    <option value={domain.id}>
                                        {domain.name}
                                    </option>
                                );
                            })}
                        </select>
                        <fieldset>
                            <legend>Date de création</legend>
                            <label htmlFor="research-center-date-start">
                                Min:{" "}
                            </label>
                            <input
                                id="research-center-date-start"
                                type="date"
                                {...register("research-center.date_start")}
                            />
                            <label htmlFor="research-center-date-end">
                                Max:{" "}
                            </label>
                            <input
                                id="research-center-date-end"
                                type="date"
                                {...register("research-center.date_end")}
                            />
                        </fieldset>

                        <button
                            onClick={(ev) => {
                                ev.preventDefault();
                                reset(resetResearchCenterFields());
                            }}>
                            Reset Filters
                        </button>
                    </Popover>
                )}
            </Overlay>
        </>
    );
};

export default SearchFilterResearchCenter;
