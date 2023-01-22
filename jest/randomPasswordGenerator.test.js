test('generatePassword', () => {
    // Arrange
    const length = 10;

  // Check if the user wants to include special characters
  let includeSpecialCharacters = document.getElementById("include-special-characters").checked;

  // Get the type of password
  let passwordType = document.getElementById("password-type").value;
    document.body.innerHTML = `
      <form>
        <label for="length">Length:</label>
        <input type="number" id="length" name="length" value="10">
        <br>
        <label for="password-type">Type:</label>
        <select id="password-type" name="password-type">
          <option value="alphanumeric">Alphanumeric</option>
        </select>
        <br>
        <label for="include-special-characters">Include special characters:</label>
        <input type="checkbox" id="include-special-characters" name="include-special-characters">
        <br>
        <button type="button" onclick="generatePassword()">Generate</button>
      </form>
      <br>
      <p id="password"></p>
    `;
  
    // Act
    generatePassword();
  
    // Assert
    let password = document.getElementById("password-display").value;
    expect(password.length).toBe(length);
    expect(password).toMatch(/^[a-zA-Z0-9]+$/);
 });

  