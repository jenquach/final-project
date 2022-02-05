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
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ maxWidth: '700px', marginTop: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>
            Chocolate chupa chups brownie marshmallow?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Chocolate chupa chups brownie marshmallow lemon drops fruitcake oat cake pastry pastry. Bear claw marzipan powder croissant dragée fruitcake cotton candy muffin danish. Biscuit dragée brownie cake candy. Chupa chups shortbread cupcake danish cookie oat cake.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ maxWidth: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '66%', flexShrink: 0 }}>Powder tart chocolate oat cake gummies?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Powder tart chocolate oat cake gummies pudding chocolate pastry danish. Jujubes marshmallow tootsie roll soufflé topping sugar plum tiramisu sweet roll sesame snaps. Bear claw lollipop soufflé chupa chups cheesecake jelly cupcake.
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
          <Typography sx={{ width: '66%', flexShrink: 0 }}>Donut candy canes gingerbread lollipop tiramisu halvah.?</Typography>
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