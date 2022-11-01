export interface Response {
  status: string;
  data?: Data;
}

interface Data {
  q: string;
  total_count: number;
  start: number;
  spelling_alternatives: object;
  items: Item[];
  count_in_response: number;
}

interface Item {
  name: string;
  type: string;
  url: string;
  identifier: string;
  description: string;
  published_at: string;
}