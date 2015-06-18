# API Endpoints

## Images

#### Image Collection 

Displays a collection of active and unflagged images
`/api/images/`

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

#### Image Element

Displays a single image
`/api/images/<image_id>/`

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
