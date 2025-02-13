import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}

const AmountDisplay = ({label, amount}: AmountDisplayProps) => {
  return (
    <p className="text-2xl text-green-600 font-bold select-none">
      {label &&  `${label}: `}
        <span className="font-black ml-1 text-black ">{formatCurrency(amount)}</span>
    </p>
  )
}

export default AmountDisplay