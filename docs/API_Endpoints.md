# API Endpoints - Implemented

## Images

#### `/api/images/`

##### GET
Displays a collection of active and unflagged images


```json
GET /api/images/
[
    {
        "id": 19,
        "image_name": "Ocean-waves.jpg",
        "image": "https://cg-intern.s3.amazonaws.com/media/Ocean-waves.jpg",
        "user": "Josh",
        "user_id": 2,
        "campaign": "Angelhacks Hackathon",
        "campaign_id": 1,
        "score": 5,
        "flagged": false
    }
]
```
##### POST
Creates an image and returns JSON representation

Data sent as JSON:

```json
POST /api/images/
{
"email": "<user email>",
"name": "<user preferred name>",
"image": "<base64 encoded image>"
}
```

Response:

- Image created: status 201, data: image element JSON
- Error: status 400, data: error JSON


#### `/api/images/<image_id>/`

##### GET

```json
GET /api/images/<image_id>/
{
    "id": 19,
    "image_name": "Ocean-waves.jpg",
    "image": "https://cg-intern.s3.amazonaws.com/media/Ocean-waves.jpg",
    "user": "Josh",
    "user_id": 2,
    "campaign": "Angelhacks Hackathon",
    "campaign_id": 1,
    "score": 5,
    "flagged": false
}
```

##### PUT
Modifies an image element and returns JSON representation

Data sent as JSON:

```json
PUT /api/images/<image_id>/
{
"email": "<user email>",
"name": "<user preferred name>",
"image": "<base64 encoded image>"
}
```

Response:

- Image updated: status 200, data: image element JSON
- Error: status 400, data: error JSON

##### DELETE

Deletes an image element and returns status 204 on successful deletion

```
DELETE /api/images/<image_id>/
```

#### Active Campaign Images

Displays a collection of images from the currently active campaign.

Includes boolean 'voted' that indicates whether the user has placed a vote for the image. Votes are tracked by device ID, if included in request, or IP address if device ID is not included.

To get votes using a device ID, include it as 'device_id'in the request params.


```json
(for IP address tracking)
GET /api/images/active_campaigns/ 

(for device ID tracking)
GET /api/images/active_campaigns/?device_id=device_id 
{
    "id": 19,
    "image_name": "Ocean-waves.jpg",
    "image": "https://cg-intern.s3.amazonaws.com/media/Ocean-waves.jpg",
    "user": "Josh",
    "user_id": 2,
    "campaign": "Angelhacks Hackathon",
    "campaign_id": 1,
    "score": 5,
    "flagged": false,
    "voted": false
}
```

#### Inactive Campaign Images

Displays a collection of images from past campaigns

`GET /api/images/inactive_campaigns/`

#### Winning Images

Displays a collection of images that have won a campaign

`GET /api/images/winners/`

#### Upvote Image

Adds a vote to an image's score and displays image JSON
Vote is tracked by device ID, if included in request, or IP address if device ID is not included.

To vote using a device ID, include it as 'device_id'in the request params.

(if using IP address)
`GET /api/images/<image_id>/upvote/`    

(for device ID tracking)
`GET /api/images/<image_id>/upvote/?device_id=device_id`     


## Campaigns

#### Campaign Collection

Displays a collection of all campaigns

`GET /api/campaigns/`

```json
[
    {
        "name": "Angelhacks Hackathon",
        "id": 1,
        "sponsor_name": "Control_Group",
        "sponsor": 4,
        "start_date": "1998-09-07T17:37:13Z",
        "end_date": "2002-10-03T11:58:51Z"
    }
]
```

#### Campaign Element

Displays a single campaign

`GET /api/campaigns/<campaign_id>/`

```json
{
    "name": "Angelhacks Hackathon",
    "id": 1,
    "sponsor_name": "Control_Group",
    "sponsor": 4,
    "start_date": "1998-09-07T17:37:13Z",
    "end_date": "2002-10-03T11:58:51Z"
}
```

#### Active Campaign

Displays the currently active campaign

`GET /api/campaigns/active/`


## API Endpoints - To Do
