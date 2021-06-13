import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "nouislider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ slider: { margin: "45px 0", height: "2px" } });

export default function CustomSlider(props) {
  const classes = useStyles();
  const ref = useRef();
  useEffect(() => {
    var node = ref.current;
    if (node && !node.classList.contains("noUi-target")) {
      while (node.firstChild) node.removeChild(node.firstChild);
      if (node.noUiSlider) {
        node.noUiSlider.off("set");
        delete node.noUiSlider;
      }
      Slider.create(node, {
        start: [props.value],
        range: { min: props.min || 0, max: props.max || 100 },
        connect: [true, false],
        step: props.step || 1,
        tooltips: true,
        pips: {
          mode: "count",
          values: props.pips || 11,
          density: props.density === undefined ? 2.5 : props.density,
        },
        format: {
          to: (v) => v,
          from: (v) => v,
        },
      });
      node.noUiSlider.on("set", (v) => props.onChange(v[0]));
    }
  });
  return <div ref={ref} className={classes.slider + " slider-primary"} />;
}

CustomSlider.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  pips: PropTypes.number,
  density: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
};
