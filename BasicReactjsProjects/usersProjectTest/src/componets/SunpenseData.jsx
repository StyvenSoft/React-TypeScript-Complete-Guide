import { Suspense } from "react";
import { fetchData } from "../fetchData";

const apiData = fetchData('https://jsonplaceholder.typicode.com/posts/1/comments')

export default function SunpenseData() {
  const data = apiData.read()

  return (
    <Suspense fallback={<div>loading...</div>}>
      <ul className="card">
        {data?.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </Suspense>
  )
}