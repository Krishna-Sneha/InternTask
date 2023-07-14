import { Container, ChartTitle } from "./ChartStyles";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Popover, Typography, Box } from "@material-ui/core";
import { useState } from "react";

function Chart({ title, data, dataKey, grid }) {
  const [anchor, setAnchor] = useState(null);

  const openPopover = (event) => setAnchor(event.currentTarget);
  return (
    <Container onMouseEnter={openPopover} onMouseLeave={() => setAnchor(null)}>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#03bafc" />
          <Line type="monotone" dataKey={dataKey} stroke="#03bafc" />
          {grid && <CartesianGrid stroke="#555" />}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <Popover
        style={{ pointerEvents: "none" }}
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAnchor(null)}
      >
        <Box width={300} padding={1} sx={{ background: "black" }}>
          <Typography
            style={{
              background: "black",
              color: "white",
              fontSize: "15px",
            }}
          >
            It is the graphical representation of active users per month.
          </Typography>
        </Box>
      </Popover>
    </Container>
  );
}

export default Chart;
