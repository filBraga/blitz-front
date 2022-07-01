import Button from "./Button"

export default function Task(props) {
  return (
  <>
    <h4>New task</h4>
    <textarea rows="4" cols="35" style={{ resize:'none'}}>Type here</textarea>
    <br />
    <Button buttonText='Add'/>
  </>
  )
}