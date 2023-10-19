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
        <Button className="btnx" ref={target} onClick={() => setShow(!show)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Filtres
        </Button>

        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Popover className="p-3" id="popover-contained" {...props}>
              <label className="form-label" htmlFor="research-center-is-active">
                Actif :
              </label>
              <select
                className="form-control"
                id="research-center-is-active"
                {...register("research-center.is_active")}
              >
                <option className="form-check" value="">
                  choisissez une Option
                </option>
                <option className="form-check" value="true">
                  oui
                </option>
                <option className="form-check" value="false">
                  non
                </option>
              </select>
              <label className="form-label" htmlFor="research-center-domain">
                Domaine :
              </label>
              <select
                className="form-control"
                id="research-center-domain"
                {...register("research-center.domain")}
              >
                <option className="form-check" value="">
                  choisissez une Option
                </option>
                {domains.map((domain) => {
                  return (
                    <option className="form-check" value={domain.id}>
                      {domain.name}
                    </option>
                  );
                })}
              </select>
              <fieldset className="form-group">
                <legend className="text-warning">Date de création</legend>
                <label
                  className="form-label"
                  htmlFor="research-center-date-start"
                >
                  De Quand:
                </label>
                <input
                  className="form-control"
                  id="research-center-date-start"
                  type="date"
                  {...register("research-center.date_start")}
                />
                <label
                  className="form-label mt-1"
                  htmlFor="research-center-date-end"
                >
                  à Quand:
                </label>
                <input
                  className="form-control"
                  id="research-center-date-end"
                  type="date"
                  {...register("research-center.date_end")}
                />
              </fieldset>

              <button
                className="btnx "
                onClick={(ev) => {
                  ev.preventDefault();
                  reset(resetResearchCenterFields());
                }}
              >
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

export default SearchFilterResearchCenter;
