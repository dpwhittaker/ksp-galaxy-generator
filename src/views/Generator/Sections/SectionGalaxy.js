import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Build, BrightnessAuto } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomSlider from "components/CustomSlider/CustomSlider.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionGalaxy() {
  const classes = useStyles();
  const [galaxyName, setGalaxyName] = useState("New Galaxy");
  const [galaxyType, setGalaxyType] = useState("disc");
  const [seed, setSeed] = useState("Anything you want");
  const [galaxyAuto, setGalaxyAuto] = useState("auto");
  const [autoStars, setAutoStars] = useState(50);
  const [autoAge, setAutoAge] = useState(2);
  const starTypes = {
    "Brown Dwarves": [0, 0, 0.07, 0.08, 0.3, 0.99], //L
    "Red Dwarves": [0, 0, 0.11, 0.25, 0.4, 0.01], //M
    "Orange Dwarves": [0, 0, 0.15, 0.3, 0.15, 0], //K
    "Yellow Dwarves": [0, 0.15, 0.2, 0.14, 0.05, 0], //G
    "Yellow-White Dwarves": [0, 0.3, 0.2, 0.11, 0.05, 0], //F
    "White Stars": [0, 0.3, 0.15, 0.07, 0.03, 0], //A
    "Blue-White Giants": [0.5, 0.15, 0.07, 0.03, 0.01, 0], //B
    "Blue Giants": [0.4, 0.1, 0.05, 0.02, 0.01, 0], //O
  };
  const starCount = {};
  const setStarCount = {};
  for (var t in starTypes) {
    [starCount[t], setStarCount[t]] = useState(
      Math.round(autoStars * starTypes[t][autoAge])
    );
  }
  if (galaxyAuto === "auto") {
    for (t in starTypes) {
      console.log(
        t,
        starCount[t],
        Math.round(autoStars * starTypes[t][autoAge])
      );
      const count = Math.round(autoStars * starTypes[t][autoAge]);
      if (starCount[t] !== count) setStarCount[t](count);
    }
  }
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Galaxy Settings</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4} lg={4}>
            <CustomInput
              labelText="Galaxy Name"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                value: galaxyName,
                onChange: (e) => setGalaxyName(e.target.value),
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4} lg={4}>
            <label>Galaxy Type</label>
            <br />
            {["Ellipse", "disc", "cluster"].map((t) => (
              <Button
                key={t}
                variant="contained"
                size="sm"
                color={galaxyType === t ? "primary" : undefined}
                onClick={() => setGalaxyType(t)}
              >
                {t}
              </Button>
            ))}
          </GridItem>
          <GridItem xs={12} sm={4} md={4} lg={4}>
            <CustomInput
              labelText="Seed"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                value: seed,
                onChange: (e) => setSeed(e.target.value),
              }}
            />
          </GridItem>
        </GridContainer>

        <CustomTabs
          headerColor="primary"
          value={galaxyAuto}
          onChange={(e, newVal) => setGalaxyAuto(newVal)}
          tabs={[
            {
              tabName: "Automatic",
              value: "auto",
              tabIcon: BrightnessAuto,
              tabContent: (
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h4>Number of Stars</h4>
                    <CustomSlider
                      value={autoStars}
                      onChange={setAutoStars}
                      max={200}
                      pips={21}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h4>Age of Galaxy</h4>
                    <CustomSlider
                      value={autoAge}
                      onChange={setAutoAge}
                      max={5}
                      pips={6}
                      density={20}
                    />
                  </GridItem>
                </GridContainer>
              ),
            },
            {
              tabName: "Custom",
              value: "custom",
              tabIcon: Build,
              tabContent: (
                <GridContainer>
                  {Object.keys(starTypes).map((t) => (
                    <GridItem key={t} xs={12} sm={6} md={3} lg={3}>
                      <h4>{t}</h4>
                      <CustomSlider
                        value={starCount[t]}
                        onChange={setStarCount[t]}
                        pips={6}
                        density={10}
                      />
                    </GridItem>
                  ))}
                </GridContainer>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
