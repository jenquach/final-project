import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import styled from "styled-components"

const AccordionWrapper = styled.div`
background: #f0f0f0;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 30px;
`

const FaqAccordion = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <AccordionWrapper>
      <Typography variant="h5" color="#A9CDCE" textTransform="uppercase" textAlign="center">
        Frequently asked questions
      </Typography>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>Is this a real e-commerce?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No unfortunately not. This is a fictional e-commerce. But maybe one day it will be a real one? Let's hope! 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>
          Cotton candy biscuit lemon drops fruitcake wafer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pudding bonbon macaroon chupa chups candy canes caramels candy cotton candy marshmallow.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>Donut candy canes gingerbread lollipop tiramisu halvah?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dragée tiramisu candy lollipop chupa chups marzipan apple pie gummies candy canes. Bear claw fruitcake sesame snaps cake sweet roll.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>Tart danish brownie gummies soufflé liquorice jelly beans jelly beans apple pie?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dragée tiramisu candy lollipop chupa chups marzipan apple pie gummies candy canes. Bear claw fruitcake sesame snaps cake sweet roll.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>
          Cotton candy biscuit lemon drops fruitcake wafer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pudding bonbon macaroon chupa chups candy canes caramels candy cotton candy marshmallow.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>Donut candy canes gingerbread lollipop tiramisu halvah?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dragée tiramisu candy lollipop chupa chups marzipan apple pie gummies candy canes. Bear claw fruitcake sesame snaps cake sweet roll.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>Tart danish brownie gummies soufflé liquorice jelly beans jelly beans apple pie?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dragée tiramisu candy lollipop chupa chups marzipan apple pie gummies candy canes. Bear claw fruitcake sesame snaps cake sweet roll.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
    
  )
}

export default FaqAccordion