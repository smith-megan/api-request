1. Takes text,date,id
{
        "id": 6812,
        "text": "glad its over.",
        "date": "16 Aug 2021"
    },

2. returns a object

3. https://practiceapi.devmountain.com/api/posts?id=555

4. 409 Request query is missing required text property.
200	Returns an array of filtered posts.

5.https://practiceapi.devmountain.com/api/posts/
{
  "text": "Megan Smith"
}

6.https://practiceapi.devmountain.com/api/posts?id=6822
{
  "text": "purple"
}
7.https://practiceapi.devmountain.com/api/posts/filter?text=blue

8.application/json; charset=utf-8

9.Request was missing req.query.id or req.body.text

10.I get the full response, it will hit the .get url first without worrying about the query