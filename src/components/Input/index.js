import { InputContainer } from "./styles"

export default function Input({onClick, value, onChange}) {
  return (
    <InputContainer>
        <input type="text" value={value} onChange={onChange}/>
        <button onClick={onClick}>Buscar</button>
    </InputContainer>
  )
}
