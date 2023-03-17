import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './accordion.css';

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
        expandIcon={<ExpandMore sx={{ color: 'green' }} />}
      >
        <Typography component="div" className="accordion--title">
          <img
            src={'/static/images/monstera_icon.svg'}
            width="28px"
            height="28px"
            alt=""
          />
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="accordion--detail">
        {contents && contents.map((content) => {
          return (
            <div className="accordion--detail--content--wrapper">
              <Typography className="accordion--detail--title">
                {content.title}
              </Typography>
              <Typography className="accordion--detail--desc">
                {content.description}
              </Typography>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};
