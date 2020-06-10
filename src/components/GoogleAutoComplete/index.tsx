import React, { useState, useEffect } from "react";
import shortid from "shortid";
import { useFieldApi, useFieldState } from "informed";
import Downshift from "downshift";
import TextInput from "../TextInput";

import styles from "./index.module.css";
import isRequired from "../../validators/isRequired";

type PropsType = {
  field: string;
  id: string;
  label: string;
};

type Prediction = google.maps.places.AutocompletePrediction;

const GoogleAutoComplete = ({ label, field }: PropsType) => {
  const [predictions, setPredictions] = useState<Prediction[]>();

  const { setValue } = useFieldApi(field);
  const { value } = useFieldState(field);

  const key = process.env.REACT_APP_GOOGLE_API_KEY;

  const loadScript = (url: string, callBack: () => void) => {
    if (!document.querySelectorAll(`[src="${url}"]`).length) {
      document.body.appendChild(
        Object.assign(document.createElement("script"), {
          type: "text/javascript",
          src: url,
          onload: () => callBack()
        })
      );
    } else {
      callBack();
    }
  };
  const handleScriptLoad = () => {
    const autoComplete = new window.google.maps.places.AutocompleteService();
    autoComplete.getPlacePredictions(
      {
        input: JSON.stringify(value) || "",
        types: ["address"],
        componentRestrictions: {
          country: ["ca"]
        }
      },
      (res) => {
        setPredictions(res);
      }
    );
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`,
      () => handleScriptLoad()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Downshift onChange={(newValue) => setValue(newValue)}>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        getMenuProps,
        highlightedIndex,
        getRootProps
      }) => {
        const rootProps = getRootProps(undefined, { suppressRefError: true });
        const inputId = shortid.generate();
        const menuProps = getMenuProps(undefined, { suppressRefError: true });
        const inputProps = getInputProps();
        return (
          <div className={styles.googleAutoComplete} {...rootProps}>
            <TextInput
              {...inputProps}
              label={label}
              id={inputId}
              field={field}
              validate={isRequired("Please enter an address")}
            />
            {isOpen && predictions && (
              <ul
                {...menuProps}
                className={styles.autoCompleteListContainer}
                aria-labelledby={inputId}
              >
                {predictions.map((prediction, index) => {
                  const itemProps = getItemProps({
                    key: prediction.id,
                    index,
                    item: prediction.description,
                    style: {
                      backgroundColor:
                        highlightedIndex === index
                          ? "rgb(238, 247, 241)"
                          : "white"
                    }
                  });
                  return (
                    <li
                      {...itemProps}
                      className={styles.autoCompleteListItem}
                      aria-selected={itemProps["aria-selected"]}
                      role="option"
                    >
                      {prediction.description}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      }}
    </Downshift>
  );
};

export default GoogleAutoComplete;
