# API Endpoints - Implemented

## Images

#### `/api/images/`

#####GET
Displays a collection of active and unflagged images


```json
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
#####POST
Creates an image and returns JSON representation

Data sent as JSON:

```json
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


#### Active Campaign Images

Displays a collection of images from the currently active campaign

`/api/images/active_campaign/`

#### Inactive Campaign Images

Displays a collection of images from past campaigns

`/api/images/inactive_campaigns/`

#### Winning Images

Displays a collection of images that have won a campaign

`/api/images/winners/`

#### Upvote Image

Adds a vote to an image's score and displays image JSON

`/api/images/<image_id>/upvote/`

#### Downvote Image

Removes a vote from an image's score and displays image JSON

`/api/images/<image_id>/downvote/`



## Campaigns

#### Campaign Collection

Displays a collection of all campaigns

`/api/campaigns/`

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

`/api/campaigns/<campaign_id>/`

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

`/api/campaigns/active/`


## API Endpoints - To Do
