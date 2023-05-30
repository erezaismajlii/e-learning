import useTitle from "hooks/useTitle";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import React, { useState, useEffect } from "react";
import listeningApi from "../apis/listeningApi";
import { useHistory, useParams } from "react-router";
import { cloudinaryImgOptimize } from "helper";
import { DEFAULTS } from "constants/index";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  mobilelist: {
    height: "115px",
  },
  floatleft: {
    float: "left",
    margin: "0 10px 10px 0px",
    padding: "2px",
  },
  title: {
    display: "inline-block",
    fontSize: "2.0rem",
    fontWeight: 400,
    color: "blue",
    margin: "0.8rem 0rem 0rem 0",
    "&:hover, &:focus": {
      color: "#CCC",
    },
  },
  tldetail: {
    fontSize: "1.5rem",
    fontWeight: 400,
    color: "black",
  },
  textlimit: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "500px",
  },
}));

