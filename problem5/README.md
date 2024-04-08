## Run project
npm run start:dev

## List resources with basic filters.
curl --location 'http://localhost:3000/resource?sortBy=createdAt&sortDirection=asc&limit=10&page=1'

## Create a resource.
curl --location 'http://localhost:3000/resource' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Resource 6"
}'

## Get details of a resource.
curl --location 'http://localhost:3000/resource/44171e58-66e5-44e1-890a-1b73acc54e4e'

## Update resource details.
curl --location --request PUT 'http://localhost:3000/resource/44171e58-66e5-44e1-890a-1b73acc54e4e' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Resource update"
}'

## Delete a resource.
curl --location --request DELETE 'http://localhost:3000/resource/f0710884-fab9-45da-846c-0be992cee24e'