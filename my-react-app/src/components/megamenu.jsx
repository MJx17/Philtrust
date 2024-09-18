// megamenu.jsx

import React, { forwardRef } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/navbar.scss";

// Define the MenuItem component
const MenuItem = ({ label, onMouseEnter, href }) => (
  <li className="menu-item" onMouseEnter={onMouseEnter}>
    <a href={href}>{label}</a>
  </li>
);

// Define the MegaMenu component and forward refs if needed
const MegaMenu = forwardRef(({
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
  searchQuery,
  onQueryChange,
  onSearch,
  onCloseSearch
}, ref) => (
  <div
    ref={ref}
    className={`mega-menu-container ${activeDropdown ? "visible" : ""}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="mega-menu-content">
      {activeDropdown === "personal" && (
        <div className="mega-menu-column">
          
          <h3>Personal</h3>
          <ul>
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            <MenuItem label="Philtrust BankOnline" href="#personal1" />
            </AccordionSummary>
            <AccordionDetails>
              <ul>
               <li>InstaPay</li> 
               <li> Peso Net</li>
              </ul>
          </AccordionDetails>


           </Accordion>
            <MenuItem label="Loans" href="#personal3" />
            <MenuItem label="Savings and Deposit" href="#personal4" />
            <MenuItem label="Personal Trust Services" href="#personal5" />
            <MenuItem label="Other Services" href="#personal6" />
          </ul>
        </div>
      )}
      {activeDropdown === "business" && (
        <div className="mega-menu-column">
          <h3>Business</h3>
          <ul>
            <MenuItem label="Corporate Loans" href="#business1" />
            <MenuItem label="International Services" href="#business2" />
            <MenuItem label="Institutional Trust Services" href="#business3" />
          </ul>
        </div>
      )}
      {/* Add similar mega menu components for other sections */}

      {/* Search Section */}
      {activeDropdown === "search" && (
        <div className="mega-menu-search">
          What do you want to search?
          <div className="search-container">
            <TextField
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => onQueryChange(e.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              onClick={onSearch}
              className="search-input-button"
            >
              Search
            </Button>
            <IconButton onClick={onCloseSearch} className="navbar-close-button">
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  </div>
));

export default MegaMenu;
