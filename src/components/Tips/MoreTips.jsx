import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import IdentifyingCustomers from "./IdentifyingCustomers";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  panel: {
    backgroundColor: "#aee7f9"
  }
});

function MoreTips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Engaging More Doctors
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>content goes here...</div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Identifying Customer
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>
              Identify patient and discuss the test with them. A potential
              customer can be one of the following:
            </Typography>
            <br />
            <IdentifyingCustomers />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            In-depth Materials
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Genetic Information
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography>
                Identify patient and discuss the test with them. A potential
                customer can be one of the following:
              </Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>FAQs</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography variant="subtitle2">
                <b>
                  If I have a medical condition, food intolerance or allergy
                  will this test be helpful?
                </b>
                <br />
                <br />
                The genetic findings in the myDNA personalised diet report give
                you an insight into how your body may be pre-programmed when it
                comes to weight management and lipid levels. We don’t currently
                test for food intolerances, allergies or medical conditions.
                Please note if you have any specific medical conditions, or are
                pregnant or breastfeeding it is recommended to discuss any plans
                for a new diet or exercise program with your health
                professional.
                <br />
                <br />
                <b>Is it accurate?</b>
                <br />
                <br />
                A strict quality assurance process combined with state of the
                art laboratory facilities, allows us to control reliability and
                validity of our tests. Our reports and findings are developed in
                accordance to internationally recognised guidelines and factor
                in a large number of published studies.
                <br />
                <br />
                <b>
                  Do the results have any implications for my life insurance?
                </b>
                <br />
                <br />
                We do not test for disease risk or cancer genomics and have no
                plans to do so in the future. As a result our tests should not
                have relevance for life insurance policies
              </Typography>
              <br />
              <br />
              <b>How much does it cost?</b>
              <br />
              <br />
              The current RRP is $99
              <br />
              <br />
              <b>Can children be tested?</b>
              <br />
              <br />
              The current myDNA personalised diet report has genetic results and
              recommendations tailored for individuals over 18 years of age
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(MoreTips);
