import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './diagnosis.css';
import MonsteraIcon from '../../assets/images/monstera_icon.svg';
import DownArrow from '../../assets/images/down_arrow.svg';

export const SimpleAccordion = ({
  title = 'Accordion',
  contents,
  defaultExpanded,
  disabled,
  onChange,
  square,
  expanded,
}) => {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disabled={disabled ?? false}
      onChange={onChange}
      square={square ?? false}
      expanded={expanded}
      disableGutters={true}
    >
      <AccordionSummary
        className="accordion--summary"
        aria-controls="panel1a-content"
        expandIcon={<img src={DownArrow} alt="Expand" />}
      >
        <Typography component="div" className="accordion--title">
          <img src={MonsteraIcon} alt="Leaf" />
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="accordion--detail">
        {contents.map((content) => {
          return (
            <div className="accordion--detail--content--wrapper">
              <Typography className="accordion--detail--title">
                {content.title}
              </Typography>
              {content.description.map((desc) => {
                return (
                  <Typography className="accordion--detail--desc">
                    {desc}
                  </Typography>
                );
              })}
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};
