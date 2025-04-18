import { usePatientStore } from "../store"

export default function PatientsList() {

  const patients = usePatientStore((state) => state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <p>Si hay pacientes</p>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        </>
      )}
    </div>
  )
}
