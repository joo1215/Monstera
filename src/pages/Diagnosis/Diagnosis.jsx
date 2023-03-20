import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './diagnosis.css';
import { Title } from '../../components/Title/Title';
import { DiagnosisForm } from '../../containers/DiagnosisForm/DiagnosisForm';


export const Diagnosis = () => {
  return (
    <section className="register_containerss">
      <Title type={1} label="식물진단 가이드" />
      <DiagnosisForm />
    </section>
  );
};
