import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import InsertInvitation from "@material-ui/icons/InsertInvitation";
import Schedule from "@material-ui/icons/Schedule";
import Healing from "@material-ui/icons/Healing";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import seasonStyle from "assets/jss/material-kit-react/views/landingPageSections/seasonStyle.jsx";

class SeasonSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Season</h2>
                <h5 className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <hr className={classes.hsep} />
              </GridItem>
            </GridContainer>
            <Card className={classes.card}>
              <GridItem xs={12} sm={12} md={8}>
                <NavPills
                  color="danger"
                  tabs={[
                    {
                      tabButton: "Schedule",
                      tabIcon: InsertInvitation,
                      tabContent: (
                        <span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam sed nisi dui. Integer finibus efficitur
                            sapien vitae lobortis. Curabitur hendrerit sapien
                            vel ipsum convallis, in tempor sem porttitor. Aenean
                            ornare lobortis magna, ut blandit nulla congue a.
                            Sed hendrerit, purus a consequat cursus, tellus dui
                            euismod neque, eget sagittis diam elit in nisi.
                            Donec vel arcu ut sem ullamcorper scelerisque.
                            Pellentesque neque risus, vestibulum eu commodo in,
                            posuere sed quam. Morbi rhoncus velit sit amet velit
                            tempus, quis vehicula libero suscipit. Sed tellus
                            diam, malesuada a tellus in, feugiat varius nulla.
                            Quisque elementum malesuada quam non tempus. Ut
                            consectetur rutrum iaculis. Vestibulum velit urna,
                            tempus vel sagittis vel, finibus at nulla. Cras
                            interdum nisl non mattis dapibus. Aenean sed augue
                            sollicitudin, molestie sapien ut, mollis magna.
                            Aliquam cursus sem nulla, eget viverra mi sagittis
                            at. Duis mollis mi eget fermentum venenatis.
                          </p>
                          <br />
                          <p>
                            Praesent facilisis enim at posuere dignissim.
                            Phasellus ut metus eget leo consequat rutrum sed non
                            justo. Aliquam erat volutpat. Vivamus eget tortor
                            justo. Quisque mi nibh, consectetur nec mauris id,
                            eleifend gravida orci. Nullam faucibus nulla ut
                            neque accumsan, ac elementum ex pretium. Praesent
                            cursus justo a vulputate accumsan. Orci varius
                            natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Practices",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam sed nisi dui. Integer finibus efficitur
                            sapien vitae lobortis. Curabitur hendrerit sapien
                            vel ipsum convallis, in tempor sem porttitor. Aenean
                            ornare lobortis magna, ut blandit nulla congue a.
                            Sed hendrerit, purus a consequat cursus, tellus dui
                            euismod neque, eget sagittis diam elit in nisi.
                            Donec vel arcu ut sem ullamcorper scelerisque.
                            Pellentesque neque risus, vestibulum eu commodo in,
                            posuere sed quam.
                          </p>
                          <br />
                          <p>
                            Morbi rhoncus velit sit amet velit tempus, quis
                            vehicula libero suscipit. Sed tellus diam, malesuada
                            a tellus in, feugiat varius nulla. Quisque elementum
                            malesuada quam non tempus. Ut consectetur rutrum
                            iaculis. Vestibulum velit urna, tempus vel sagittis
                            vel, finibus at nulla. Cras interdum nisl non mattis
                            dapibus. Aenean sed augue sollicitudin, molestie
                            sapien ut, mollis magna. Aliquam cursus sem nulla,
                            eget viverra mi sagittis at. Duis mollis mi eget
                            fermentum venenatis.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Lorem",
                      tabIcon: Healing,
                      tabContent: (
                        <span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam sed nisi dui. Integer finibus efficitur
                            sapien vitae lobortis. Curabitur hendrerit sapien
                            vel ipsum convallis, in tempor sem porttitor. Aenean
                            ornare lobortis magna, ut blandit nulla congue a.
                            Sed hendrerit, purus a consequat cursus, tellus dui
                            euismod neque, eget sagittis diam elit in nisi.
                            Donec vel arcu ut sem ullamcorper scelerisque.
                            Pellentesque neque risus, vestibulum eu commodo in,
                            posuere sed quam.
                          </p>
                          <br />
                          <p>
                            Morbi rhoncus velit sit amet velit tempus, quis
                            vehicula libero suscipit. Sed tellus diam, malesuada
                            a tellus in, feugiat varius nulla. Quisque elementum
                            malesuada quam non tempus. Ut consectetur rutrum
                            iaculis. Vestibulum velit urna, tempus vel sagittis
                            vel, finibus at nulla. Cras interdum nisl non mattis
                            dapibus. Aenean sed augue sollicitudin, molestie
                            sapien ut, mollis magna.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(seasonStyle)(SeasonSection);
