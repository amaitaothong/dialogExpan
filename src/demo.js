import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary
} from "@material-ui/core";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15)
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },
    icon: {
      verticalAlign: "bottom",
      height: 20,
      width: 20
    },
    details: {
      alignItems: "center"
    },
    column: {
      flexBasis: "33.33%"
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2)
    }
  })
);

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={classes.root}>
              <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>WMS</Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      Put your WMS Data
                    </Typography>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                  <Grid>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="layername"
                      label="Layer Name"
                      fullWidth
                      // onChange={(e) => {
                      //   setLayers(e.target.value);
                      //   setErrorText("");
                      // }}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="description"
                      label="Description"
                      fullWidth
                      // onChange={(d) => {
                      //   setDescription(d.target.value);
                      //   setErrorText("");
                      // }}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="wmslink"
                      label="URL"
                      fullWidth
                      // onChange={(e1) => {
                      //   setLink(e1.target.value);
                      //   setErrorText("");
                      // }}
                      placeholder="https://wmsserver/server/work/wms?SERVICE=WMS&REQUEST=GetMap&CRS=EPSG:4326&LAYERS=name"
                    />
                  </Grid>
                </ExpansionPanelDetails>
                <Divider />
              </ExpansionPanel>
              <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>TMS</Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      Put your TMS Data
                    </Typography>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                  <Grid>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="layername"
                      label="Layer Name"
                      fullWidth
                      // onChange={(e) => {
                      //   setLayers(e.target.value);
                      //   setErrorText("");
                      // }}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="description"
                      label="Description"
                      fullWidth
                      // onChange={(d) => {
                      //   setDescription(d.target.value);
                      //   setErrorText("");
                      // }}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="wmslink"
                      label="URL"
                      fullWidth
                      // onChange={(e1) => {
                      //   setLink(e1.target.value);
                      //   setErrorText("");
                      // }}
                      placeholder="https://wmsserver/server/work/wms?SERVICE=WMS&REQUEST=GetMap&CRS=EPSG:4326&LAYERS=name"
                    />
                  </Grid>
                </ExpansionPanelDetails>
                <Divider />
              </ExpansionPanel>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
