import React, { Component } from "react"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import classnames from "classnames"
import { withStyles } from "@material-ui/core/styles"

const placeholderText =
  "Ex:\nClan Reported:\nCLAN NAME (id: 123456)\n\nClan Motto:\nCLAN MOTTO\n\nClan Mission Statement:\nCLAN MISSION STATEMENT"

const styles = ({ spacing, palette }) => ({
  container: {
    display: "flex",
  },
  flex: {
    flex: 1,
  },
  margin: {
    marginBottom: spacing.unit,
  },
  textField200: {
    width: 200,
  },
  textField400: {
    width: 400,
  },
  textField600: {
    width: 600,
  },
  textBoxContainer: {
    background: palette.secondary.main,
    borderRadius: 4,
    padding: spacing.unit,
  },
  parserContainer: {
    width: 250,
  },
  textFieldParser: {
    width: "100%",
  },
})

const initState = {
  judgment: "Warning",
  id: "",
  name: "",
  motto: "",
  missionStatement: "",
  notes: "",
  parserClanId: "",
  parserQueue: "",
}

class NewReport extends Component {
  state = {
    ...initState,
  }

  onChange = key => event => this.setState({ [key]: event.target.value })
  onJudgmentChange = this.onChange("judgment")
  onIdChange = this.onChange("id")
  onNameChange = this.onChange("name")
  onMottoChange = this.onChange("motto")
  onMissionStatementChange = this.onChange("missionStatement")
  onNotesChange = this.onChange("notes")

  render() {
    const {
      judgment,
      id,
      name,
      motto,
      missionStatement,
      notes,
      parserClanId,
      parserQueue,
    } = this.state
    const { classes } = this.props

    return (
      <Card>
        <CardHeader title="NINJA NAME" />
        <CardContent>
          <div className={classes.container}>
            <div>
              <TextField
                className={classnames(classes.margin, classes.textField200)}
                select
                label="Judgment:"
                value={judgment}
                onChange={this.onJudgmentChange}
              >
                <MenuItem value="Warning">Warning</MenuItem>
                <MenuItem value="7 Day Ban">7 Day Ban</MenuItem>
                <MenuItem value="30 Day Ban">30 Day Ban</MenuItem>
                <MenuItem value="Permanent Ban">Permanent Ban</MenuItem>
              </TextField>

              <br />

              {/* Clan Id */}
              <TextField
                className={classnames(classes.margin, classes.textField200)}
                label="Clan Id:"
                value={id}
                onChange={this.onIdChange}
              />

              <br />

              {/* Clan Name */}
              <TextField
                className={classnames(classes.margin, classes.textField400)}
                label="Clan Name:"
                value={name}
                onChange={this.onNameChange}
              />

              <br />

              {/* Clan Motto */}
              <TextField
                className={classnames(classes.margin, classes.textField400)}
                label="Clan Motto:"
                value={motto}
                onChange={this.onMottoChange}
              />

              <br />

              {/* Clan Mission Statement */}
              <div
                className={classnames(classes.margin, classes.textBoxContainer)}
              >
                <TextField
                  className={classes.textField600}
                  multiline
                  rowsMax={6}
                  label="Clan Mission Statement:"
                  value={missionStatement}
                  onChange={this.onMissionStatementChange}
                />
              </div>

              {/* Notes */}
              <div className={classes.textBoxContainer}>
                <TextField
                  className={classes.textField600}
                  multiline
                  rowsMax={6}
                  label="Notes:"
                  value={notes}
                  onChange={this.onNotesChange}
                />
              </div>
            </div>

            <span className={classes.flex} />

            {/* Parsers */}
            <div className={classes.parserContainer}>
              {/* Clan Id Parser */}
              <TextField
                className={classnames(classes.margin, classes.textFieldParser)}
                label="Parser (Clan Id):"
              />

              <br />

              {/* Report Queue Parser */}
              <div className={classes.textBoxContainer}>
                <TextField
                  className={classes.textFieldParser}
                  label="Parser (Report Queue):"
                  multiline
                  value={placeholderText}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="raised">Create Report</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(NewReport)
