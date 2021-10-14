import React from "react";

import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Clock(props) {
  const classes = useStyles();

  const { ...propriedades } = props;
  const horaAtual = new Date();
  const utc = horaAtual.getTime() + (horaAtual.getTimezoneOffset() * 60000);
  const definitiveValue = new Date(utc + (3600000 * propriedades.gmt));

  return (
    <div className={classes.defaultFontStyle}>
      <Card>
        <CardHeader color="primary">
          <h4>
            {propriedades.cidade}
            {"  "}
            {propriedades.gmt}
          </h4>
        </CardHeader>
        <p className={classes.divider}></p>
        <CardBody>
                <p className={classes.description}>
                          {definitiveValue.toString('HH:mm:ss')}{" "}
                </p>
            
        </CardBody>
      </Card>
    </div>
  );
}
