import {
  Container,
  Wrapper,
  SidebarMenu,
  Title,
  List,
  ListItem,
} from "./SidebarStyles";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  Group,
  Info,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Popover, Typography, Box } from "@material-ui/core";
import { useState } from "react";

function Sidebar() {
  const [anchorH, setAnchorH] = useState(null);
  const [anchorA, setAnchorA] = useState(null);
  const [anchorS, setAnchorS] = useState(null);
  const [anchorU, setAnchorU] = useState(null);

  const [anchorAb, setAnchorAb] = useState(null);
  const [anchorP, setAnchorP] = useState(null);
  const [anchorT, setAnchorT] = useState(null);
  const [anchorR, setAnchorR] = useState(null);

  const [anchorM, setAnchorM] = useState(null);
  const [anchorF, setAnchorF] = useState(null);
  const [anchorMsg, setAnchorMsg] = useState(null);
  const [anchorMng, setAnchorMng] = useState(null);

  const openPopoverH = (event) => setAnchorH(event.currentTarget);
  const openPopoverA = (event) => setAnchorA(event.currentTarget);
  const openPopoverS = (event) => setAnchorS(event.currentTarget);
  const openPopoverU = (event) => setAnchorU(event.currentTarget);

  const openPopoverAb = (event) => setAnchorAb(event.currentTarget);
  const openPopoverP = (event) => setAnchorP(event.currentTarget);
  const openPopoverT = (event) => setAnchorT(event.currentTarget);
  const openPopoverR = (event) => setAnchorR(event.currentTarget);

  const openPopoverM = (event) => setAnchorM(event.currentTarget);
  const openPopoverF = (event) => setAnchorF(event.currentTarget);
  const openPopoverMsg = (event) => setAnchorMsg(event.currentTarget);
  const openPopoverMng = (event) => setAnchorMng(event.currentTarget);

  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <Title>Dashboard</Title>
          <List>
            <Link to="/" className="link">
              <ListItem>
                <LineStyle className="icon" />
                <div
                  onMouseEnter={openPopoverH}
                  onMouseLeave={() => setAnchorH(null)}
                >
                  Home
                </div>
                <Popover
                  style={{
                    pointerEvents: "none",
                  }}
                  open={Boolean(anchorH)}
                  anchorEl={anchorH}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  onClose={() => setAnchorH(null)}
                >
                  <Box width={300} padding={1} sx={{ background: "black" }}>
                    <Typography
                      style={{
                        background: "black",
                        color: "white",
                        fontSize: "15px",
                      }}
                    >
                      This is the home page, which displays the annual totals
                      for revenue, sales, costs, and user metrics.
                    </Typography>
                  </Box>
                </Popover>
              </ListItem>
            </Link>
            <ListItem>
              <Timeline className="icon" />
              <div
                onMouseEnter={openPopoverA}
                onMouseLeave={() => setAnchorA(null)}
              >
                Analytics
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorA)}
                anchorEl={anchorA}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorA(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It offers insightful data on consumer behaviour, market
                    trends, and website efficiency.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
            <ListItem>
              <TrendingUp className="icon" />
              <div
                onMouseEnter={openPopoverS}
                onMouseLeave={() => setAnchorS(null)}
              >
                Sales
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorS)}
                anchorEl={anchorS}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorS(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It offers a variety of features and functionality to help
                    the sales staff with day-to-day tasks.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
            <Link to="/users" className="link">
              <ListItem>
                <Group className="icon" />
                <div
                  onMouseEnter={openPopoverU}
                  onMouseLeave={() => setAnchorU(null)}
                >
                  Users
                </div>

                <Popover
                  style={{ pointerEvents: "none" }}
                  open={Boolean(anchorU)}
                  anchorEl={anchorU}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  onClose={() => setAnchorU(null)}
                >
                  <Box width={300} padding={1} sx={{ background: "black" }}>
                    <Typography
                      style={{
                        background: "black",
                        color: "white",
                        fontSize: "15px",
                      }}
                    >
                      It offers information on users who made purchases of the
                      things the business sells.
                    </Typography>
                  </Box>
                </Popover>
              </ListItem>
            </Link>
          </List>
          <Title>Quick Menu</Title>
          <List>
            <ListItem>
              <Info className="icon" />
              <div
                onMouseEnter={openPopoverAb}
                onMouseLeave={() => setAnchorAb(null)}
              >
                About
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorAb)}
                anchorEl={anchorAb}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorAb(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It often includes information on the company's history,
                    mission, values, team, and other pertinent facts.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
            <Link to="/products" className="link">
              <ListItem>
                <Storefront className="icon" />
                <div
                  onMouseEnter={openPopoverP}
                  onMouseLeave={() => setAnchorP(null)}
                >
                  Products
                </div>
                <Popover
                  style={{ pointerEvents: "none" }}
                  open={Boolean(anchorP)}
                  anchorEl={anchorP}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  onClose={() => setAnchorP(null)}
                >
                  <Box width={300} padding={1} sx={{ background: "black" }}>
                    <Typography
                      style={{
                        background: "black",
                        color: "white",
                        fontSize: "15px",
                      }}
                    >
                      It functions as a thorough inventory of products or
                      commodities, supplying extensive information on each good
                      or service.
                    </Typography>
                  </Box>
                </Popover>
              </ListItem>
            </Link>
            <ListItem>
              <AttachMoney className="icon" />
              <div
                onMouseEnter={openPopoverP}
                onMouseLeave={() => setAnchorP(null)}
              >
                Transactions
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorP)}
                anchorEl={anchorP}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorP(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It offers features for processing payments, creating
                    invoices, keeping track of past transactions, and monitoring
                    sales.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
            <ListItem>
              <BarChart className="icon" />
              <div
                onMouseEnter={openPopoverR}
                onMouseLeave={() => setAnchorR(null)}
              >
                Reports
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorR)}
                anchorEl={anchorR}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorR(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    A component of the company's sales website is devoted to
                    creating and providing access to numerous reports on sales,
                    performance, analytics, and other important indicators.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
          </List>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline className="icon" />
              <div
                onMouseEnter={openPopoverM}
                onMouseLeave={() => setAnchorM(null)}
              >
                Mail
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorM)}
                anchorEl={anchorM}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorM(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It facilitates email communication and management within the
                    sales process.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
            <ListItem>
              <DynamicFeed className="icon" />
              <div
                onMouseEnter={openPopoverF}
                onMouseLeave={() => setAnchorF(null)}
              >
                Feedback
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorF)}
                anchorEl={anchorF}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorF(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It provides a platform for customers to share their
                    opinions, provide reviews, and offer valuable insights to
                    the company.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
            <ListItem>
              <ChatBubbleOutline className="icon" />
              <div
                onMouseEnter={openPopoverMsg}
                onMouseLeave={() => setAnchorMsg(null)}
              >
                Messages
              </div>

              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorMsg)}
                anchorEl={anchorMsg}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorMsg(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It provides a dedicated space for real-time messaging, file
                    sharing, and team discussions.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
            <ListItem>
              <WorkOutline className="icon" />
              <div
                onMouseEnter={openPopoverMng}
                onMouseLeave={() => setAnchorMng(null)}
              >
                Manage
              </div>
              <Popover
                style={{ pointerEvents: "none" }}
                open={Boolean(anchorMng)}
                anchorEl={anchorMng}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClose={() => setAnchorMng(null)}
              >
                <Box width={300} padding={1} sx={{ background: "black" }}>
                  <Typography
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    It typically refers to a section or feature that facilitates
                    email communication and management within the sales process.
                  </Typography>
                </Box>
              </Popover>
            </ListItem>
          </List>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
