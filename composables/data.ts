import { Response } from "../types/response";

const URL ="https://demo.dataverse.org/api/search"

const data = ref<Response>({
  status: "ERROR",
})

export default function useData() {
  async function getData(q: string) {
    const response = await fetch(URL + `?q=${q}`)
    data.value = await response.json()
  }
  return {data, getData}
}