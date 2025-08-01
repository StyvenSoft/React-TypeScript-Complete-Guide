import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import type { Recipe } from '../types';
import type { JSX } from 'react/jsx-runtime';
 
export default function Modal() {
  
  const modal = useAppStore((state) => state.modal)
  const closeModal = useAppStore((state) => state.closeModal)
  const selectedRecipe = useAppStore((state) => state.selectedRecipe)
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)
  const favoriteExists = useAppStore((state) => state.favoriteExists)

  const renderIngredients = () => {
    const ingredients : JSX.Element[] = []

    for (let index = 1; index < 6; index++) {
      const ingredient = selectedRecipe[`strIngredient${index}` as keyof Recipe]
      const measure = selectedRecipe[`strMeasure${index}` as keyof Recipe]
      
      if (ingredient && measure) {
        ingredients.push(
          <li key={index} className='text-lg font-normal text-gray-900 '>
            {ingredient} - {measure}
          </li>
        )
      }
    }
    return ingredients
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>
 
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {selectedRecipe.strDrink}
                  </DialogTitle>
                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </DialogTitle>
                  {renderIngredients()}
                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </DialogTitle>
                  <p className='text-lg text-gray-900'>{selectedRecipe.strInstructions}</p>

                  <div className='mt-5 flex justify-between gap-4'>
                    <button
                      type='button'
                      className='w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500 cursor-pointer'
                      onClick={closeModal}
                    >
                      Cerrar
                    </button>
                    <button
                      type='button'
                      className='w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500 cursor-pointer'
                      onClick={() => {
                        handleClickFavorite(selectedRecipe)
                        closeModal()
                      }}
                    >
                      {favoriteExists(selectedRecipe.idDrink) ? 'Eliminar Favorito' : 'Agregar a Favoritos'}
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}