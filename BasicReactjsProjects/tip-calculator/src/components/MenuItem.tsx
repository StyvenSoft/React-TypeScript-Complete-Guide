import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
      className="border-2 bg-sky-950 hover:bg-sky-800 text-white w-full p-3 flex justify-between rounded-lg"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p> 
    </button>
  )
}
