import { Container, Item, Title, MoneyContainer } from "./FeaturedInfoStyles";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState } from "react";
import { Popover, Typography, Box } from "@material-ui/core";

function Home() {
  const [anchorR, setAnchorR] = useState(null);
  const [anchorS, setAnchorS] = useState(null);
  const [anchorC, setAnchorC] = useState(null);

  const openPopoverR = (event) => {
    setAnchorR(event.currentTarget);
  };
  const openPopoverS = (event) => {
    setAnchorS(event.currentTarget);
  };
  const openPopoverC = (event) => {
    setAnchorC(event.currentTarget);
  };

  return (
    <Container>
      <Item onMouseEnter={openPopoverR} onMouseLeave={() => setAnchorR(null)}>
        <Title>Revenue</Title>
        <MoneyContainer>
          <span className="money">$2,145</span>
          <span className="rate">
            -11.4
            <ArrowDownward className="icon negative" />
          </span>
        </MoneyContainer>
        <span className="subtitle">Compared to last month</span>
      </Item>
      <Popover
        style={{ pointerEvents: "none" }}
        open={Boolean(anchorR)}
        anchorEl={anchorR}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={() => setAnchorR(null)}
      >
        <Box width={300} padding={2} sx={{ background: "black" }}>
          <Typography
            style={{ background: "black", color: "white", fontSize: "15px" }}
          >
            This is the revenue section which indicates the profits of the
            company.
          </Typography>
        </Box>
      </Popover>

      <Item onMouseEnter={openPopoverS} onMouseLeave={() => setAnchorS(null)}>
        <Title>Sales</Title>
        <MoneyContainer>
          <span className="money">$5,145</span>
          <span className="rate">
            -1.4
            <ArrowDownward className="icon negative" />
          </span>
        </MoneyContainer>
        <span className="subtitle">Compared to last month</span>
      </Item>
      <Popover
        style={{ pointerEvents: "none" }}
        open={Boolean(anchorS)}
        anchorEl={anchorS}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={() => setAnchorS(null)}
      >
        <Box width={300} padding={2} sx={{ background: "black" }}>
          <Typography
            style={{ background: "black", color: "white", fontSize: "15px" }}
          >
            This is the sales which shows the overall sale for the financial
            year
          </Typography>
        </Box>
      </Popover>

      <Item onMouseEnter={openPopoverC} onMouseLeave={() => setAnchorC(null)}>
        <Title>Cost</Title>
        <MoneyContainer>
          <span className="money">$3,145</span>
          <span className="rate">
            +3.5
            <ArrowUpward className="icon" />
          </span>
        </MoneyContainer>
        <span className="subtitle">Compared to last month</span>
      </Item>
      <Popover
        style={{ pointerEvents: "none" }}
        open={Boolean(anchorC)}
        anchorEl={anchorC}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={() => setAnchorC(null)}
      >
        <Box width={300} padding={2} sx={{ background: "black" }}>
          <Typography
            style={{ background: "black", color: "white", fontSize: "15px" }}
          >
            This is the cost section which shows the overall CTC for the
            financial year.
          </Typography>
        </Box>
      </Popover>
    </Container>
  );
}

export default Home;
