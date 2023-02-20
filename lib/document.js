function createTeamDirectory(data) {


  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${data.name}s Team Directory</title>
      <link rel="stylesheet" href="./dist/style.css"/>
    </head>
    <body>
    


      <div class="column">
      <h1>${data.name}s Team Directory</h1>
      <div class="card">
          <div class="container">
              <h2>${data.name}</h2>
              <h3>${data.newTeamMember}</h3>
              <p>${data.name}</p>
              <p>${data.id}</p>
              <p>${data.email}</p>
              <p>${data.officeNumber}</p>
              // <p>github holder</p><p>school holder</p>       
          </div>
      </div>
  </div>
    </body>
  </html>
  `;
}

module.exports = createTeamDirectory;


