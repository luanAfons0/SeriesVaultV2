# 📺 SeriesVault (.NET Core)

This project is an API developed with C# and .NET Core with the objective of acquiring practical knowledge about creating RESTful APIs, using good practices such as dependency injection, Entity Framework and clean architecture.

---

## 🎯 Objective

The main objective of this API is to provide a practical experience in developing APIs using **C#** and **.NET Core**, exploring concepts such as:

- CRUD (Create, Read, Update, Delete)
- Code-First with Entity Framework
- Dependency Injection
- Organization of RESTful endpoints

---

## 🛠️ Technologies Used

- [.NET Core](https://dotnet.microsoft.com/)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
- MySQL (Code-First Migrations)
- Visual Studio / VS Code

---

## 📡 Available Endpoints

| Method | Route                     | Description                              |
| ------ | ------------------------- | ---------------------------------------- |
| GET    | `/api/series`             | Returns all series                       |
| GET    | `/api/series/{id}`        | Returns the series with the specified ID |
| PUT    | `/api/series/update/{id}` | Updates the series data by ID            |
| DELETE | `/api/series/delete/{id}` | Removes the series with the specified ID |

---

## 📚 References and Study Sources

- [Al Green - .NET 9 Web API & Entity Framework 🚀 Full Course](https://www.youtube.com/watch?v=AKjG2tjI07U&ab_channel=AlGreen)
- [Patrick God - Why Every .NET Developer NEEDS Dependency Injection](https://www.youtube.com/watch?v=YR8w2XAIWaw&ab_channel=PatrickGod)

---

## 📦 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/luanAfons0/SeriesVault.git
```

2. Access the project folder:

```bash
cd SeriesVault
```

3. Restore the packages:

```bash
dotnet restore
```

4. Run the application:

```bash
dotnet run
```

5. Access the API via browser or tools like Postman:

```bash
http://localhost:{port}/api/series
```

## 📌 Notes

This project is intended for learning and practicing with APIs in .NET. Feel free to explore, modify and evolve the application as needed.
Enviar feedback
Resultados de tradução disponíveis
