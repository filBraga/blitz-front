import Button from "./Button"

export default function Task(props) {
  return (
  <>
    <h4>{props.text}</h4>
    <Button buttonText='Remover'/>
    <Button buttonText='Editar'/>
    <Button buttonText='Salvar'/>
  </>
  )
}