import { Client } from "@notionhq/client"
//const { Client } = require('@notionhq/client');

const { NOTION_KEY, NOTION_DB } = process.env;
// Initializing a client
const notion = new Client({
    auth: NOTION_KEY
});


export default async function handler(request, response) {
    try {
        const notionResponse = await notion.databases.query({
            database_id: NOTION_DB,
            filter: {
                property: "Status",
                status: {
                    equals: "done"
                }
            }
        });
        response.status(200).json({
            body: notionResponse
        });
    } catch (e) {
        console.log(e)
        return {
            body: e.toString()
        }
    }
}



