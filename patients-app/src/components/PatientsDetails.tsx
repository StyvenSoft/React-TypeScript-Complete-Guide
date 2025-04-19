import { Patient } from "../types"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({ patient }: PatientDetailsProps) {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Id: {''}
                <span className="font-normal normal-case">{patient.id}</span>
            </p>
            <p className="fond-bold mb-3 text-gray-700 uppercase">Nombre {''}
                <span className="font-normal normal-case">{patient.name}</span>
            </p>
        </div>
    )
}
