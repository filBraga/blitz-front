import Button from "./Button"

export default function Task(props) {
  return (
  <div className='DefaultComponent'>
    <h4>New task</h4>
    <textarea
      rows="4"
      cols="35"
      style={{ resize:'none'}}
      defaultValue='Type here'
    />
    <br />
    <Button buttonText='Add'/>
  </div>
  )
}