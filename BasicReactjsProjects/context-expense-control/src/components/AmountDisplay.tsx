import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}

export default function AmountDisplay({label, amount} : AmountDisplayProps){
  return (
    <div className="text-2xl text-blue-500 font-bold">
        {label && `${label}: `}
        <span className="font-black text-black">{formatCurrency(amount)}</span>
    </div>
  )
}
