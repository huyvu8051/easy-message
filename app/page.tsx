import {fetchRevenue} from '@/app/lib/data'
import { sql } from "@vercel/postgres";

export default async function Cart({
                                     params
                                   } : {
  params: { user: string }
}): Promise<JSX.Element> {
  // const { rows } = await sql`SELECT * from customers where id=${params.user}`;

    // console.log('ass', params, rows)

    // let customers = await fetchRevenue()

  return (
      <div>
        {/*{customers.map((row) => (*/}
        {/*    <div key={row.id}>*/}
        {/*      {row.id} - {row.name}*/}
        {/*    </div>*/}
        {/*))}*/}
      </div>
  );
}