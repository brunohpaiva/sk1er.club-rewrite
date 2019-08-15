import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  form: {
    display: "inline-flex",
  },
  button: {
    alignSelf: "center",
    marginLeft: theme.spacing(1),
  },
}))

interface NicknameFormProps {
  onSubmit: (nickname: string) => void
}

function NicknameForm(props: NicknameFormProps) {
  const classes = useStyles(props)
  const [nickname, setNickname] = React.useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit(nickname)
  }

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <TextField
        label="Nickname"
        value={nickname}
        onChange={onChange}
        margin="none"
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  )
}

export default NicknameForm
