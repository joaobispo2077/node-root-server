<meta charset="utf-8">

<h1 align="center">
 Node Root Server
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=2BA5A5&labelColor=1C1C1C" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=not specified&color=2BA5A5&labelColor=1C1C1C">
</p>
<p align="center">
  <a href="https://github.com/joaobispo2077" target="_blank" >
    <img alt="Github - João Bispo" src="https://img.shields.io/badge/Github--%4B0082?style=plastic&labelColor=1C1C1C&color=2BA5A5&logo=github">
  </a>
  <a href="https://www.linkedin.com/in/joaobispo2077/" target="_blank" >
    <img alt="Linkedin - João Bispo" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=plastic&labelColor=1C1C1C&color=2BA5A5&logo=linkedin">
  </a>
  <a href="mailto:joaobispo2077@gmail.com" target="_blank" >
    <img alt="Email - João Bispo" src="https://img.shields.io/badge/Email--%23F8952D?style=plastic&labelColor=1C1C1C&color=2BA5A5&logo=gmail">
  </a>
</p>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-how-to-contribute">How to contribute</a>
</p>

<br>

## 💻 Project

This project is a user CRUD API with an in-memory database built in Node.js without any external libraries.

## 🚀 Techs

The project is based on the following technologies:

- [📦 Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — Programming language.
- [📦 Node.js](https://nodejs.org/en/) — JavaScript runtime environment.
- [📦 Restful concepts](https://restfulapi.net/) — Architectural style for APIs.

## 🔖 Documentation

### Setup

Install Node.js 18 and run the following command:

```bash
npm run dev
```

### Routes

#### GET /users - list users

```bash
curl --request GET --url http://localhost:3333/users
```



<details>
  <summary>Response code <b>200</b> and <u>click here</u> to see the <b>response body</b></summary>

```json
[
	{
    "id": "8bc91d7d-1733-4fc8-a280-f3723d5f9a03",
		"name": "John Doe",
		"email": "john.doe@gmail.com"
	},
	{
    "id": "1bc91d7d-1733-4fc8-a280-f3723d5f9a06",
		"name": "John Doe 2",
		"email": "john.doe2@gmail.com"
	}
]
```

</details>

#### POST /users - create an user

```bash
curl --request POST --url http://localhost:3333/users --header 'Content-Type: application/json' --data '{"name": "John Doe", "email": "john.doe@gmail.com"}'
```



<details>
  <summary>Response code <b>201</b> and <u>click here</u> to see the request body</summary>

```json
{
	"name": "John Doe",
	"email": "jjjj"
}
```
</details>

If you want to search for an specific user, you can use the query param `search`:

```bash
curl --request GET --url 'http://localhost:3333/users?search=John Doe'
```

There is no response body for this request.

#### PUT /users/:id - update an user

```bash
curl --request PUT --url http://localhost:3333/users/8bc91d7d-1733-4fc8-a280-f3723d5f9a03 --header 'Content-Type: application/json' --data '{"name": "John Doe 2", "email": "john2.doe@gmail.com"}'
```

<details>
  <summary>Response code <b>204</b> and <u>click here</u> to see the request body</summary>

```json
{
	"email": "updatedmail",
	"name": "updated name"
}
```
</details>

There is no response body for this request.

#### DELETE /users/:id - delete an user

```bash
curl --request DELETE --url http://localhost:3333/users/8bc91d7d-1733-4fc8-a280-f3723d5f9a03
```

**Response code 204**, there is no request/response body for this request.

## ♻️ How to contribute

- Fork this repository;
- Create a new branch with your feature: `git checkout -b feature/my-feature`;
- Commit your changes: `git commit -m 'feat: awesome feature'`;
- Push to your branch: `git push origin feature/my-feature`.

Once your pull request has been merged, you can delete your branch.

---

<p align="center">Made with 💙 & ☕  by <strong><a href="https://www.linkedin.com/in/joaobispo2077/">João Bispo</a>😎 </strong> </p>
