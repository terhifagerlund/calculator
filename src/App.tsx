import React, { useState } from 'react'; 
import './App.css';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as mathjs from 'mathjs';

const CalcBody = styled.div`
  height: 522px;
  width: 400px;
  background: #ED8BD2;
  margin: auto;
  padding-top: 32px;
  border: solid;
  border-color: #E45EBF;
  border-radius: 20px;
  `;

const InputField = styled.div`
  height: 80px;
  background: #EBEFF3;
  font-size: xx-large;
  border: solid;
  border-color: #DFB4DB;
  border-radius: 15px;
  word-wrap: break-word;
  overflow: auto;
  `;

  const ButtonField = styled.div`
  height: 400px;
  padding-top: 56px;
  padding-left: 40px;
  padding-right: 18px;
  `;

export default function Calculator()  {
  const [value, setValue] = useState("");

  const handleClick = (newValue: string) => {
    setValue(value + newValue);
  }
  const handleClear = () => {
    setValue("");
  }
  const handleEqual = () => {
    setValue(mathjs.evaluate(value));
  }
  return (
  <CalcBody>
    <Grid container justify="center">
      <Grid item xs={10}>
        <InputField>{value}</InputField>
      </Grid>
    </Grid>
    <Grid container component={ButtonField}>
      <Grid item xs={3}><Button onClick={() => handleClick("9")} variant="contained" color="secondary">9</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("8")} variant="contained" color="secondary">8</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("7")} variant="contained" color="secondary">7</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("/")} variant="contained" color="secondary">/</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("6")} variant="contained" color="secondary">6</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("5")} variant="contained" color="secondary">5</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("4")} variant="contained" color="secondary">4</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("+")} variant="contained" color="secondary">+</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("3")} variant="contained" color="secondary">3</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("2")} variant="contained" color="secondary">2</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("1")} variant="contained" color="secondary">1</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("-")} variant="contained" color="secondary">-</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClear()} variant="contained" color="secondary">C</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("0")} variant="contained" color="secondary">0</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleEqual()} variant="contained" color="secondary">=</Button></Grid>
      <Grid item xs={3}><Button onClick={() => handleClick("*")} variant="contained" color="secondary">x</Button></Grid>
    </Grid>
  </CalcBody>
  );
}

